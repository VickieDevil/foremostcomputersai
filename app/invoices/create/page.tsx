"use client";

import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";

import InvoiceForm from "../components/InvoiceForm";

export default function CreateInvoicePage() {
  return (
    <div
      style={{
        padding: 30,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <PageHeader
        title="Create Invoice"
        subtitle="Generate a new customer invoice"
      />

      <Card>
        <InvoiceForm />
      </Card>
    </div>
  );
}