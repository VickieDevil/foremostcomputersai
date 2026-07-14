"use client";

interface Props {
  status?: "Active" | "Pending" | "Blocked";
}

const colors = {
  Active: "#16a34a",
  Pending: "#f59e0b",
  Blocked: "#dc2626",
};

export default function CustomerStatus({
  status = "Pending",
}: Props) {
  return (
    <span
      style={{
        background: colors[status],
        color: "#fff",
        padding: "5px 12px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}