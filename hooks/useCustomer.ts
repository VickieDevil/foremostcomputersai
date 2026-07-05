"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  customerService,
} from "@/services/customer.service";

import {
  useCustomerStore,
} from "@/store";

export function useCustomer() {

  const {

    customers,

    setCustomers,

  } =
    useCustomerStore();

  const [

    loading,

    setLoading,

  ] =
    useState(false);

  async function loadCustomers() {

    try {

      setLoading(true);

      const response =
        await customerService.getCustomers();

      setCustomers(
        response.data
      );

    } catch (error) {

      console.error(error);

      setCustomers([]);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadCustomers();

  }, []);

  return {

    customers,

    loading,

    reload:
      loadCustomers,

  };

}