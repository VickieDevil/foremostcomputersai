"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../hooks/useAuth";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const { logout } = useAuth();

  async function handleLogout() {
    const success = await logout();

    if (success) {
      router.push("/login");
    }
  }

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          marginBottom: 30,
        }}
      >
        Foremost AI
      </h2>

      <div style={{ flex: 1 }}>
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
      </div>

      <hr
        style={{
          borderColor: "#374151",
          margin: "20px 0",
        }}
      />

      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          padding: "12px",
          background: "#dc2626",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        🚪 Logout
      </button>
    </aside>
  );
}