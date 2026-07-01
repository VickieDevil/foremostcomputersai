"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

export default function Card({
  children,
  title,
  style,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
        marginBottom: 20,
        ...style,
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