"use client";

import { WhatsappMessage } from "../../../types/whatsapp";
import MessageBubble from "./MessageBubble";

interface Props {
  messages: WhatsappMessage[];
}

export default function ChatWindow({
  messages,
}: Props) {
  return (
    <div
      style={{
        flex: 1,
        background: "#f3f4f6",
        padding: 20,
        overflowY: "auto",
        height: "70vh",
      }}
    >
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
        />
      ))}
    </div>
  );
}