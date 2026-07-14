"use client";

import { useEffect, useState } from "react";

import { customerService } from "@/services/customer.service";

import { useCustomerStore } from "@/store";

import { Customer } from "@/types/customer";

export function useCustomer() {
  const {
    customers,
    customer,
    setCustomers,
    setCustomer,
  } = useCustomerStore();

  const [loading, setLoading] =
    useState(false);

  // ==========================
  // Load All Customers
  // ==========================

  async function loadCustomers() {
    try {
      setLoading(true);

      const response =
        await customerService.getCustomers();

      setCustomers(response.data ?? []);
    } catch (error) {
      console.error(error);

      setCustomers([]);
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Load Single Customer
  // ==========================

  async function getCustomerById(
    id: string
  ) {
    try {
      setLoading(true);

      const response =
        await customerService.getCustomerById(id);

      setCustomer(response.data);
    } catch (error) {
      console.error(error);

      setCustomer(null);
    } finally {
      setLoading(false);
    }
  }

// ==========================
// Create
// ==========================

async function createCustomer(
  values: Partial<Customer>
): Promise<boolean> {
  try {
    setLoading(true);

    await customerService.createCustomer(values);

    await loadCustomers();

    return true;
  } catch (error) {
    console.error(error);

    return false;
  } finally {
    setLoading(false);
  }
}

// ==========================
// Update
// ==========================

async function updateCustomer(
  id: string,
  values: Partial<Customer>
): Promise<boolean> {
  try {
    setLoading(true);

    await customerService.updateCustomer(
      id,
      values
    );

    await loadCustomers();

    return true;
  } catch (error) {
    console.error(error);

    return false;
  } finally {
    setLoading(false);
  }
}

  // ==========================
  // Delete
  // ==========================

  async function deleteCustomer(
    id: string
  ) {
    try {
      setLoading(true);

      await customerService.deleteCustomer(id);

      await loadCustomers();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ==========================
  // Initial Load
  // ==========================

  useEffect(() => {
    loadCustomers();
  }, []);

  return {
    customers,
    customer,
    loading,

    reload: loadCustomers,

    loadCustomers,

    getCustomerById,

    createCustomer,

    updateCustomer,

    deleteCustomer,
  };
}