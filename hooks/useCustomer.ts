"use client";

import { useEffect, useState } from "react";
import { CustomerService } from "../services/customer.service";
import { CustomerFormData } from "../types/customer";

export function useCustomer() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ===========================
  // Load All Customers
  // ===========================
  async function loadCustomers() {
    try {
      setLoading(true);

      const data = await CustomerService.getCustomers();

      setCustomers(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  // ===========================
  // Save Customer
  // ===========================
  async function saveCustomer(customerData: CustomerFormData) {
    try {
      setLoading(true);

      await CustomerService.createCustomer(customerData);

      await loadCustomers();

      alert("Customer Saved Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Save Customer");

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Get Customer By ID
  // ===========================
  async function getCustomerById(id: string) {
    try {
      setLoading(true);

      const data = await CustomerService.getCustomerById(id);

      setCustomer(data);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Update Customer
  // ===========================
  async function updateCustomer(
    id: string,
    customerData: CustomerFormData
  ) {
    try {
      setLoading(true);

      await CustomerService.updateCustomer(id, customerData);

      await loadCustomers();

      alert("Customer Updated Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Update Customer");

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Delete Customer
  // ===========================
  async function deleteCustomer(id: string) {
    try {
      setLoading(true);

      await CustomerService.deleteCustomer(id);

      await loadCustomers();

      alert("Customer Deleted Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Delete Customer");

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    customers,
    customer,
    loading,
    loadCustomers,
    saveCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
  };
}