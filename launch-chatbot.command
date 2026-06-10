#!/bin/bash
# Double-click launcher for "Chat with Ruben, about Claude".
# Starts the local server (if it isn't already running) and opens the browser.

export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.npm-global/bin:$PATH"
PROJECT_DIR="$HOME/Documents/chat-with-ruben"
URL="http://localhost:3000"

cd "$PROJECT_DIR" || { echo "Project folder not found: $PROJECT_DIR"; read -r -p "Press Enter to close."; exit 1; }

# If the server is already running, just open the browser.
if curl -s -o /dev/null --max-time 2 "$URL"; then
  echo "Chatbot is already running — opening your browser."
  open "$URL"
  exit 0
fi

echo "Starting Chat with Ruben…  (leave this window open; press Ctrl+C to stop)"
npm run dev &
SERVER_PID=$!

# Open the browser once the server answers (up to ~60s for first compile).
for _ in $(seq 1 60); do
  sleep 1
  if curl -s -o /dev/null --max-time 2 "$URL"; then
    open "$URL"
    break
  fi
done

# Keep this window attached to the server; Ctrl+C (or closing the window) stops it.
wait $SERVER_PID
