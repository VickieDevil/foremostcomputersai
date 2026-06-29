"use client";

import { MonthlyReport } from "../../../types/report";

interface Props {
  data: MonthlyReport[];
}

export default function MonthlyReports({
  data,
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
        📈 Monthly Revenue
      </h2>

      {data.length === 0 ? (
        <p>No monthly revenue available.</p>
      ) : (
        data.map((item) => (
          <div
            key={item.month}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom:
                "1px solid #eee",
            }}
          >
            <strong>{item.month}</strong>

            <span>
              ₹ {item.revenue}
            </span>

            <span>
              Bills : {item.bills}
            </span>
          </div>
        ))
      )}
    </div>
  );
}