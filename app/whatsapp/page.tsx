"use client";

import Link from "next/link";

export default function WhatsappPage() {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>
        WhatsApp CRM
      </h1>

      <p>
        Foremost Computers
        WhatsApp AI CRM
      </p>

      <div
        style={{
          display: "grid",
          gap: 20,
          marginTop: 30,
        }}
      >
        <Link
          href="/whatsapp/inbox"
        >
          <button
            style={button}
          >
            Open Inbox
          </button>
        </Link>

        <Link
          href="/whatsapp/templates"
        >
          <button
            style={button}
          >
            Templates
          </button>
        </Link>

        <Link
          href="/whatsapp/broadcast"
        >
          <button
            style={button}
          >
            Broadcast
          </button>
        </Link>

        <Link
          href="/whatsapp/settings"
        >
          <button
            style={button}
          >
            Settings
          </button>
        </Link>
      </div>
    </div>
  );
}

const button: React.CSSProperties = {
  background: "#25D366",

  color: "#fff",

  padding: 18,

  border: "none",

  borderRadius: 10,

  cursor: "pointer",

  fontWeight: 600,

  fontSize: 16,
};