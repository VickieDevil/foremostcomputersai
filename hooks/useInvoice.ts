"use client";

import { useEffect, useState } from "react";

import { InvoiceService } from "../services/invoice.service";

import {
  Invoice,
  InvoiceFormData,
} from "../types/invoice";

export function useInvoice(
  customerId?: string
) {
  const [invoices, setInvoices] = useState<
    Invoice[]
  >([]);

  const [invoice, setInvoice] =
    useState<Invoice | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [stats, setStats] = useState({
    total: 0,
    paid: 0,
    pending: 0,
    revenue: 0,
  });

  // ==========================
  // Load All Invoices
  // ==========================

  async function loadInvoices() {
    try {
      setLoading(true);

      const data = customerId
        ? await InvoiceService.getCustomerInvoices(
            customerId
          )
        : await InvoiceService.getAll();

      setInvoices(data ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Invoice Details
  // ==========================

  async function loadInvoice(
    id: string
  ) {
    try {
      setLoading(true);

      const data =
        await InvoiceService.getById(id);

      setInvoice(data);

      return data;
    } catch (error) {
      console.error(error);

      return null;
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Create Invoice
  // ==========================

  async function addInvoice(
    form: InvoiceFormData
  ) {
    try {
      setLoading(true);

      await InvoiceService.create(
        form as Invoice
      );

      await loadInvoices();

      await loadStats();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Update Invoice
  // ==========================

  async function updateInvoice(
    id: string,
    form: Partial<Invoice>
  ) {
    try {
      setLoading(true);

      await InvoiceService.update(
        id,
        form
      );

      await loadInvoices();

      await loadStats();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Delete Invoice
  // ==========================

  async function deleteInvoice(
    id: string
  ) {
    try {
      setLoading(true);

      await InvoiceService.delete(id);

      await loadInvoices();

      await loadStats();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Dashboard Stats
  // ==========================

  async function loadStats() {
    try {
      const result =
        await InvoiceService.getInvoiceStats();

      setStats(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadInvoices();

    loadStats();
  }, [customerId]);

  return {
    invoices,

    invoice,

    loading,

    stats,

    loadInvoices,

    loadInvoice,

    addInvoice,

    updateInvoice,

    deleteInvoice,

    loadStats,
  };
}