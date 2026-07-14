"use client";

import { ReactNode } from "react";

interface Props {
  open: boolean;
  title: string;
  children: ReactNode;
  width?: number;
  onClose: () => void;
}

export default function CustomerModal({
  open,
  title,
  children,
  width = 700,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width,
          maxWidth: "95%",
          background: "#fff",
          borderRadius: 12,
          padding: 24,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            {title}
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}