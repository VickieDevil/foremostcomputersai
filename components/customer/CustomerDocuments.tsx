"use client";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerDocuments({
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
      <h3>Documents</h3>

      <p>
        Aadhaar :
        {customer.aadhaar || "-"}
      </p>

      <p>
        PAN :
        {customer.pan || "-"}
      </p>
    </div>
  );
}