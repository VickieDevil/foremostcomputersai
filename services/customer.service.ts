import { supabase } from "../lib/supabase";
import { CustomerFormData } from "../types/customer";

export class CustomerService {
  // ===========================
  // Create Customer
  // ===========================
  static async createCustomer(customer: CustomerFormData) {
    const { data, error } = await supabase
      .from("customers")
      .insert([customer])
      .select();

    console.log("Returned Data:", data);
    console.log("Returned Error:", error);

    if (error) {
      console.error("SUPABASE ERROR:", error);
      alert(JSON.stringify(error, null, 2));
      throw error;
    }

    return data;
  }

  // ===========================
  // Get All Customers
  // ===========================
  static async getCustomers() {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  // ===========================
  // Get Single Customer
  // ===========================
  static async getCustomerById(id: string) {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Update Customer
  // ===========================
  static async updateCustomer(
    id: string,
    customer: CustomerFormData
  ) {
    const { data, error } = await supabase
      .from("customers")
      .update(customer)
      .eq("id", id)
      .select();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Delete Customer
  // ===========================
  static async deleteCustomer(id: string) {
    const { error } = await supabase
      .from("customers")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }
}