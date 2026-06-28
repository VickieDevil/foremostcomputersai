import { supabase } from "../lib/supabase";
import {
  CustomerService,
  CustomerServiceForm,
} from "../types/service";

export class ServiceService {
  // ===========================
  // Get All Services
  // ===========================
  static async getServices() {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data as CustomerService[];
  }

  // ===========================
  // Get Services By Customer
  // ===========================
  static async getCustomerServices(
    customerId: string
  ) {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return data as CustomerService[];
  }

  // ===========================
  // Add Service
  // ===========================
  static async createService(
    service: CustomerServiceForm
  ) {
    const { data, error } = await supabase
      .from("customer_services")
      .insert([service])
      .select();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Update Service
  // ===========================
  static async updateService(
    id: string,
    service: CustomerServiceForm
  ) {
    const { data, error } = await supabase
      .from("customer_services")
      .update(service)
      .eq("id", id)
      .select();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Delete Service
  // ===========================
  static async deleteService(
    id: string
  ) {
    const { error } = await supabase
      .from("customer_services")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }

  // ===========================
  // Dashboard Statistics
  // ===========================
  static async getServiceStats() {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*");

    if (error) throw error;

    const total = data.length;

    const completed = data.filter(
      (item) => item.status === "Completed"
    ).length;

    const pending = data.filter(
      (item) => item.status === "Pending"
    ).length;

    const revenue = data.reduce(
      (sum, item) =>
        sum + Number(item.amount || 0),
      0
    );

    return {
      total,
      completed,
      pending,
      revenue,
    };
  }
}