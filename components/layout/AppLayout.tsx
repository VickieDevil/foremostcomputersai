"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

interface Props {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f4f6f9",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopNavbar />

        <main
          style={{
            flex: 1,
            padding: 24,
            overflow: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}