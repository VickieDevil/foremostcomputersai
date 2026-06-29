"use client";

const buttonStyle: React.CSSProperties = {
  padding: "14px 18px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 15,
  background: "#2563eb",
  color: "#fff",
};

export default function QuickActions() {
  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        marginTop: 25,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2>⚡ Quick Actions</h2>

      <div
        style={{
          display: "flex",
          gap: 15,
          marginTop: 20,
          flexWrap: "wrap",
        }}
      >
        <button style={buttonStyle}>
          ➕ New Customer
        </button>

        <button style={buttonStyle}>
          📄 Upload Document
        </button>

        <button style={buttonStyle}>
          🛠 New Service
        </button>

        <button style={buttonStyle}>
          🧾 Generate Bill
        </button>
      </div>
    </div>
  );
}