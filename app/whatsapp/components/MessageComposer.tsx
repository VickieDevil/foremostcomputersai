"use client";

import { useState } from "react";

interface Props {
  onSend: (message: string) => Promise<void>;
}

export default function MessageComposer({
  onSend,
}: Props) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function send() {
    if (!message.trim()) return;

    try {
      setSending(true);

      await onSend(message);

      setMessage("");
    } finally {
      setSending(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 15,
        borderTop: "1px solid #ddd",
        background: "#fff",
      }}
    >
      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Type message..."
        disabled={sending}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
        style={{
          flex: 1,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ddd",
        }}
      />

      <button
        disabled={sending}
        onClick={send}
        style={{
          background: "#16a34a",
          color: "#fff",
          border: "none",
          padding: "12px 18px",
          borderRadius: 8,
          cursor: "pointer",
          opacity: sending ? 0.6 : 1,
        }}
      >
        {sending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}