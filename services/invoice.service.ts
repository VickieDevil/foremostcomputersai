import { supabase } from "../lib/supabase";

import {
  Invoice,
  InvoiceFormData,
} from "../types/invoice";

export class InvoiceService {
  // ===========================
  // Get All Invoices
  // ===========================

  static async getAll() {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Invoice[];
  }

  // ===========================
  // Get Invoice By ID
  // ===========================

  static async getById(id: string) {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Invoice;
  }

  // ===========================
  // Get Customer Invoices
  // ===========================

  static async getCustomerInvoices(
    customerId: string
  ) {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Invoice[];
  }

  // ===========================
  // Generate Invoice Number
  // ===========================

  static async generateInvoiceNumber() {
    const year = new Date().getFullYear();

    const { count } = await supabase
      .from("invoices")
      .select("*", {
        count: "exact",
        head: true,
      });

    const next =
      String((count ?? 0) + 1).padStart(
        6,
        "0"
      );

    return `FC-${year}-${next}`;
  }

  // ===========================
  // Create Invoice
  // ===========================

  static async create(
    invoice: InvoiceFormData
  ) {
    const invoiceNo =
      await this.generateInvoiceNumber();

    const subtotal =
      invoice.items.reduce(
        (sum, item) =>
          sum +
          item.quantity * item.price,
        0
      );

    const gstTotal =
      invoice.items.reduce(
        (sum, item) =>
          sum + item.gst,
        0
      );

    const discountTotal =
      invoice.items.reduce(
        (sum, item) =>
          sum + item.discount,
        0
      );

    const grandTotal =
      subtotal +
      gstTotal -
      discountTotal;

    const payload = {
      ...invoice,

      invoice_no: invoiceNo,

      subtotal,

      gst_total: gstTotal,

      discount_total:
        discountTotal,

      grand_total: grandTotal,

      paid_amount: 0,

      due_amount: grandTotal,
    };

    const { data, error } =
      await supabase
        .from("invoices")
        .insert(payload)
        .select()
        .single();

    if (error) throw error;

    return data as Invoice;
  }

  // ===========================
  // Update Invoice
  // ===========================

  static async update(
    id: string,
    invoice: Partial<Invoice>
  ) {
    const { data, error } =
      await supabase
        .from("invoices")
        .update(invoice)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data as Invoice;
  }

  // ===========================
  // Delete Invoice
  // ===========================

  static async delete(id: string) {
    const { error } = await supabase
      .from("invoices")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }

  // ===========================
  // Dashboard Statistics
  // ===========================

  static async getInvoiceStats() {
    const invoices =
      await this.getAll();

    const total =
      invoices.length;

    const paid =
      invoices.filter(
        (item) =>
          item.status === "Paid"
      ).length;

    const pending =
      invoices.filter(
        (item) =>
          item.status ===
            "Pending" ||
          item.status ===
            "Partially Paid"
      ).length;

    const revenue =
      invoices.reduce(
        (sum, item) =>
          sum +
          Number(
            item.grand_total || 0
          ),
        0
      );

    return {
      total,
      paid,
      pending,
      revenue,
    };
  }
}