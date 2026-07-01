"use client";

import { WhatsappMessage } from "../../../types/whatsapp";

interface Props {
  message: WhatsappMessage;
}

export default function MessageBubble({
  message,
}: Props) {
  const isOutgoing =
    message.direction === "outgoing";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isOutgoing
          ? "flex-end"
          : "flex-start",
        marginBottom: 12,
      }}
    >
      <div
        style={{
          background: isOutgoing
            ? "#DCF8C6"
            : "#ffffff",
          padding: 12,
          borderRadius: 12,
          maxWidth: "70%",
          boxShadow:
            "0 1px 4px rgba(0,0,0,.08)",
        }}
      >
        <div>{message.message}</div>

        <small
          style={{
            color: "#64748b",
          }}
        >
          {message.status}
        </small>
      </div>
    </div>
  );
}