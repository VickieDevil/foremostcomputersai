"use client";

import Link from "next/link";

export default function WhatsAppTemplatesPage() {
  return (
    <div
      style={{
        padding: 30,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        WhatsApp Templates
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: 30,
        }}
      >
        Manage all approved WhatsApp Business Templates.
      </p>

      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 25,
        }}
      >
        <h2>Coming Soon 🚀</h2>

        <p style={{ marginTop: 15 }}>
          Batch 10 me yahan complete Template Management
          Module banega.
        </p>

        <ul
          style={{
            marginTop: 20,
            lineHeight: 2,
          }}
        >
          <li>✔ Create Template</li>
          <li>✔ Sync Meta Templates</li>
          <li>✔ Template Categories</li>
          <li>✔ Variables Preview</li>
          <li>✔ Language Support</li>
          <li>✔ Approval Status</li>
        </ul>

        <Link
          href="/whatsapp"
          style={{
            display: "inline-block",
            marginTop: 25,
            padding: "12px 20px",
            background: "#16a34a",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          ← Back to WhatsApp Dashboard
        </Link>
      </div>
    </div>
  );
}