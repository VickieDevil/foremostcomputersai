"use client";

import CustomerCard from "./CustomerCard";

import { Customer } from "@/types/customer";

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
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
        />
      ))}
    </div>
  );
}