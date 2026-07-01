"use client";

interface Props {
  subtotal: number;
  gst: number;
  discount: number;
  grandTotal: number;
}

const rowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 12,
  fontSize: 15,
};

export default function InvoiceTotals({
  subtotal,
  gst,
  discount,
  grandTotal,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Invoice Summary
      </h3>

      <div style={rowStyle}>
        <span>Subtotal</span>
        <strong>₹ {subtotal.toFixed(2)}</strong>
      </div>

      <div style={rowStyle}>
        <span>GST</span>
        <strong>₹ {gst.toFixed(2)}</strong>
      </div>

      <div style={rowStyle}>
        <span>Discount</span>
        <strong>₹ {discount.toFixed(2)}</strong>
      </div>

      <hr
        style={{
          margin: "20px 0",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          fontWeight: 700,
          color: "#2563eb",
        }}
      >
        <span>Grand Total</span>

        <span>₹ {grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}