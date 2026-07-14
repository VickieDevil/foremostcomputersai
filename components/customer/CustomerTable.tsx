"use client";

import { Customer } from "@/types/customer";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({
  customers,
}: Props) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <thead
        style={{
          background: "#f8fafc",
        }}
      >
        <tr>
          <th style={{ padding: 12, textAlign: "left" }}>
            Name
          </th>

          <th style={{ padding: 12, textAlign: "left" }}>
            Mobile
          </th>

          <th style={{ padding: 12, textAlign: "left" }}>
            Email
          </th>

          <th style={{ padding: 12, textAlign: "left" }}>
            Status
          </th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr
            key={customer.id}
            style={{
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <td style={{ padding: 12 }}>
           {customer.full_name ?? customer.name ?? "-"}
            </td>

            <td style={{ padding: 12 }}>
              {customer.mobile ?? "-"}
            </td>

            <td style={{ padding: 12 }}>
              {customer.email ?? "-"}
            </td>

            <td style={{ padding: 12 }}>
              {customer.status ?? "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}