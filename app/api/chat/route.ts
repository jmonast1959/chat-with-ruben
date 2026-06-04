import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/prompt";

// Run on the Node.js runtime so the Anthropic SDK and streaming work cleanly.
export const runtime = "nodejs";
export const maxDuration = 60;

const MODEL = "claude-sonnet-4-6";
const MAX_TURNS = 12; // cap how much history we forward to keep things snappy

interface ClientMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The chatbot isn't configured yet — ANTHROPIC_API_KEY is missing." },
      { status: 500 }
    );
  }

  let messages: ClientMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Keep only well-formed turns, trim to the most recent exchange.
  const history = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return Response.json({ error: "No question to answer." }, { status: 400 });
  }

  const anthropic = new Anthropic({ apiKey });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const llmStream = anthropic.messages.stream({
          model: MODEL,
          max_tokens: 1024,
          system: [
            {
              type: "text",
              text: SYSTEM_PROMPT,
              // Cache the large, static knowledge-base prompt across requests.
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: history,
        });

        llmStream.on("text", (text) => {
          controller.enqueue(encoder.encode(text));
        });

        await llmStream.finalMessage();
        controller.close();
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong.";
        // Surface a readable error into the stream so the UI can show it.
        controller.enqueue(
          encoder.encode(`\n\n⚠️ Sorry, I hit an error: ${message}`)
        );
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  });
}
