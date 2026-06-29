"use client";

import { useEffect, useState } from "react";
import { BillingService } from "../services/billing.service";
import {
  Billing,
  BillingFormData,
} from "../types/billing";

export function useBilling(customerId?: string) {
  const [bills, setBills] = useState<Billing[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBills();
  }, [customerId]);

  async function loadBills() {
    try {
      setLoading(true);

      const data = customerId
        ? await BillingService.getCustomerBills(customerId)
        : await BillingService.getBills();

      setBills(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function addBill(
    bill: BillingFormData
  ): Promise<boolean> {
    try {
      setLoading(true);

      await BillingService.createBill(bill);

      await loadBills();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteBill(
    id: string
  ): Promise<boolean> {
    try {
      setLoading(true);

      await BillingService.deleteBill(id);

      await loadBills();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    bills,
    loading,
    loadBills,
    addBill,
    deleteBill,
  };
}