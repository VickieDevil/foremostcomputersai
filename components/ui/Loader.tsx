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
        padding: 40,
        textAlign: "center",
        color: "#64748b",
      }}
    >
      <div
        style={{
          fontSize: 40,
          marginBottom: 15,
        }}
      >
        ⏳
      </div>

      <div>{text}</div>
    </div>
  );
}