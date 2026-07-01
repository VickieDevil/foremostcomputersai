"use client";

import Link from "next/link";

export default function QuickActions() {
  const buttons = [
    {
      title: "Inbox",
      href: "/whatsapp/inbox",
      color: "#2563eb",
    },
    {
      title: "Templates",
      href: "/whatsapp/templates",
      color: "#7c3aed",
    },
    {
      title: "Broadcast",
      href: "/whatsapp/broadcast",
      color: "#16a34a",
    },
    {
      title: "Settings",
      href: "/whatsapp/settings",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>Quick Actions</h3>

      <div
        style={{
          display: "grid",
          gap: 15,
          marginTop: 20,
        }}
      >
        {buttons.map((btn) => (
          <Link
            key={btn.title}
            href={btn.href}
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: 14,
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                background: btn.color,
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {btn.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}