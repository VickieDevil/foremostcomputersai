"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

export default function Card({
  children,
  title,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        border: "1px solid #e5e7eb",
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}