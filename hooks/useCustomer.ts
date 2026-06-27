"use client";

import { useState } from "react";
import { CustomerService } from "../services/customer.service";
import { CustomerFormData } from "../types/customer";

export function useCustomer() {
  const [loading, setLoading] = useState(false);

  const saveCustomer = async (customer: CustomerFormData) => {
    try {
      setLoading(true);

      console.log("Saving Customer...");
      console.log(customer);

      const data = await CustomerService.createCustomer(customer);

      console.log("Customer Saved:", data);
alert("Customer Saved");

      console.log("Supabase Response :", data);

      alert("Customer Saved Successfully");

      return true;
    } catch (error: any) {
      console.error("SAVE ERROR :", error);
alert(JSON.stringify(error, null, 2));
      alert(error?.message || "Unable to Save Customer");

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    saveCustomer,
  };
}