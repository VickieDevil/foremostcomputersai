"use client";

import Link from "next/link";

interface CustomerActionsProps {
  customerId: string;
}

export default function CustomerActions({
  customerId,
}: CustomerActionsProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        marginBottom: 25,
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        Quick Actions
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Link href={`/customers/edit/${customerId}`}>
          <button
            style={button("#f59e0b")}
          >
            ✏ Edit Customer
          </button>
        </Link>

        <Link
          href={`/documents/upload/${customerId}`}
        >
          <button
            style={button("#2563eb")}
          >
            📄 Upload Document
          </button>
        </Link>

        <button style={button("#16a34a")}>
          📋 Add Activity
        </button>

        <button style={button("#7c3aed")}>
          💬 WhatsApp
        </button>

        <button style={button("#0f766e")}>
          🤖 AI Assistant
        </button>

        <button style={button("#dc2626")}>
          🗑 Delete Customer
        </button>
      </div>
    </div>
  );
}

function button(color: string): React.CSSProperties {
  return {
    background: color,
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
  };
}