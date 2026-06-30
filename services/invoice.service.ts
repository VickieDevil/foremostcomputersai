import { supabase } from "../lib/supabase";
import { Invoice } from "../types/invoice";

export class InvoiceService {
  static async getAll() {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return data as Invoice[];
  }

  static async getById(id: string) {
    const { data, error } = await supabase
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Invoice;
  }

  static async create(invoice: Invoice) {
    const { data, error } = await supabase
      .from("invoices")
      .insert(invoice)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async update(
    id: string,
    invoice: Partial<Invoice>
  ) {
    const { data, error } = await supabase
      .from("invoices")
      .update(invoice)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async delete(id: string) {
    const { error } = await supabase
      .from("invoices")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }
}