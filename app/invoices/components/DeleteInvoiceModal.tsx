"use client";

interface Props {
  open: boolean;
  invoiceNo?: string;
  loading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteInvoiceModal({
  open,
  invoiceNo,
  loading = false,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 420,
          background: "#fff",
          borderRadius: 12,
          padding: 24,
          boxShadow: "0 10px 35px rgba(0,0,0,.25)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            color: "#dc2626",
          }}
        >
          Delete Invoice
        </h2>

        <p
          style={{
            lineHeight: 1.6,
            color: "#444",
          }}
        >
          Are you sure you want to delete this invoice?
        </p>

        {invoiceNo && (
          <div
            style={{
              background: "#f8fafc",
              padding: 12,
              borderRadius: 8,
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            Invoice No : {invoiceNo}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
          }}
        >
          <button
            onClick={onClose}
            disabled={loading}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              background: "#dc2626",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {loading ? "Deleting..." : "Delete Invoice"}
          </button>
        </div>
      </div>
    </div>
  );
}