import { BaseRepository } from "./base.repository";
import { TABLES } from "@/constants/database";
import { Customer } from "@/types/customer";

export class CustomerRepository extends BaseRepository {

  async getAll(): Promise<Customer[]> {

    const { data, error } = await this.db
      .from(TABLES.CUSTOMERS)
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []) as Customer[];

  }

  async getById(
    id: string
  ): Promise<Customer | null> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMERS)
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return data as Customer;

  }

  async create(
    values: Partial<Customer>
  ): Promise<Customer> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMERS)
        .insert(values)
        .select()
        .single();

    if (error) throw error;

    return data as Customer;

  }

  async update(
    id: string,
    values: Partial<Customer>
  ): Promise<Customer> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMERS)
        .update(values)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data as Customer;

  }

  async delete(
    id: string
  ): Promise<boolean> {

    const { error } =
      await this.db
        .from(TABLES.CUSTOMERS)
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;

  }

}

export const customerRepository =
  new CustomerRepository();