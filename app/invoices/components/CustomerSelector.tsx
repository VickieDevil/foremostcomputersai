"use client";

import { Customer } from "../../../types/customer";

interface Props {
  customers: Customer[];
  customerId: string;
  onChange: (customerId: string) => void;
}

export default function CustomerSelector({
  customers,
  customerId,
  onChange,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 15,
        }}
      >
        Customer Details
      </h3>

      <select
        value={customerId}
        onChange={(e) =>
          onChange(e.target.value)
        }
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          border: "1px solid #d1d5db",
          fontSize: 15,
        }}
      >
        <option value="">
          Select Customer
        </option>

        {customers.map((customer) => (
          <option
            key={customer.id}
            value={customer.id}
          >
            {customer.full_name}
            {" - "}
            {customer.mobile}
          </option>
        ))}
      </select>

      {customerId && (
        <div
          style={{
            marginTop: 15,
            padding: 12,
            background: "#eff6ff",
            borderRadius: 8,
          }}
        >
          {
            customers.find(
              (c) => c.id === customerId
            )?.address
          }
        </div>
      )}
    </div>
  );
}