"use client";

interface Props {
  text?: string;
}

export default function Loader({
  text = "Loading...",
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 40,
        borderRadius: 12,
        textAlign: "center",
        color: "#64748b",
        fontSize: 16,
      }}
    >
      {text}
    </div>
  );
}