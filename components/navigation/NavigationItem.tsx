"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavigationItemProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export default function NavigationItem({
  title,
  href,
  icon,
  badge,
}: NavigationItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderRadius: 10,
        textDecoration: "none",
        color: active ? "#fff" : "#334155",
        background: active
          ? "#2563eb"
          : "transparent",
        marginBottom: 6,
        transition: ".2s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span>{icon}</span>

        <span>{title}</span>
      </div>

      {badge && (
        <span
          style={{
            background: "#ef4444",
            color: "#fff",
            borderRadius: 20,
            padding: "2px 8px",
            fontSize: 11,
          }}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}