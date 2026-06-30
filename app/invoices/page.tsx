"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { useInvoice } from "../../hooks/useInvoice";

import InvoiceTable from "./components/InvoiceTable";

export default function InvoicePage() {
  const {
  invoices,
  loading,
  stats,
  deleteInvoice,
} = useInvoice();

  const [search, setSearch] = useState("");

  const filteredInvoices = useMemo(() => {
    if (!search.trim()) return invoices;

    const keyword = search.toLowerCase();

    return invoices.filter((invoice) => {
      return (
        invoice.invoice_no
          ?.toLowerCase()
          .includes(keyword) ||
        invoice.customer_name
          ?.toLowerCase()
          .includes(keyword) ||
        invoice.customer_mobile
          ?.toLowerCase()
          .includes(keyword)
      );
    });
  }, [search, invoices]);

  return (
    <div
      style={{
        padding: 30,
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
            }}
          >
            Invoice Management
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: 5,
            }}
          >
            Manage Customer Bills & Payments
          </p>
        </div>

        <Link href="/invoices/create">
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            + Create Invoice
          </button>
        </Link>
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <StatCard
          title="Total Invoices"
          value={stats.total}
        />

        <StatCard
          title="Paid"
          value={stats.paid}
        />

        <StatCard
          title="Pending"
          value={stats.pending}
        />

        <StatCard
          title="Revenue"
          value={`₹ ${stats.revenue.toLocaleString()}`}
        />
      </div>

      {/* Search */}

      <div
        style={{
          marginBottom: 25,
        }}
      >
        <input
          placeholder="Search Invoice..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            width: 350,
            padding: 12,
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontSize: 15,
          }}
        />
      </div>

      {/* Table */}

      <InvoiceTable
    invoices={filteredInvoices}
    loading={loading}
    onDelete={deleteInvoice}
/>
    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 22,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.06)",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: 14,
          marginBottom: 10,
        }}
      >
        {title}
      </div>

      <h2
        style={{
          margin: 0,
          color: "#111827",
        }}
      >
        {value}
      </h2>
    </div>
  );
}