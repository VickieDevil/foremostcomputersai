"use client";

import React from "react";

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  style,
  ...props
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginBottom: 15,
      }}
    >
      {label && (
        <label
          style={{
            fontWeight: 600,
            color: "#374151",
          }}
        >
          {label}
        </label>
      )}

      <textarea
        {...props}
        rows={4}
        style={{
          padding: 12,
          borderRadius: 8,
          border: "1px solid #d1d5db",
          resize: "vertical",
          fontSize: 15,
          outline: "none",
          ...style,
        }}
      />

      {error && (
        <small
          style={{
            color: "#dc2626",
          }}
        >
          {error}
        </small>
      )}
    </div>
  );
}