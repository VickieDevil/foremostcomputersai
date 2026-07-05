"use client";

import NavigationMenu from "@/components/navigation/NavigationMenu";
import { useAppStore } from "@/store";

export default function Sidebar() {
  const { sidebarOpen } =
    useAppStore();

  if (!sidebarOpen) return null;

  return (
    <aside
      style={{
        width: 270,
        background: "#fff",
        borderRight:
          "1px solid #e5e7eb",
        padding: 20,
        overflowY: "auto",
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 30,
        }}
      >
        Foremost CRM
      </div>

      <NavigationMenu />
    </aside>
  );
}