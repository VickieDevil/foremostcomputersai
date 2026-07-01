"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Table({
  children,
}: Props) {
  return (
    <div
      style={{
        overflowX: "auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 900,
        }}
      >
        {children}
      </table>
    </div>
  );
}

export const th: React.CSSProperties = {
  padding: 14,
  background: "#2563eb",
  color: "#fff",
  textAlign: "left",
  fontWeight: 600,
};

export const td: React.CSSProperties = {
  padding: 14,
  borderBottom: "1px solid #e5e7eb",
};