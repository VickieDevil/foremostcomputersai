"use client";

import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function NavSection({
  title,
  children,
}: Props) {
  return (
    <div
      style={{
        marginBottom: 28,
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "#94a3b8",
          marginBottom: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
}