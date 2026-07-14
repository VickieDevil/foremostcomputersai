import { BaseRepository } from "./base.repository";
import { TABLES } from "@/constants/database";
import { Service, ServiceFormData } from "@/types/service";

export class ServiceRepository extends BaseRepository {

  async getAll(): Promise<Service[]> {
    const { data, error } = await this.db
      .from(TABLES.CUSTOMER_SERVICES)
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Service[];
  }

  async getByCustomer(
    customerId: string
  ): Promise<Service[]> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMER_SERVICES)
        .select("*")
        .eq("customer_id", customerId)
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return (data ?? []) as Service[];
  }

  async getById(
    id: string
  ): Promise<Service | null> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMER_SERVICES)
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return data as Service;
  }

  async create(
    values: ServiceFormData
  ): Promise<Service> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMER_SERVICES)
        .insert(values)
        .select()
        .single();

    if (error) throw error;

    return data as Service;
  }

  async update(
    id: string,
    values: Partial<ServiceFormData>
  ): Promise<Service> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMER_SERVICES)
        .update(values)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data as Service;
  }

  async delete(
    id: string
  ): Promise<boolean> {

    const { error } =
      await this.db
        .from(TABLES.CUSTOMER_SERVICES)
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
  }

}

export const serviceRepository =
  new ServiceRepository();