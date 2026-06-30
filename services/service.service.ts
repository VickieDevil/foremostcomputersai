import { supabase } from "../lib/supabase";
import {
  Service,
  ServiceFormData,
} from "../types/service";

export class ServiceService {
  // ==========================
  // Get All Services
  // ==========================
  static async getServices(): Promise<Service[]> {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Service[];
  }

  // ==========================
  // Get Customer Services
  // ==========================
  static async getCustomerServices(
    customerId: string
  ): Promise<Service[]> {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Service[];
  }

  // ==========================
  // Get One Service
  // ==========================
  static async getServiceById(
    id: string
  ): Promise<Service | null> {
    const { data, error } = await supabase
      .from("customer_services")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Service;
  }

  // ==========================
  // Create Service
  // ==========================
  static async createService(
    service: ServiceFormData
  ) {
    const { data, error } =
      await supabase
        .from("customer_services")
        .insert(service)
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  // ==========================
  // Update Service
  // ==========================
  static async updateService(
    id: string,
    service: Partial<ServiceFormData>
  ) {
    const { data, error } =
      await supabase
        .from("customer_services")
        .update(service)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  // ==========================
  // Delete Service
  // ==========================
  static async deleteService(
    id: string
  ): Promise<boolean> {
    const { error } =
      await supabase
        .from("customer_services")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
  }

  // ==========================
  // Dashboard Statistics
  // ==========================
  static async getServiceStats() {
    const services =
      await this.getServices();

    const total = services.length;

    const completed =
      services.filter(
        (s) => s.status === "Completed"
      ).length;

    const pending =
      services.filter(
        (s) => s.status === "Pending"
      ).length;

    const inProgress =
      services.filter(
        (s) => s.status === "In Progress"
      ).length;

    const cancelled =
      services.filter(
        (s) => s.status === "Cancelled"
      ).length;

    const revenue =
      services.reduce(
        (sum, s) =>
          sum + Number(s.amount || 0),
        0
      );

    const received =
      services.reduce(
        (sum, s) =>
          sum +
          Number(s.paid_amount || 0),
        0
      );

    const due =
      services.reduce(
        (sum, s) =>
          sum +
          Number(s.due_amount || 0),
        0
      );

    return {
      total,
      completed,
      pending,
      inProgress,
      cancelled,
      revenue,
      received,
      due,
    };
  }
}