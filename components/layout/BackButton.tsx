"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        border: "none",
        background: "#fff",
        padding: "10px 18px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      ← Back
    </button>
  );
}