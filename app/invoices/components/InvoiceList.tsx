"use client";

import Link from "next/link";
import { useState } from "react";

import { Invoice } from "../../../types/invoice";
import DeleteInvoiceModal from "./DeleteInvoiceModal";

interface Props {
  invoices: Invoice[];
  loading?: boolean;
  onDelete?: (id: string) => void;
}

export default function InvoiceList({
  invoices,
  loading = false,
  onDelete,
}: Props) {
  const [selectedInvoice, setSelectedInvoice] =
    useState<Invoice | null>(null);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  function handleDeleteClick(invoice: Invoice) {
    setSelectedInvoice(invoice);
    setDeleteOpen(true);
  }

  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        Loading Invoices...
      </div>
    );
  }

  if (invoices.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 30,
          borderRadius: 12,
          textAlign: "center",
          color: "#64748b",
        }}
      >
        No Invoice Available
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gap: 18,
        }}
      >
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 20,
              boxShadow:
                "0 2px 8px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  {invoice.invoice_no}
                </h3>

                <div
                  style={{
                    color: "#64748b",
                    marginTop: 5,
                  }}
                >
                  {invoice.customer_name}
                </div>
              </div>

              <span
                style={{
                  background:
                    invoice.status === "Paid"
                      ? "#16a34a"
                      : invoice.status === "Pending"
                      ? "#f59e0b"
                      : "#2563eb",

                  color: "#fff",

                  padding: "6px 14px",

                  borderRadius: 20,

                  fontSize: 13,

                  fontWeight: 600,
                }}
              >
                {invoice.status}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(180px,1fr))",

                gap: 12,

                marginBottom: 18,
              }}
            >
              <Info
                title="Mobile"
                value={invoice.customer_mobile}
              />

              <Info
                title="Payment"
                value={invoice.payment_method}
              />

              <Info
                title="Grand Total"
                value={`₹ ${invoice.grand_total}`}
              />

              <Info
                title="Due Amount"
                value={`₹ ${invoice.due_amount}`}
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <Link
                href={`/invoices/view/${invoice.id}`}
              >
                <button style={viewBtn}>
                  View
                </button>
              </Link>

              <Link
                href={`/invoices/edit/${invoice.id}`}
              >
                <button style={editBtn}>
                  Edit
                </button>
              </Link>

              <Link
                href={`/invoices/print/${invoice.id}`}
              >
                <button style={printBtn}>
                  Print
                </button>
              </Link>

              <button
                style={deleteBtn}
                onClick={() =>
                  handleDeleteClick(invoice)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>      <DeleteInvoiceModal
        open={deleteOpen}
        invoiceNo={selectedInvoice?.invoice_no}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedInvoice(null);
        }}
        onConfirm={() => {
          if (selectedInvoice?.id && onDelete) {
            onDelete(selectedInvoice.id);
          }

          setDeleteOpen(false);
          setSelectedInvoice(null);
        }}
      />
    </>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          color: "#64748b",
          fontSize: 13,
          marginBottom: 4,
        }}
      >
        {title}
      </div>

      <strong>{value}</strong>
    </div>
  );
}

const viewBtn: React.CSSProperties = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};

const editBtn: React.CSSProperties = {
  background: "#f59e0b",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};

const printBtn: React.CSSProperties = {
  background: "#16a34a",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};