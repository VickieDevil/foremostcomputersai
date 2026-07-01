"use client";

const chats = [
  {
    name: "Rahul Sharma",
    last: "Sir PAN Card ban gaya?",
    time: "10:45 AM",
    unread: 2,
  },
  {
    name: "Pooja Verma",
    last: "Thank you 😊",
    time: "09:10 AM",
    unread: 0,
  },
  {
    name: "Mohit Kumar",
    last: "Passport appointment kab hai?",
    time: "Yesterday",
    unread: 5,
  },
  {
    name: "Aman Singh",
    last: "Income Certificate upload kar diya.",
    time: "Yesterday",
    unread: 1,
  },
];

export default function RecentChats() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>Recent Chats</h3>

      <div style={{ marginTop: 20 }}>
        {chats.map((chat) => (
          <div
            key={chat.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <strong>{chat.name}</strong>

              <div
                style={{
                  color: "#64748b",
                  marginTop: 4,
                  fontSize: 14,
                }}
              >
                {chat.last}
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#64748b",
                }}
              >
                {chat.time}
              </div>

              {chat.unread > 0 && (
                <div
                  style={{
                    marginTop: 8,
                    background: "#16a34a",
                    color: "#fff",
                    borderRadius: 50,
                    width: 26,
                    height: 26,
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 12,
                  }}
                >
                  {chat.unread}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}