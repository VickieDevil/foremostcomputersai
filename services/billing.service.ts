import { supabase } from "../lib/supabase";
import {
  Billing,
  BillingFormData,
} from "../types/billing";

export class BillingService {
  static async getBills() {
    const { data, error } =
      await supabase
        .from("billing")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return data as Billing[];
  }

  static async getCustomerBills(
    customerId: string
  ) {
    const { data, error } =
      await supabase
        .from("billing")
        .select("*")
        .eq("customer_id", customerId)
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return data as Billing[];
  }

  static async createBill(
  bill: BillingFormData
) {
  const { data, error } =
    await supabase
      .from("billing")
      .insert([bill])
      .select();

  if (error) throw error;

  return data;
}

  static async deleteBill(
    id: string
  ) {
    const { error } =
      await supabase
        .from("billing")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
  }
}