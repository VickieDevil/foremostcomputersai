"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import PageHeader from "../../../components/ui/PageHeader";
import Card from "../../../components/ui/Card";
import Loader from "../../../components/ui/Loader";

import { useInvoice } from "../../../../hooks/useInvoice";

import InvoicePreview from "../../components/InvoicePreview";
import InvoicePrint from "../../components/InvoicePrint";
import InvoicePDF from "../../components/InvoicePDF";

export default function ViewInvoicePage() {
  const params = useParams();

  const invoiceId = params.id as string;

  const {
    invoice,
    loading,
    loadInvoice,
  } = useInvoice();

  useEffect(() => {
    if (!invoiceId) return;

    loadInvoice(invoiceId);
  }, [invoiceId]);

  if (loading) {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        <Loader text="Loading Invoice..." />
      </div>
    );
  }

  if (!invoice) {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        Invoice Not Found
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 30,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <PageHeader
        title={`Invoice ${invoice.invoice_no}`}
        subtitle={invoice.customer_name}
      />

      <Card>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "flex-end",
            marginBottom: 20,
          }}
        >
          <InvoicePrint
            invoice={invoice}
          />

          <InvoicePDF
            invoice={invoice}
          />
        </div>

        <InvoicePreview
          invoice={invoice}
        />
      </Card>
    </div>
  );
}