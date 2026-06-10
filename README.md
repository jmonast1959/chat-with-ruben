# Chat with Ruben, about Claude

A clean, minimal chatbot that answers questions about Claude using **only**
Ruben Hassid's newsletters as its knowledge base. Ask a question, get an answer
in Ruben's voice — grounded in exactly the eight newsletters in `newsletters/`.

**Runs entirely on your Mac. No API key, no billing, no cloud.** It answers by
calling your locally-installed, logged-in **Claude Code CLI** — i.e. your Claude
subscription, the same account as the desktop app.

---

## One-time setup

You only do this once.

**1. Install the Claude CLI** (if it isn't already):

```sh
npm config set prefix ~/.npm-global
npm install -g @anthropic-ai/claude-code
```

Make sure `~/.npm-global/bin` is on your PATH (add to `~/.zshrc` or
`~/.tcshrc`), or just rely on the app — it looks for the CLI there automatically.

**2. Log in to the CLI** with your Claude account (this is the "authentication"
the app uses — a browser sign-in, no API key):

```sh
~/.npm-global/bin/claude
```

When it opens, type `/login`, press Enter, and sign in with the **same Claude
account as your desktop app**. Once you see the chat prompt, you're logged in —
type `/exit` to quit.

**3. Install the app's dependencies** (run from the project folder):

```sh
cd ~/Documents/chat-with-ruben
npm install
```

---

## Start it

From the project folder:

```sh
cd ~/Documents/chat-with-ruben
npm run dev
```

Wait for `✓ Ready`, then open **http://localhost:3000** in your browser. Ask away.

## Stop it

In the same terminal, press **Ctrl + C**. That shuts the server down. (Closing
the terminal window also stops it.)

---

## How it works

- **Frontend** — a single-page chat UI (`app/page.tsx`): light background,
  conversation above, input pinned to the bottom, streaming responses.
- **Backend** — `app/api/chat/route.ts` spawns the Claude CLI in print mode
  (`claude --print`) with a custom system prompt, no MCP servers, and all tools
  disabled — a pure, grounded Q&A. No network calls of its own; the CLI uses
  your subscription.
- **Knowledge base** — `scripts/build-knowledge.mjs` reads `newsletters/*.md`
  and generates `lib/knowledge.ts`, which is embedded into the system prompt
  (`lib/prompt.ts`). Small corpus, so no vector DB — answers stay tightly
  grounded in exactly these files.

## Optional configuration

Copy `.env.example` to `.env.local` only if you need to override defaults:

| Variable          | Default            | Purpose                          |
| ----------------- | ------------------ | -------------------------------- |
| `CLAUDE_CLI_PATH` | auto-detected      | Explicit path to the `claude` binary |
| `CHAT_MODEL`      | `sonnet`           | Model the CLI answers with       |

## Updating the knowledge base

Edit or add files in `newsletters/`, then restart (`npm run dev` rebuilds the
knowledge base automatically on start).

## Troubleshooting

- **"It looks like the Claude CLI isn't logged in"** — run `~/.npm-global/bin/claude`,
  `/login`, sign in, then retry.
- **"Couldn't start the Claude CLI"** — the binary wasn't found. Set
  `CLAUDE_CLI_PATH` in `.env.local` to its full path (find it with `which claude`).
