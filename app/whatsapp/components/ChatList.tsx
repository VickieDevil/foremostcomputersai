"use client";

import ChatItem from "./ChatItem";

interface Props {
  selectedId: string;

  onSelect: (id: string) => void;
}

export default function ChatList({
  selectedId,
  onSelect,
}: Props) {
  const chats = [
    {
      id: "1",
      name: "Rahul Sharma",
      mobile: "9876543210",
      lastMessage: "PAN Card banwana hai.",
      unread: 2,
      time: "10:15",
      online: true,
    },
    {
      id: "2",
      name: "Pooja Singh",
      mobile: "9898989898",
      lastMessage: "Passport Ready?",
      unread: 0,
      time: "Yesterday",
      online: false,
    },
    {
      id: "3",
      name: "Amit Kumar",
      mobile: "9999999999",
      lastMessage: "Income Certificate",
      unread: 5,
      time: "09:45",
      online: true,
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #ddd",
      }}
    >
      <div
        style={{
          padding: 15,
          borderBottom: "1px solid #eee",
        }}
      >
        <input
          placeholder="Search Customer..."
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ddd",
          }}
        />
      </div>

      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          customer={chat}
          active={selectedId === chat.id}
          onSelect={() => onSelect(chat.id)}
        />
      ))}
    </div>
  );
}