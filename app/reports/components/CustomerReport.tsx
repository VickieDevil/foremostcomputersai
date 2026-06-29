"use client";

import { CustomerReport as CustomerReportType } from "../../../types/report";

interface Props {
  customers: CustomerReportType[];
}

export default function CustomerReport({
  customers,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 16,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        👥 Customer Report
      </h2>

      {customers.length === 0 ? (
        <p>No customer data found.</p>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.id}
            style={{
              borderBottom:
                "1px solid #eee",
              padding: "12px 0",
            }}
          >
            <h3
              style={{
                margin: 0,
              }}
            >
              {customer.name}
            </h3>

            <p>
              📱 {customer.mobile}
            </p>

            <p>
              Services :
              {" "}
              {customer.totalServices}
            </p>

            <p>
              Bills :
              {" "}
              {customer.totalBills}
            </p>

            <p>
              Total Spent :
              {" "}
              ₹ {customer.totalSpent}
            </p>
          </div>
        ))
      )}
    </div>
  );
}