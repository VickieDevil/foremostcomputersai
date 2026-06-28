"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      title: "Dashboard",
      icon: "🏠",
      href: "/",
    },
    {
      title: "Customers",
      icon: "👥",
      href: "/customers",
    },
    {
      title: "Documents",
      icon: "📄",
      href: "/documents",
    },
    {
      title: "WhatsApp",
      icon: "💬",
      href: "/whatsapp",
    },
    {
      title: "AI Assistant",
      icon: "🤖",
      href: "/ai",
    },
    {
      title: "Settings",
      icon: "⚙",
      href: "/settings",
    },
  ];

  return (
    <aside
      style={{
        width: 260,
        background: "#111827",
        color: "#fff",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      <h2
        style={{
          marginBottom: 30,
        }}
      >
        Foremost AI
      </h2>

      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 10,
              marginBottom: 10,
              background:
                pathname === item.href
                  ? "#2563eb"
                  : "transparent",
              color: "#fff",
              cursor: "pointer",
              transition: ".2s",
            }}
          >
            {item.icon} {item.title}
          </div>
        </Link>
      ))}
    </aside>
  );
}