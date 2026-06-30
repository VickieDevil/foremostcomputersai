"use client";

export default function Navbar() {
  return (
    <header
      style={{
        height: 70,
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h2>Foremost Computers AI CRM</h2>

      <div
        style={{
          display: "flex",
          gap: 15,
          alignItems: "center",
        }}
      >
        🔔

        <img
          src="https://ui-avatars.com/api/?name=Admin"
          width={40}
          height={40}
          alt="Admin"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
    </header>
  );
}