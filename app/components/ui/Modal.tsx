"use client";

import React from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 24,
          minWidth: 400,
          maxWidth: 700,
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2 style={{ margin: 0 }}>{title}</h2>

          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 22,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}