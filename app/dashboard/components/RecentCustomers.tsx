"use client";

import Link from "next/link";

interface Customer {
  id: string;
  name: string;
  mobile: string;
}

interface Props {
  customers: Customer[];
}

export default function RecentCustomers({
  customers,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        marginTop: 25,
        padding: 25,
        borderRadius: 16,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2>👥 Recent Customers</h2>

      {customers.length === 0 ? (
        <p>No Customers Found</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            style={{
              padding: 15,
              borderBottom:
                "1px solid #eee",
            }}
          >
            <strong>
              {customer.name}
            </strong>

            <br />

            {customer.mobile}

            <br />

            <Link
              href={`/customers/view/${customer.id}`}
            >
              View Profile →
            </Link>
          </div>
        ))
      )}
    </div>
  );
}