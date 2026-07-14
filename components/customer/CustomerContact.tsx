"use client";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerContact({
  customer,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
      }}
    >
      <h3>Contact</h3>

      <p>📞 {customer.mobile}</p>

      <p>✉ {customer.email || "-"}</p>
    </div>
  );
}