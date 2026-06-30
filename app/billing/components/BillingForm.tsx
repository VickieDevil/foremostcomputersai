"use client";

export default function BillingForm() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        ➕ Create Invoice
      </h2>

      <input
        placeholder="Customer Name"
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 12,
        }}
      />

      <input
        placeholder="Service Name"
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 12,
        }}
      />

      <input
        type="number"
        placeholder="Amount"
        style={{
          width: "100%",
          padding: 12,
          marginBottom: 12,
        }}
      />

      <button
        style={{
          width: "100%",
          padding: 14,
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Save Invoice
      </button>
    </div>
  );
}