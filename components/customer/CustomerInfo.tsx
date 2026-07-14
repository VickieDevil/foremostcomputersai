"use client";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerInfo({
  customer,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gap: 14,
      }}
    >
      <div>
        <strong>Name</strong>
        <div>{customer.name}</div>
      </div>

      <div>
        <strong>Mobile</strong>
        <div>{customer.mobile}</div>
      </div>

      <div>
        <strong>Email</strong>
        <div>{customer.email || "-"}</div>
      </div>

      <div>
        <strong>Address</strong>
        <div>{customer.address || "-"}</div>
      </div>
    </div>
  );
}