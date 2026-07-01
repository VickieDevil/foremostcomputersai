"use client";

export default function AIStatus() {
  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        boxShadow:
          "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>AI Assistant Status</h3>

      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 14,
        }}
      >
        <Status
          title="Gemini Connected"
          value="Online"
          color="#16a34a"
        />

        <Status
          title="WhatsApp API"
          value="Ready"
          color="#2563eb"
        />

        <Status
          title="Auto Reply"
          value="Enabled"
          color="#7c3aed"
        />

        <Status
          title="Broadcast Queue"
          value="Idle"
          color="#f59e0b"
        />
      </div>
    </div>
  );
}

function Status({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{title}</span>

      <strong
        style={{
          color,
        }}
      >
        {value}
      </strong>
    </div>
  );
}