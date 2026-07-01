"use client";

import { Invoice } from "../../../types/invoice";

interface Props {
  invoice: Invoice | null;
}

export default function InvoicePDF({
  invoice,
}: Props) {
  function downloadPDF() {
    if (!invoice) return;

    // अभी Browser Print इस्तेमाल करेंगे
    // बाद में jsPDF + html2canvas जोड़ेंगे
    window.print();
  }

  if (!invoice) return null;

  return (
    <button
      onClick={downloadPDF}
      style={{
        background: "#dc2626",
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
      }}
    >
      Download PDF
    </button>
  );
}