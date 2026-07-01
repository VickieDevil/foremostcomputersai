"use client";

export default function WhatsappStats() {
  const stats = [
    {
      title: "Today's Messages",
      value: 128,
      color: "#2563eb",
    },
    {
      title: "Unread Chats",
      value: 18,
      color: "#dc2626",
    },
    {
      title: "Broadcast Sent",
      value: 24,
      color: "#16a34a",
    },
    {
      title: "AI Replies",
      value: 79,
      color: "#7c3aed",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
      }}
    >
      {stats.map((item) => (
        <div
          key={item.title}
          style={{
            background: "#fff",
            padding: 22,
            borderRadius: 12,
            boxShadow:
              "0 2px 8px rgba(0,0,0,.08)",
          }}
        >
          <div
            style={{
              color: "#64748b",
              fontSize: 14,
            }}
          >
            {item.title}
          </div>

          <h1
            style={{
              color: item.color,
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            {item.value}
          </h1>
        </div>
      ))}
    </div>
  );
}