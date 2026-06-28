"use client";

import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "dark";

interface ButtonProps {
  children: React.ReactNode;

  onClick?: () => void;

  type?: "button" | "submit" | "reset";

  variant?: ButtonVariant;

  disabled?: boolean;

  loading?: boolean;

  fullWidth?: boolean;

  style?: React.CSSProperties;
}

const colors = {
  primary: "#2563eb",

  secondary: "#6b7280",

  success: "#16a34a",

  danger: "#dc2626",

  warning: "#f59e0b",

  dark: "#111827",
};

export default function Button({
  children,

  onClick,

  type = "button",

  variant = "primary",

  disabled = false,

  loading = false,

  fullWidth = false,

  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        background: colors[variant],

        color: "#ffffff",

        border: "none",

        borderRadius: 10,

        padding: "12px 20px",

        fontSize: 15,

        fontWeight: 600,

        cursor:
          disabled || loading
            ? "not-allowed"
            : "pointer",

        opacity:
          disabled || loading
            ? 0.6
            : 1,

        transition: "0.25s",

        width: fullWidth
          ? "100%"
          : "auto",

        ...style,
      }}
    >
      {loading ? "Please Wait..." : children}
    </button>
  );
}