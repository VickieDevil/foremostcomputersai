import { supabase } from "../lib/supabase";
import {
  Customer,
  CustomerFormData,
} from "../types/customer";

export class CustomerService {
  // =====================================
  // Create Customer
  // =====================================

  static async createCustomer(
    customer: CustomerFormData
  ): Promise<Customer[]> {

    // Duplicate Mobile Check

    const { data: mobileExists } = await supabase
      .from("customers")
      .select("id")
      .eq("mobile", customer.mobile)
      .maybeSingle();

    if (mobileExists) {
      throw new Error("Mobile Number Already Exists");
    }

    // Duplicate Aadhaar Check

    if (customer.aadhaar) {
      const { data: aadhaarExists } = await supabase
        .from("customers")
        .select("id")
        .eq("aadhaar", customer.aadhaar)
        .maybeSingle();

      if (aadhaarExists) {
        throw new Error("Aadhaar Already Exists");
      }
    }

    // Duplicate PAN Check

    if (customer.pan) {
      const { data: panExists } = await supabase
        .from("customers")
        .select("id")
        .eq("pan", customer.pan)
        .maybeSingle();

      if (panExists) {
        throw new Error("PAN Already Exists");
      }
    }

    const { data, error } = await supabase
      .from("customers")
      .insert(customer)
      .select();

    if (error) throw error;

    return data as Customer[];
  }

  // =====================================
  // Get All Customers
  // =====================================

  static async getCustomers(): Promise<Customer[]> {

    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Customer[];
  }

  // =====================================
  // Get Customer By ID
  // =====================================

  static async getCustomerById(
    id: string
  ): Promise<Customer | null> {

    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Customer;
  }

  // =====================================
  // Update Customer
  // =====================================

  static async updateCustomer(
    id: string,
    customer: CustomerFormData
  ): Promise<Customer[]> {

    const { data, error } = await supabase
      .from("customers")
      .update(customer)
      .eq("id", id)
      .select();

    if (error) throw error;

    return data as Customer[];
  }

  // =====================================
  // Delete Customer
  // =====================================

  static async deleteCustomer(
    id: string
  ): Promise<boolean> {

    const { error } = await supabase
      .from("customers")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }

  // =====================================
  // Search Customers
  // =====================================

  static async searchCustomers(
    keyword: string
  ): Promise<Customer[]> {

    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .or(
        `full_name.ilike.%${keyword}%,mobile.ilike.%${keyword}%,email.ilike.%${keyword}%`
      );

    if (error) throw error;

    return (data ?? []) as Customer[];
  }
// ===========================================
// Get Pending Services For Invoice
// ===========================================

static async getPendingServices(
  customerId: string
) {
  const { data, error } = await supabase
    .from("customer_services")
    .select("*")
    .eq("customer_id", customerId)
    .neq("status", "Cancelled")
    .neq("status", "Rejected")
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data ?? [];
}

// ===========================================
// Mark Service As Completed / Invoiced
// ===========================================

static async markServiceInvoiced(
  serviceId: string
) {
  const { data, error } = await supabase
    .from("customer_services")
    .update({
      status: "Completed",
    })
    .eq("id", serviceId)
    .select()
    .single();

  if (error) throw error;

  return data;
}
}