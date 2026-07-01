"use client";

import Link from "next/link";

import WhatsappStats from "./components/WhatsAppStats";
import AIStatus from "./components/AIStatus";

export default function WhatsAppDashboard() {
  return (
    <div
      style={{
        padding: 30,
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
            }}
          >
            WhatsApp AI CRM
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: 8,
            }}
          >
            Manage conversations, AI replies, templates and broadcasts
          </p>
        </div>

        <Link href="/whatsapp/inbox">
          <button
            style={{
              background: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Open Inbox
          </button>
        </Link>
      </div>

      <WhatsappStats />

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 24,
        }}
      >
        <RecentChats />

        <AIStatus />
      </div>

      <QuickActions />
    </div>
  );
}

function RecentChats() {
  const chats = [
    {
      name: "Rahul Sharma",
      msg: "PAN Card banwana hai.",
      time: "10:25 AM",
    },
    {
      name: "Anjali Verma",
      msg: "Passport document upload",
      time: "11:02 AM",
    },
    {
      name: "Deepak Kumar",
      msg: "Aadhaar correction",
      time: "11:48 AM",
    },
    {
      name: "Pooja Singh",
      msg: "Income Certificate",
      time: "12:20 PM",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h3>Recent Conversations</h3>

      <div
        style={{
          marginTop: 20,
        }}
      >
        {chats.map((chat) => (
          <div
            key={chat.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <div>
              <strong>{chat.name}</strong>

              <div
                style={{
                  color: "#64748b",
                  marginTop: 5,
                }}
              >
                {chat.msg}
              </div>
            </div>

            <small>{chat.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    {
      title: "Inbox",
      href: "/whatsapp/inbox",
      color: "#2563eb",
    },
    {
      title: "Templates",
      href: "/whatsapp/templates",
      color: "#16a34a",
    },
    {
      title: "Broadcast",
      href: "/whatsapp/broadcast",
      color: "#dc2626",
    },
    {
      title: "Settings",
      href: "/whatsapp/settings",
      color: "#7c3aed",
    },
  ];

  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <h3>Quick Actions</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginTop: 15,
        }}
      >
        {actions.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: item.color,
                color: "#fff",
                padding: 24,
                borderRadius: 12,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}