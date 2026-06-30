"use client";

import BillingTable from "./components/BillingTable";
import BillingForm from "./components/BillingForm";
import InvoiceCard from "./components/InvoiceCard";

export default function BillingPage() {
  return (
    <div
      style={{
        padding: 30,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: 34,
          fontWeight: 700,
          marginBottom: 25,
        }}
      >
        💳 Billing & Invoice Management
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 380px",
          gap: 25,
          alignItems: "start",
        }}
      >
        <div>
          <BillingTable />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <InvoiceCard />

          <BillingForm />
        </div>
      </div>
    </div>
  );
}