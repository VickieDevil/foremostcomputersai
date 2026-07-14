"use client";

interface Props {
  open: boolean;
  loading?: boolean;
  customerName?: string;
  onCancel: () => void;
  onDelete: () => void;
}

export default function CustomerDeleteDialog({
  open,
  loading = false,
  customerName,
  onCancel,
  onDelete,
}: Props) {

  if (!open) return null;

  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 12,
      }}
    >
      <h2>Delete Customer</h2>

      <p>
        Delete <b>{customerName}</b> ?
      </p>

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <button onClick={onCancel}>
          Cancel
        </button>

        <button
          disabled={loading}
          onClick={onDelete}
        >
          {loading
            ? "Deleting..."
            : "Delete"}
        </button>
      </div>
    </div>
  );
}