"use client";

import React from "react";

interface CustomerProfileProps {
  customer: any;
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 14,
  padding: 25,
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  marginBottom: 25,
};

const labelStyle: React.CSSProperties = {
  color: "#64748b",
  fontSize: 13,
  marginBottom: 4,
  fontWeight: 600,
};

const valueStyle: React.CSSProperties = {
  color: "#111827",
  fontSize: 16,
  fontWeight: 500,
};

export default function CustomerProfile({
  customer,
}: CustomerProfileProps) {
  return (
    <div style={cardStyle}>
      {/* ================= Header ================= */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 25,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          {(customer.full_name || "?")
            .charAt(0)
            .toUpperCase()}
        </div>

        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 30,
              color: "#111827",
            }}
          >
            {customer.full_name}
          </h2>

          <p
            style={{
              marginTop: 10,
              color: "#6b7280",
            }}
          >
            Customer ID :
            <strong> {customer.id}</strong>
          </p>

          <div
            style={{
              marginTop: 12,
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: 30,
              background:
                customer.status === "Active"
                  ? "#dcfce7"
                  : "#fee2e2",
              color:
                customer.status === "Active"
                  ? "#166534"
                  : "#991b1b",
              fontWeight: 700,
            }}
          >
            {customer.status}
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      {/* ================= Personal Details ================= */}

      <h3
        style={{
          marginBottom: 25,
          color: "#1e293b",
        }}
      >
        Personal Information
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
        }}
      >
        <div>
          <div style={labelStyle}>Full Name</div>

          <div style={valueStyle}>
            {customer.full_name || "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Mobile Number</div>

          <div style={valueStyle}>
            {customer.mobile || "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Email</div>

          <div style={valueStyle}>
            {customer.email || "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Gender</div>

          <div style={valueStyle}>
            {customer.gender || "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Date of Birth</div>

          <div style={valueStyle}>
            {customer.dob || "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Aadhaar Number</div>

          <div style={valueStyle}>
            {customer.aadhaar || "-"}
          </div>
        </div>        <div>
          <div style={labelStyle}>PAN Number</div>

          <div style={valueStyle}>
            {customer.pan || "-"}
          </div>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <div style={labelStyle}>Address</div>

          <div style={valueStyle}>
            {customer.address || "-"}
          </div>
        </div>
      </div>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      {/* ================= Extra Information ================= */}

      <h3
        style={{
          marginBottom: 20,
          color: "#1e293b",
        }}
      >
        Account Information
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
        }}
      >
        <div>
          <div style={labelStyle}>Customer Since</div>

          <div style={valueStyle}>
            {customer.created_at
              ? new Date(
                  customer.created_at
                ).toLocaleDateString()
              : "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Last Updated</div>

          <div style={valueStyle}>
            {customer.updated_at
              ? new Date(
                  customer.updated_at
                ).toLocaleDateString()
              : "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Current Status</div>

          <div style={valueStyle}>
            {customer.status}
          </div>
        </div>

        <div>
          <div style={labelStyle}>Customer Type</div>

          <div style={valueStyle}>
            Regular Customer
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 35,
          padding: 18,
          borderRadius: 10,
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            marginBottom: 8,
            color: "#1e40af",
          }}
        >
          Customer Summary
        </div>

        <div
          style={{
            color: "#334155",
            lineHeight: 1.7,
          }}
        >
          This customer profile contains all basic
          personal information, identity documents,
          account status and future service history.
          Additional modules like WhatsApp Chat,
          AI Insights, Billing, Activity Timeline,
          Certificates, Payments and CSC Services
          will be integrated into this dashboard.
        </div>
      </div>
    </div>
  );
}