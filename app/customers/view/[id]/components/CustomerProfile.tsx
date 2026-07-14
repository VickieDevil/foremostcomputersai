"use client";

import React from "react";
import { Customer } from "@/types/customer";

interface CustomerProfileProps {
  customer: Customer;
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

  const fullName =
    customer.full_name ??
    customer.name ??
    "Unknown Customer";

  const status =
    customer.status ??
    "Pending";

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
          {fullName.charAt(0).toUpperCase()}
        </div>

        <div style={{ flex: 1 }}>

          <h2
            style={{
              margin: 0,
              fontSize: 30,
              color: "#111827",
            }}
          >
            {fullName}
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
                status === "Active"
                  ? "#dcfce7"
                  : status === "Pending"
                  ? "#fef3c7"
                  : "#fee2e2",

              color:
                status === "Active"
                  ? "#166534"
                  : status === "Pending"
                  ? "#92400e"
                  : "#991b1b",

              fontWeight: 700,
            }}
          >
            {status}
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
          <div style={labelStyle}>
            Full Name
          </div>

          <div style={valueStyle}>
            {fullName}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Mobile Number
          </div>

          <div style={valueStyle}>
            {customer.mobile ?? "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Email
          </div>

          <div style={valueStyle}>
            {customer.email ?? "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Gender
          </div>

          <div style={valueStyle}>
            {customer.gender ?? "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Date of Birth
          </div>

          <div style={valueStyle}>
            {customer.dob ?? "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Aadhaar Number
          </div>

          <div style={valueStyle}>
            {customer.aadhaar ?? "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            PAN Number
          </div>

          <div style={valueStyle}>
            {customer.pan ?? "-"}
          </div>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
          }}
        >
          <div style={labelStyle}>
            Address
          </div>

          <div style={valueStyle}>
            {customer.address ?? "-"}
          </div>
        </div>

      </div>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      {/* ================= Extra Information ================= */}      <h3
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
          <div style={labelStyle}>
            Customer Since
          </div>

          <div style={valueStyle}>
            {customer.created_at
              ? new Date(
                  customer.created_at
                ).toLocaleDateString(
                  "en-IN"
                )
              : "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Last Updated
          </div>

          <div style={valueStyle}>
            {customer.updated_at
              ? new Date(
                  customer.updated_at
                ).toLocaleDateString(
                  "en-IN"
                )
              : customer.created_at
              ? new Date(
                  customer.created_at
                ).toLocaleDateString(
                  "en-IN"
                )
              : "-"}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Current Status
          </div>

          <div style={valueStyle}>
            {status}
          </div>
        </div>

        <div>
          <div style={labelStyle}>
            Customer Type
          </div>

          <div style={valueStyle}>
            {customer.tags?.includes("VIP")
              ? "VIP Customer"
              : "Regular Customer"}
          </div>
        </div>

      </div>

      <div
        style={{
          marginTop: 35,
          padding: 20,
          borderRadius: 12,
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
        }}
      >

        <div
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#1d4ed8",
            marginBottom: 12,
          }}
        >
          Customer Summary
        </div>

        <div
          style={{
            lineHeight: 1.8,
            color: "#334155",
          }}
        >
          <strong>{fullName}</strong>
          {" "}
          is currently registered as
          {" "}
          <strong>{status}</strong>.

          <br />
          <br />

          Contact Number :
          {" "}
          {customer.mobile ?? "-"}

          <br />

          Email :
          {" "}
          {customer.email ?? "-"}

          <br />

          Aadhaar :
          {" "}
          {customer.aadhaar ?? "-"}

          <br />

          PAN :
          {" "}
          {customer.pan ?? "-"}

          <br />

          Registered On :
          {" "}
          {customer.created_at
            ? new Date(
                customer.created_at
              ).toLocaleDateString(
                "en-IN"
              )
            : "-"}

          <br />
          <br />

          Future modules including
          Documents,
          Billing,
          Activities,
          CSC Services,
          WhatsApp CRM,
          AI Insights,
          Payments,
          Certificates
          and
          Customer Analytics
          will appear here automatically.

        </div>

      </div>

    </div>
  );
}