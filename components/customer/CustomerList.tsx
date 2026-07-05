"use client";

import CustomerCard from "./CustomerCard";

interface Customer {

  id: string;

  name: string;

  mobile: string;

  email?: string;

  status:
    | "Active"
    | "Pending"
    | "Blocked";

  tags: string[];

}

interface Props {

  customers: Customer[];

}

export default function CustomerList({

  customers,

}: Props) {

  return (

    <div

      style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",

        gap: 20,

      }}

    >

      {customers.map(customer=>(

        <CustomerCard

          key={customer.id}

          customer={customer}

        />

      ))}

    </div>

  );

}