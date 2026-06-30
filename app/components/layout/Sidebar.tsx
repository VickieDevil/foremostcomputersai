"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { title: "Dashboard", href: "/dashboard", icon: "📊" },
  { title: "Customers", href: "/customers", icon: "👥" },
  { title: "Documents", href: "/documents", icon: "📁" },
  { title: "Billing", href: "/billing", icon: "💳" },
  { title: "Reports", href: "/reports", icon: "📈" },
  { title: "Settings", href: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 260,
        minHeight: "100vh",
        background: "#111827",
        color: "#fff",
        padding: 20,
      }}
    >
      <h2
        style={{
          marginBottom: 30,
          fontSize: 22,
        }}
      >
        🚀 Foremost AI
      </h2>

      {menus.map((menu) => (
        <Link
          key={menu.href}
          href={menu.href}
          style={{
            display: "block",
            textDecoration: "none",
            color:
              pathname === menu.href
                ? "#2563eb"
                : "#fff",
            background:
              pathname === menu.href
                ? "#1f2937"
                : "transparent",
            padding: 12,
            borderRadius: 8,
            marginBottom: 8,
          }}
        >
          {menu.icon} {menu.title}
        </Link>
      ))}
    </aside>
  );
}