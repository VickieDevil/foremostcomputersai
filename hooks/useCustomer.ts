"use client";

import { useEffect, useState } from "react";
import { CustomerService } from "../services/customer.service";
import { CustomerFormData } from "../types/customer";

export function useCustomer() {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState<CustomerFormData[]>([]);

  async function loadCustomers() {
    try {
      setLoading(true);

      const data = await CustomerService.getCustomers();

      setCustomers(data || []);
    } catch (error) {
      console.error("Load Customer Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function saveCustomer(customer: CustomerFormData) {
    try {
      setLoading(true);

      await CustomerService.createCustomer(customer);

      await loadCustomers();

      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteCustomer(id: string) {
    try {
      await CustomerService.deleteCustomer(id);

      await loadCustomers();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return {
    loading,
    customers,
    saveCustomer,
    deleteCustomer,
    loadCustomers,
  };
}