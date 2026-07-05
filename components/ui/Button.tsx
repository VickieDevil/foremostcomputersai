"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "success";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  style,
  ...props
}: Props) {
  const colors = {
    primary: "#2563eb",
    secondary: "#64748b",
    success: "#16a34a",
    danger: "#dc2626",
  };

  return (
    <button
      {...props}
      style={{
        background: colors[variant],
        color: "#fff",
        border: "none",
        borderRadius: 8,
        padding: "12px 18px",
        cursor: "pointer",
        fontWeight: 600,
        transition: ".2s",
        width: fullWidth ? "100%" : undefined,
        ...style,
      }}
    >
      {children}
    </button>
  );
}