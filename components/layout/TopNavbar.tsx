"use client";

import ThemeSwitcher from "./ThemeSwitcher";

export default function TopNavbar() {
  return (
    <header
      style={{
        height: 64,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: 20,
          }}
        >
          Foremost Computers AI CRM
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <ThemeSwitcher />
      </div>
    </header>
  );
}