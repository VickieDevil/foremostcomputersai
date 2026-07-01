"use client";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageComposer from "./MessageComposer";

import { useMessages } from "../../../hooks/useMessages";

interface Props {
  customerId: string;
}

export default function ChatWindow({
  customerId,
}: Props) {
  const {
    messages,
    addMessage,
  } = useMessages();

  async function handleSend(
    text: string
  ): Promise<void> {
    addMessage("me", text);
  }

  return (
    <div
      style={{
        background: "#fff",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        border: "1px solid #ddd",
        overflow: "hidden",
      }}
    >
      <ChatHeader
        customerName={`Customer #${customerId}`}
        mobile="9876543210"
        online
      />

      <div
        style={{
          flex: 1,
          padding: 20,
          overflowY: "auto",
          background: "#f5f5f5",
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "#64748b",
              marginTop: 40,
            }}
          >
            No Messages Yet
          </div>
        )}

        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            sender={msg.from}
           time={new Date(
  msg.createdAt ?? new Date().toISOString()
).toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
})}
          />
        ))}
      </div>

      <MessageComposer
        onSend={handleSend}
      />
    </div>
  );
}