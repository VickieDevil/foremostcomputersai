"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <main
          style={{
            padding: 30,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}