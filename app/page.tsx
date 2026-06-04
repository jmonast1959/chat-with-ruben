"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What is Claude, in plain English?",
  "Claude or ChatGPT — which should I use?",
  "What is Cowork and why does it matter?",
  "How do I make Claude sound like me?",
  "How can I get Claude certified for free?",
];

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const conversationRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Keep the view pinned to the latest message as content streams in.
  useEffect(() => {
    const el = conversationRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, streaming]);

  // Auto-grow the textarea.
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }, [input]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || streaming) return;

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    setInput("");
    setStreaming(true);

    // Placeholder assistant message we stream into.
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Request failed.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = {
          role: "assistant",
          content: `⚠️ Sorry, I hit an error: ${message}`,
        };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const isEmpty = messages.length === 0;
  const lastMsg = messages[messages.length - 1];
  const waitingForFirstToken =
    streaming && lastMsg?.role === "assistant" && lastMsg.content === "";

  return (
    <div className="app">
      <header className="header">
        <h1>Chat with Ruben, about Claude</h1>
        <p>Answers drawn straight from Ruben Hassid&rsquo;s Claude newsletters.</p>
      </header>

      {isEmpty ? (
        <div className="empty">
          <div className="empty-lead">
            Hey — I&rsquo;m <strong>Ruben</strong>. Ask me anything about Claude:
            getting started, Cowork, plugins, writing in your own voice, the free
            certifications. I&rsquo;ll answer from what I&rsquo;ve written. Pick a
            question or type your own.
          </div>
          <div className="suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="suggestion"
                onClick={() => send(s)}
                type="button"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="conversation" ref={conversationRef}>
          {messages.map((m, i) => (
            <div key={i} className={`row ${m.role}`}>
              <div className="bubble">
                {m.role === "assistant" ? (
                  i === messages.length - 1 && waitingForFirstToken ? (
                    <span className="typing">
                      <span />
                      <span />
                      <span />
                    </span>
                  ) : (
                    <ReactMarkdown
                      components={{
                        a: ({ ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  )
                ) : (
                  m.content
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="composer">
        <form onSubmit={onSubmit}>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask about Claude…"
            rows={1}
            autoFocus
          />
          <button
            className="send"
            type="submit"
            disabled={!input.trim() || streaming}
            aria-label="Send"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </form>
        <p className="disclaimer">
          Grounded in Ruben&rsquo;s newsletters. For more, visit{" "}
          <a href="https://ruben.substack.com" target="_blank" rel="noopener noreferrer">
            ruben.substack.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
