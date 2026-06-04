# Chat with Ruben, about Claude

A clean, minimal chatbot that answers questions about Claude using **only**
Ruben Hassid's newsletters as its knowledge base. Ask a question, get an answer
in Ruben's voice — grounded in exactly the eight newsletters in `newsletters/`.

## How it works

- **Frontend** — a single-page chat UI (Next.js App Router, `app/page.tsx`):
  light background, conversation above, input pinned to the bottom, streaming
  responses.
- **Backend** — `app/api/chat/route.ts`, a serverless function that streams from
  the Anthropic API. The system prompt (`lib/prompt.ts`) embeds the full text of
  all newsletters and instructs the model to answer only from them, in Ruben's
  voice, and to point people to `ruben.substack.com` for anything not covered.
- **Knowledge base** — `scripts/build-knowledge.mjs` reads `newsletters/*.md` at
  build time and generates `lib/knowledge.ts`. No vector DB, no runtime file
  reads — the corpus is small enough to live in the prompt, which keeps answers
  tightly grounded.

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your real ANTHROPIC_API_KEY
npm run dev
```

Open http://localhost:3000.

## Configuration

| Variable            | Required | Description                          |
| ------------------- | -------- | ------------------------------------ |
| `ANTHROPIC_API_KEY` | yes      | Anthropic API key for the chat route |

## Updating the knowledge base

Edit or add files in `newsletters/`, then rebuild — `npm run build` regenerates
`lib/knowledge.ts` automatically.

## Deploy

Deployed on Vercel. Set `ANTHROPIC_API_KEY` in the project's Environment
Variables. The build command (`npm run build`) regenerates the knowledge base
before building.
