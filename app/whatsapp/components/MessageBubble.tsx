"use client";

interface Props {
  text: string;
  sender: "me" | "customer";
  time: string;
}

export default function MessageBubble({
  text,
  sender,
  time,
}: Props) {
  const mine = sender === "me";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: mine
          ? "flex-end"
          : "flex-start",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          maxWidth: 340,
          background: mine ? "#dcf8c6" : "#ffffff",
          padding: "10px 14px",
          borderRadius: 12,
          boxShadow: "0 1px 3px rgba(0,0,0,.08)",
        }}
      >
        <div>{text}</div>

        <div
          style={{
            fontSize: 11,
            color: "#64748b",
            textAlign: "right",
            marginTop: 6,
          }}
        >
          {time}
        </div>
      </div>
    </div>
  );
}