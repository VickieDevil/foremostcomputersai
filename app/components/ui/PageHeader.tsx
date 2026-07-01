"use client";

import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  action,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              marginTop: 6,
              color: "#64748b",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}