"use client";

import { BillingReport as BillingReportType } from "../../../types/report";

interface Props {
  bills: BillingReportType[];
}

export default function BillingReport({
  bills,
}: Props) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 20,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        🧾 Billing Report
      </h2>

      {bills.length === 0 ? (
        <p>No billing records found.</p>
      ) : (
        bills.map((bill) => (
          <div
            key={bill.id}
            style={{
              display: "grid",
              gridTemplateColumns:
                "2fr 2fr 1fr 1fr",
              gap: 12,
              padding: "12px 0",
              borderBottom:
                "1px solid #eee",
            }}
          >
            <div>
              <strong>
                {bill.invoiceNo}
              </strong>
              <br />
              {bill.customerName}
            </div>

            <div>
              {new Date(
                bill.createdAt
              ).toLocaleDateString()}
            </div>

            <div>
              ₹ {bill.amount}
            </div>

            <div
              style={{
                color:
                  bill.paymentStatus ===
                  "Paid"
                    ? "green"
                    : "red",
                fontWeight: 600,
              }}
            >
              {bill.paymentStatus}
            </div>
          </div>
        ))
      )}
    </div>
  );
}