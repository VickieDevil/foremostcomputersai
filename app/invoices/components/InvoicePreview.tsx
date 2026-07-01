"use client";

import { Invoice } from "../../../types/invoice";

interface Props {
  invoice: Invoice | null;
}

export default function InvoicePreview({
  invoice,
}: Props) {
  if (!invoice) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          textAlign: "center",
          color: "#666",
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
        borderRadius: 12,
        padding: 30,
        marginTop: 20,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 25,
        }}
      >
        Invoice Preview
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 15,
          marginBottom: 25,
        }}
      >
        <Info label="Invoice No" value={invoice.invoice_no} />

        <Info label="Status" value={invoice.status} />

        <Info
          label="Customer"
          value={invoice.customer_name}
        />

        <Info
          label="Mobile"
          value={invoice.customer_mobile}
        />

        <Info
          label="Payment"
          value={invoice.payment_method}
        />

        <Info
          label="Created"
          value={
            invoice.created_at
              ? new Date(
                  invoice.created_at
                ).toLocaleDateString()
              : "-"
          }
        />
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: 25,
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th style={th}>Service</th>

            <th style={th}>Qty</th>

            <th style={th}>Price</th>

            <th style={th}>GST</th>

            <th style={th}>Discount</th>

            <th style={th}>Total</th>
          </tr>
        </thead>

        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td style={td}>
                {item.service_name}
              </td>

              <td style={td}>
                {item.quantity}
              </td>

              <td style={td}>
                ₹ {item.price}
              </td>

              <td style={td}>
                {item.gst}%
              </td>

              <td style={td}>
                ₹ {item.discount}
              </td>

              <td style={td}>
                ₹ {item.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          width: 320,
          marginLeft: "auto",
        }}
      >
        <Summary
          label="Subtotal"
          value={invoice.subtotal}
        />

        <Summary
          label="GST"
          value={invoice.gst_total}
        />

        <Summary
          label="Discount"
          value={invoice.discount_total}
        />

        <Summary
          label="Grand Total"
          value={invoice.grand_total}
        />

        <Summary
          label="Paid"
          value={invoice.paid_amount}
        />

        <Summary
          label="Due"
          value={invoice.due_amount}
        />
      </div>

      {invoice.remarks && (
        <div
          style={{
            marginTop: 25,
            padding: 15,
            background: "#f8fafc",
            borderRadius: 8,
          }}
        >
          <strong>Remarks</strong>

          <p>{invoice.remarks}</p>
        </div>
      )}
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div>
      <div
        style={{
          color: "#64748b",
          fontSize: 13,
        }}
      >
        {label}
      </div>

      <strong>{value}</strong>
    </div>
  );
}

function Summary({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 8,
      }}
    >
      <span>{label}</span>

      <strong>
        ₹ {value.toLocaleString()}
      </strong>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: 12,
  textAlign: "left",
};

const td: React.CSSProperties = {
  padding: 12,
  borderBottom: "1px solid #e5e7eb",
};