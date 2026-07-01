"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";

import { useInvoice } from "../../../hooks/useInvoice";

import InvoiceForm from "../components/InvoiceForm";

export default function EditInvoicePage() {
  const params = useParams();

  const invoiceId = params.id as string;

  const {
    invoice,
    loading,
    loadInvoice,
    updateInvoice,
  } = useInvoice();

  useEffect(() => {
    if (!invoiceId) return;

    loadInvoice(invoiceId);
  }, [invoiceId]);

  if (loading || !invoice) {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        Loading Invoice...
      </div>
    );
  }

  async function handleUpdate(data: any) {