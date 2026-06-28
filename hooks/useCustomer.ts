"use client";

import { useEffect, useState } from "react";
import { CustomerService } from "../services/customer.service";
import {
  Customer,
  CustomerFormData,
} from "../types/customer";

export function useCustomer() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(false);

  // =====================================
  // Load All Customers
  // =====================================

  async function loadCustomers() {
    setLoading(true);

    try {
      const data = await CustomerService.getCustomers();

      setCustomers(data ?? []);
    } catch (error) {
      console.error("Load Customers Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  // =====================================
  // Save Customer
  // =====================================

  async function saveCustomer(
    customerData: CustomerFormData
  ): Promise<boolean> {
    setLoading(true);

    try {
      await CustomerService.createCustomer(customerData);

      await loadCustomers();

      return true;
    } catch (error) {
      console.error("Save Customer Error:", error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // =====================================
  // Get Customer
  // =====================================

  async function getCustomerById(
    id: string
  ): Promise<Customer | null> {
    setLoading(true);

    try {
      const data =
        await CustomerService.getCustomerById(id);

      setCustomer(data);

      return data;
    } catch (error) {
      console.error("Get Customer Error:", error);

      return null;
    } finally {
      setLoading(false);
    }
  }

  // =====================================
  // Update Customer
  // =====================================

  async function updateCustomer(
    id: string,
    customerData: CustomerFormData
  ): Promise<boolean> {
    setLoading(true);

    try {
      await CustomerService.updateCustomer(
        id,
        customerData
      );

      await loadCustomers();

      return true;
    } catch (error) {
      console.error("Update Error:", error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // =====================================
  // Delete Customer
  // =====================================

  async function deleteCustomer(
    id: string
  ): Promise<boolean> {
    setLoading(true);

    try {
      await CustomerService.deleteCustomer(id);

      await loadCustomers();

      return true;
    } catch (error) {
      console.error("Delete Error:", error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // =====================================
  // Refresh
  // =====================================

  async function refresh() {
    await loadCustomers();
  }

  return {
    customers,
    customer,
    loading,

    loadCustomers,
    refresh,

    saveCustomer,

    getCustomerById,

    updateCustomer,

    deleteCustomer,
  };
}