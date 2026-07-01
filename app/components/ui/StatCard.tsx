"use client";

interface Props {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "#2563eb",
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        borderLeft: `5px solid ${color}`,
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: 14,
          marginBottom: 10,
        }}
      >
        {title}
      </div>

      <h2
        style={{
          margin: 0,
          color,
        }}
      >
        {value}
      </h2>
    </div>
  );
}