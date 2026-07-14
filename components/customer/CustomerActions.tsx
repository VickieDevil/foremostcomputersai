"use client";

import Link from "next/link";

interface Props {
  customerId: string;
  onDelete?: () => void;
}

export default function CustomerActions({
  customerId,
  onDelete,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <Link href={`/customers/view/${customerId}`}>
        <button>👁 View</button>
      </Link>

      <Link href={`/customers/edit/${customerId}`}>
        <button>✏️ Edit</button>
      </Link>

      <button
        onClick={onDelete}
        style={{
          color: "#fff",
          background: "#dc2626",
        }}
      >
        🗑 Delete
      </button>
    </div>
  );
}