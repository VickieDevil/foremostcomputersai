"use client";

import React from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "outline";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  loading?: boolean;
}

const colors: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "#2563eb",
    color: "#fff",
  },

  secondary: {
    background: "#64748b",
    color: "#fff",
  },

  success: {
    background: "#16a34a",
    color: "#fff",
  },

  danger: {
    background: "#dc2626",
    color: "#fff",
  },

  warning: {
    background: "#f59e0b",
    color: "#fff",
  },

  outline: {
    background: "#fff",
    color: "#2563eb",
    border: "1px solid #2563eb",
  },
};

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  loading = false,
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={{
        padding: "11px 18px",
        borderRadius: 8,
        border: "none",
        cursor: loading ? "wait" : "pointer",
        fontWeight: 600,
        fontSize: 15,
        transition: ".2s",
        width: fullWidth ? "100%" : undefined,
        opacity: disabled ? .6 : 1,
        ...colors[variant],
        ...style,
      }}
    >
      {loading ? "Please Wait..." : children}
    </button>
  );
}