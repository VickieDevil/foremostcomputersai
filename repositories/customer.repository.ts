import { BaseRepository } from "./base.repository";

import { TABLES } from "@/constants/database";

import { Customer } from "@/types/customer";

export class CustomerRepository
  extends BaseRepository {

  async getAll(): Promise<Customer[]> {

    const { data, error } =
      await this.db
        .from(TABLES.CUSTOMERS)
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      throw error;
    }

    return (data ?? []) as Customer[];

  }

}

export const customerRepository =
  new CustomerRepository();