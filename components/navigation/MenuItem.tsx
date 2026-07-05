"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export default function MenuItem({
  href,
  icon,
  label,
  active = false,
}: Props) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 15px",
          borderRadius: 10,
          marginBottom: 8,
          cursor: "pointer",
          background: active
            ? "#2563eb"
            : "transparent",
          color: active
            ? "#fff"
            : "#1f2937",
          transition: ".2s",
          fontWeight: 600,
        }}
      >
        <span
          style={{
            fontSize: 18,
          }}
        >
          {icon}
        </span>

        {label}
      </div>
    </Link>
  );
}