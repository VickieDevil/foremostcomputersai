"use client";

import React from "react";

type Variant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "secondary";

interface Props {
  children: React.ReactNode;
  variant?: Variant;
}

const colors = {
  primary: "#2563eb",
  success: "#16a34a",
  warning: "#f59e0b",
  danger: "#dc2626",
  secondary: "#64748b",
};

export default function Badge({
  children,
  variant = "primary",
}: Props) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
        color: "#fff",
        background: colors[variant],
      }}
    >
      {children}
    </span>
  );
}