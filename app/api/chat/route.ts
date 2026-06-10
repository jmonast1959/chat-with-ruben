import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { SYSTEM_PROMPT } from "@/lib/prompt";

// This route does NOT use an Anthropic API key. Instead it shells out to the
// locally-installed, already-authenticated Claude Code CLI, which answers using
// your Claude subscription (the same account as the desktop app). No key, no
// billing, runs entirely on your Mac.
export const runtime = "nodejs";
export const maxDuration = 120;

const MODEL = process.env.CHAT_MODEL || "sonnet";

// Tools we never want the chatbot to reach for — this is a pure Q&A over the
// newsletters, so block file/web/shell access entirely.
const DISALLOWED_TOOLS = [
  "Bash",
  "Edit",
  "Write",
  "Read",
  "Glob",
  "Grep",
  "WebSearch",
  "WebFetch",
  "Task",
  "NotebookEdit",
];

interface ClientMessage {
  role: "user" | "assistant";
  content: string;
}

// Find the Claude CLI without depending on the server's PATH (Next dev may be
// launched from a shell that doesn't include the npm-global bin dir).
function resolveClaudeBin(): string {
  if (process.env.CLAUDE_CLI_PATH) return process.env.CLAUDE_CLI_PATH;
  const home = homedir();
  const candidates = [
    join(home, ".npm-global/bin/claude"),
    "/usr/local/bin/claude",
    "/opt/homebrew/bin/claude",
    join(home, ".local/bin/claude"),
  ];
  for (const c of candidates) if (existsSync(c)) return c;
  return "claude"; // fall back to PATH
}

// Render the conversation into a single prompt for the CLI. The system prompt
// (persona + newsletters + rules) is passed separately via --system-prompt.
function buildPrompt(history: ClientMessage[]): string {
  const lines = history.map((m) =>
    m.role === "user" ? `[Visitor]: ${m.content}` : `[Ruben]: ${m.content}`
  );
  return (
    "Here is the conversation so far. Reply to the final visitor message as Ruben, " +
    "following your system instructions.\n\n" +
    lines.join("\n\n") +
    "\n\n[Ruben]:"
  );
}

export async function POST(req: Request) {
  let messages: ClientMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const history = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-12);

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return Response.json({ error: "No question to answer." }, { status: 400 });
  }

  const bin = resolveClaudeBin();
  const args = [
    "--print",
    "--system-prompt",
    SYSTEM_PROMPT,
    "--exclude-dynamic-system-prompt-sections",
    "--model",
    MODEL,
    "--strict-mcp-config",
    "--mcp-config",
    '{"mcpServers":{}}',
    "--disallowedTools",
    ...DISALLOWED_TOOLS,
  ];

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      // Run in a neutral temp dir so the CLI doesn't pick up any project
      // CLAUDE.md, settings, or local context.
      const child = spawn(bin, args, {
        cwd: tmpdir(),
        env: { ...process.env },
      });

      let sawOutput = false;
      let stderr = "";
      let closed = false;
      const safeClose = () => {
        if (!closed) {
          closed = true;
          try {
            controller.close();
          } catch {
            /* already closed */
          }
        }
      };

      child.stdout.on("data", (chunk: Buffer) => {
        sawOutput = true;
        controller.enqueue(new Uint8Array(chunk));
      });

      child.stderr.on("data", (chunk: Buffer) => {
        stderr += chunk.toString();
      });

      child.on("error", (err) => {
        controller.enqueue(
          encoder.encode(
            `⚠️ Couldn't start the Claude CLI (${err.message}). Make sure it's installed and you've run \`claude\` once to log in.`
          )
        );
        safeClose();
      });

      child.on("close", (code) => {
        if (!sawOutput) {
          const hint = /not logged in|\/login|authenticat/i.test(stderr)
            ? "It looks like the Claude CLI isn't logged in yet. Open a terminal, run `claude`, and sign in with your Claude account — then try again."
            : stderr.trim() ||
              `The Claude CLI exited with code ${code} and no output.`;
          controller.enqueue(encoder.encode(`⚠️ ${hint}`));
        }
        safeClose();
      });

      // Feed the conversation to the CLI via stdin.
      child.stdin.write(buildPrompt(history));
      child.stdin.end();

      // If the client disconnects, kill the child.
      req.signal?.addEventListener("abort", () => {
        child.kill("SIGTERM");
        safeClose();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
