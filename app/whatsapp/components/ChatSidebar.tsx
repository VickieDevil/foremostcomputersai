"use client";

import { ChatSession } from "../../../types/whatsapp";

interface Props {
  chats: ChatSession[];
}

export default function ChatSidebar({
  chats,
}: Props) {
  return (
    <div
      style={{
        width: 320,
        borderRight:
          "1px solid #ddd",
        background: "#fff",
      }}
    >
      {chats.map((chat) => (
        <div
          key={chat.customer_id}
          style={{
            padding: 15,
            borderBottom:
              "1px solid #eee",
            cursor: "pointer",
          }}
        >
          <strong>
            {chat.customer_name}
          </strong>

          <div
            style={{
              color: "#64748b",
              fontSize: 13,
            }}
          >
            {chat.last_message}
          </div>
        </div>
      ))}
    </div>
  );
}