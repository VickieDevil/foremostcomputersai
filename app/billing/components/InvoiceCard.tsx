"use client";

export default function InvoiceCard() {
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
        💰 Invoice Summary
      </h2>

      <div
        style={{
          display: "grid",
          gap: 12,
        }}
      >
        <div>
          Total Invoices :
          <strong> 0</strong>
        </div>

        <div>
          Pending :
          <strong> 0</strong>
        </div>

        <div>
          Paid :
          <strong> 0</strong>
        </div>

        <div>
          Revenue :
          <strong> ₹0</strong>
        </div>
      </div>
    </div>
  );
}