"use client";

import { Customer } from "@/types/customer";

import CustomerAvatar from "./CustomerAvatar";
import CustomerStatus from "./CustomerStatus";
import CustomerTags from "./CustomerTags";
import CustomerActions from "./CustomerActions";

interface Props {
  customer: Customer;
}

export default function CustomerCard({
  customer,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
<CustomerAvatar
  name={customer.full_name ?? customer.name}
  image={undefined}
/>
        <CustomerStatus

    status={customer.status ?? "Pending"}
/>

      </div>

      <h3
        style={{
          marginTop: 16,
          marginBottom: 5,
        }}
      >
        {customer.full_name ?? customer.name}
      </h3>

      <div
        style={{
          color: "#64748b",
        }}
      >
        {customer.mobile}
      </div>

      {customer.email && (
        <div
          style={{
            color: "#64748b",
            marginTop: 4,
          }}
        >
          {customer.email}
        </div>
      )}

      <div
        style={{
          marginTop: 16,
        }}
      >
        <CustomerTags />
      </div>

      <div
        style={{
          marginTop: 20,
        }}
      >
        <CustomerActions
    customerId={customer.id}
/>
      </div>
    </div>
  );
}