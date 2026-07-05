import { create } from "zustand";

import { persist }
  from "zustand/middleware";

import { Customer }
  from "@/types/customer";

interface CustomerState {

  customers: Customer[];

  setCustomers: (
    customers: Customer[]
  ) => void;

  clear: () => void;

}

export const useCustomerStore =
  create<CustomerState>()(

    persist(

      (set) => ({

        customers: [],

        setCustomers:
          (customers) =>
            set({
              customers,
            }),

        clear: () =>
          set({
            customers: [],
          }),

      }),

      {
        name:
          "foremost-customers",
      }

    )

  );