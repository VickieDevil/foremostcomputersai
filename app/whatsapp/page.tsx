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

          <h1>

            WhatsApp AI CRM

          </h1>

          <p
            style={{
              color: "#64748b",
            }}
          >

            Live WhatsApp Business Dashboard

          </p>

        </div>

        <Link href="/whatsapp/inbox">

          <button
            style={{
              background: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "12px 22px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >

            Open Live Inbox

          </button>

        </Link>

      </div>

      <WhatsappStats />

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: 24,
        }}
      >

        <RecentSection />

        <AIStatus />

      </div>

      <QuickActions />

    </div>

  );

}

function RecentSection() {

  return (

    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 24,
      }}
    >

      <h3>

        Live WhatsApp Inbox

      </h3>

      <p
        style={{
          color: "#64748b",
          marginTop: 15,
        }}
      >

        Contacts now come directly from Supabase.

      </p>

      <Link href="/whatsapp/inbox">

        <button
          style={{
            marginTop: 20,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >

          Open Inbox

        </button>

      </Link>

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

      <h3>

        Quick Actions

      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginTop: 20,
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
                textAlign: "center",
                fontWeight: 700,
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