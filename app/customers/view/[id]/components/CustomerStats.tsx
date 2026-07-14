"use client";

import { Customer } from "@/types/customer";
import { Document } from "@/types/document";

interface CustomerStatsProps {
  customer: Customer;
  documents: Document[];
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 2px 8px rgba(0,0,0,.08)",
  textAlign: "center",
};

export default function CustomerStats({
  customer,
  documents,
}: CustomerStatsProps) {

  const totalDocuments =
    documents.length;

  const status =
    customer.status ?? "Pending";

  const customerSince =
    customer.created_at
      ? new Date(
          customer.created_at
        ).toLocaleDateString("en-IN")
      : "-";

  return (
    <div
      style={{
        marginBottom: 25,
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        Customer Statistics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 20,
        }}
      >

        <div style={cardStyle}>
          <h2>📄</h2>

          <h1
            style={{
              margin: 0,
            }}
          >
            {totalDocuments}
          </h1>

          <p>Total Documents</p>
        </div>

        <div style={cardStyle}>
          <h2>📝</h2>

          <h1
            style={{
              margin: 0,
            }}
          >
            0
          </h1>

          <p>Activities</p>
        </div>

        <div style={cardStyle}>
          <h2>🏛️</h2>

          <h1
            style={{
              margin: 0,
            }}
          >
            0
          </h1>

          <p>CSC Services</p>
        </div>

        <div style={cardStyle}>
          <h2>💰</h2>

          <h1
            style={{
              margin: 0,
            }}
          >
            ₹0
          </h1>

          <p>Total Revenue</p>
        </div>

        <div style={cardStyle}>
          <h2>
            {status === "Active"
              ? "🟢"
              : status === "Pending"
              ? "🟡"
              : "🔴"}
          </h2>

          <h3
            style={{
              margin: 0,
            }}
          >
            {status}
          </h3>

          <p>Current Status</p>
        </div>

        <div style={cardStyle}>
          <h2>📅</h2>

          <h3
            style={{
              margin: 0,
            }}
          >
            {customerSince}
          </h3>

          <p>Customer Since</p>
        </div>

      </div>
    </div>
  );
}