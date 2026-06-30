"use client";

import Link from "next/link";

import { Invoice } from "../../../types/invoice";

interface Props {
  invoices: Invoice[];
  loading: boolean;
  onDelete: (id: string) => void;
}

export default function InvoiceTable({
  invoices,
  loading,
  onDelete,
}: Props) {
  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        <h3>Loading Invoices...</h3>
      </div>
    );
  }

  if (invoices.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 40,
          borderRadius: 12,
          marginTop: 20,
          textAlign: "center",
          color: "#6b7280",
        }}
      >
        <h3>No Invoice Found</h3>

        <p>
          Create your first invoice.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        overflowX: "auto",
        marginTop: 20,
        boxShadow:
          "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 1000,
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th style={th}>
              Invoice No
            </th>

            <th style={th}>
              Customer
            </th>

            <th style={th}>
              Mobile
            </th>

            <th style={th}>
              Payment
            </th>

            <th style={th}>
              Status
            </th>

            <th style={th}>
              Amount
            </th>

            <th style={th}>
              Date
            </th>

            <th style={th}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
                      {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              style={{
                borderBottom:
                  "1px solid #e5e7eb",
              }}
            >
              <td style={td}>
                <strong>
                  {invoice.invoice_no}
                </strong>
              </td>

              <td style={td}>
                {invoice.customer_name}
              </td>

              <td style={td}>
                {invoice.customer_mobile}
              </td>

              <td style={td}>
                {invoice.payment_method}
              </td>

              <td style={td}>
                <StatusBadge
                  status={invoice.status}
                />
              </td>

              <td style={td}>
                ₹{" "}
                {Number(
                  invoice.grand_total
                ).toLocaleString("en-IN")}
              </td>

              <td style={td}>
                {invoice.created_at
                  ? new Date(
                      invoice.created_at
                    ).toLocaleDateString(
                      "en-IN"
                    )
                  : "-"}
              </td>

              <td style={td}>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href={`/invoices/view/${invoice.id}`}
                    style={viewBtn}
                  >
                    View
                  </Link>

                  <Link
                    href={`/invoices/edit/${invoice.id}`}
                    style={editBtn}
                  >
                    Edit
                  </Link>

                  <Link
                    href={`/invoices/print/${invoice.id}`}
                    style={printBtn}
                  >
                    Print
                  </Link>

                  <button
                    onClick={() => {
                      const ok =
                        confirm(
                          `Delete Invoice ${invoice.invoice_no}?`
                        );

                      if (!ok) return;

                      if (invoice.id) {
                        onDelete(
                          invoice.id
                        );
                      }
                    }}
                    style={deleteBtn}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
   function StatusBadge({
  status,
}: {
  status: string;
}) {
  let background = "#64748b";

  switch (status) {
    case "Paid":
      background = "#16a34a";
      break;

    case "Pending":
      background = "#f59e0b";
      break;

    case "Draft":
      background = "#2563eb";
      break;

    case "Cancelled":
      background = "#dc2626";
      break;

    default:
      background = "#64748b";
  }

  return (
    <span
      style={{
        background,
        color: "#fff",
        padding: "5px 12px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {status}
    </span>
  );
}

const th: React.CSSProperties = {
  padding: "14px",
  textAlign: "left",
  fontWeight: 700,
  whiteSpace: "nowrap",
};

const td: React.CSSProperties = {
  padding: "14px",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
};

const viewBtn: React.CSSProperties = {
  background: "#2563eb",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 600,
};

const editBtn: React.CSSProperties = {
  background: "#f59e0b",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 600,
};

const printBtn: React.CSSProperties = {
  background: "#16a34a",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: 6,
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 600,
};

const deleteBtn: React.CSSProperties = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 600,
};