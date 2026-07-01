"use client";

import { useState } from "react";

interface Props {
  onSend: (
    message: string
  ) => void;
}

export default function AIReplyBox({
  onSend,
}: Props) {
  const [text, setText] =
    useState("");

  return (
    <div
      style={{
        padding: 20,
        borderTop:
          "1px solid #ddd",
        background: "#fff",
      }}
    >
      <textarea
        rows={3}
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: 12,
        }}
      />

      <button
        style={{
          marginTop: 12,
          background: "#25D366",
          color: "#fff",
          border: "none",
          padding:
            "10px 20px",
          borderRadius: 8,
          cursor: "pointer",
        }}
        onClick={() => {
          if (!text.trim())
            return;

          onSend(text);

          setText("");
        }}
      >
        Send
      </button>
    </div>
  );
}