"use client";

import { Invoice } from "../../../types/invoice";

interface Props {
  invoice: Invoice | null;
}

export default function InvoicePrint({
  invoice,
}: Props) {
  function printInvoice() {
    if (!invoice) return;

    window.print();
  }

  if (!invoice) return null;

  return (
    <button
      onClick={printInvoice}
      style={{
        background: "#16a34a",
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      🖨 Print Invoice
    </button>
  );
}