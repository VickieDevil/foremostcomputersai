"use client";

interface Props {
  title: string;
  description?: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 40,
        borderRadius: 12,
        textAlign: "center",
        color: "#64748b",
      }}
    >
      <h2>{title}</h2>

      {description && (
        <p>{description}</p>
      )}
    </div>
  );
}