import { create } from "zustand";

import { persist } from "zustand/middleware";

import { Customer } from "@/types/customer";

interface CustomerState {

  customers: Customer[];

  customer: Customer | null;

  setCustomers: (
    customers: Customer[]
  ) => void;

  setCustomer: (
    customer: Customer | null
  ) => void;

  clear: () => void;

}

export const useCustomerStore =
create<CustomerState>()(

persist(

(set)=>({

customers:[],

customer:null,

setCustomers:(customers)=>
set({customers}),

setCustomer:(customer)=>
set({customer}),

clear:()=>
set({

customers:[],

customer:null,

}),

}),

{

name:"foremost-customers",

}

)

);