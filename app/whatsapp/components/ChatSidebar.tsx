"use client";

import { WhatsappContact } from "../../../types/whatsapp";

interface Props {
  chats: WhatsappContact[];
}

export default function ChatSidebar({
  chats,
}: Props) {
  return (
    <div
      style={{
        width: 320,
        borderRight: "1px solid #ddd",
        background: "#fff",
        overflowY: "auto",
      }}
    >
      {chats.length === 0 && (
        <div
          style={{
            padding: 20,
            color: "#64748b",
            textAlign: "center",
          }}
        >
          No Contacts Found
        </div>
      )}

      {chats.map((chat) => (
        <div
          key={chat.id}
          style={{
            padding: 15,
            borderBottom: "1px solid #eee",
            cursor: "pointer",
          }}
        >
          <strong>
            {chat.name}
          </strong>

          <div
            style={{
              color: "#64748b",
              fontSize: 13,
              marginTop: 4,
            }}
          >
            {chat.country_code} {chat.mobile}
          </div>

          <div
            style={{
              color: "#16a34a",
              fontSize: 12,
              marginTop: 4,
            }}
          >
            {chat.is_blocked ? "Blocked" : "Active"}
          </div>
        </div>
      ))}
    </div>
  );
}