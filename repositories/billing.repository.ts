import { BaseRepository } from "./base.repository";

import { TABLES } from "@/constants/database";

import { Billing } from "@/types/billing";

export class BillingRepository extends BaseRepository {

  async getAll(): Promise<Billing[]> {

    const { data, error } =
      await this.db
        .from(TABLES.BILLINGS)
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return (data ?? []) as Billing[];
  }

  async getById(
    id: string
  ): Promise<Billing | null> {

    const { data, error } =
      await this.db
        .from(TABLES.BILLINGS)
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;

    return data as Billing;
  }

  async getCustomerBills(
    customerId: string
  ): Promise<Billing[]> {

    const { data, error } =
      await this.db
        .from(TABLES.BILLINGS)
        .select("*")
        .eq("customer_id", customerId)
        .order("created_at", {
          ascending: false,
        });

    if (error) throw error;

    return (data ?? []) as Billing[];
  }

  async create(
    values: Partial<Billing>
  ): Promise<Billing> {

    const { data, error } =
      await this.db
        .from(TABLES.BILLINGS)
        .insert(values)
        .select()
        .single();

    if (error) throw error;

    return data as Billing;
  }

  async update(
    id: string,
    values: Partial<Billing>
  ): Promise<Billing> {

    const { data, error } =
      await this.db
        .from(TABLES.BILLINGS)
        .update(values)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;

    return data as Billing;
  }

  async delete(
    id: string
  ): Promise<boolean> {

    const { error } =
      await this.db
        .from(TABLES.BILLINGS)
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
  }

}

export const billingRepository =
  new BillingRepository();