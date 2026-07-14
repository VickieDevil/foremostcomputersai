"use client";

import CustomerModal from "./CustomerModal";

interface Props {
  open: boolean;
  customerName: string;
  loading?: boolean;
  message?: string;
  onCancel: () => void;
  onDelete: () => void | Promise<void>;
}

export default function CustomerDeleteModal({
  open,
  customerName,
  loading = false,
  message,
  onCancel,
  onDelete,
}: Props) {
  return (
    <CustomerModal
      open={open}
      title="Delete Customer"
      onClose={onCancel}
      width={460}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#475569",
            lineHeight: 1.6,
          }}
        >
          {message ??
            "This action cannot be undone. Are you sure you want to delete this customer?"}
        </p>

        <div
          style={{
            padding: 14,
            borderRadius: 8,
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
          }}
        >
          <strong>{customerName}</strong>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 10,
          }}
        >
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onDelete}
            disabled={loading}
            style={{
              background: "#dc2626",
              color: "#fff",
              border: "none",
              padding: "10px 18px",
              borderRadius: 6,
              cursor: loading
                ? "not-allowed"
                : "pointer",
            }}
          >
            {loading
              ? "Deleting..."
              : "Delete Customer"}
          </button>
        </div>
      </div>
    </CustomerModal>
  );
}