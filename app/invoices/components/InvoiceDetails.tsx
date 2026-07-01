"use client";

import { Invoice } from "../../../types/invoice";

interface Props {
  invoice: Invoice | null;
}

export default function InvoiceDetails({
  invoice,
}: Props) {
  if (!invoice) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 25,
          borderRadius: 12,
          textAlign: "center",
          color: "#64748b",
        }}
      >
        No Invoice Selected
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 12,
        marginTop: 20,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Invoice Details
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          <Row
            label="Invoice No"
            value={invoice.invoice_no}
          />

          <Row
            label="Customer"
            value={invoice.customer_name}
          />

          <Row
            label="Mobile"
            value={invoice.customer_mobile}
          />

          <Row
            label="Payment Method"
            value={invoice.payment_method}
          />

          <Row
            label="Status"
            value={invoice.status}
          />

          <Row
            label="Subtotal"
            value={`₹ ${invoice.subtotal}`}
          />

          <Row
            label="GST"
            value={`₹ ${invoice.gst_total}`}
          />

          <Row
            label="Discount"
            value={`₹ ${invoice.discount_total}`}
          />

          <Row
            label="Grand Total"
            value={`₹ ${invoice.grand_total}`}
          />

          <Row
            label="Paid"
            value={`₹ ${invoice.paid_amount}`}
          />

          <Row
            label="Due"
            value={`₹ ${invoice.due_amount}`}
          />

          <Row
            label="Remarks"
            value={invoice.remarks || "-"}
          />
        </tbody>
      </table>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <tr>
      <td
        style={{
          padding: 12,
          fontWeight: 600,
          width: 220,
          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        {label}
      </td>

      <td
        style={{
          padding: 12,
          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        {value}
      </td>
    </tr>
  );
}