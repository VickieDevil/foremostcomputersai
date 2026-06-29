"use client";

import { ReportStats } from "../../../types/report";

interface Props {
  reports: ReportStats;
}

export default function ReportCards({
  reports,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(4, 1fr)",
        gap: 20,
      }}
    >
      <Card
        title="Today's Collection"
        value={
          reports.dailyCollection.length
        }
      />

      <Card
        title="Monthly Revenue"
        value={
          "₹ " +
          reports.monthlyRevenue.reduce(
            (sum, item) =>
              sum + item.revenue,
            0
          )
        }
      />

      <Card
        title="Customers"
        value={
          reports.customerReport.length
        }
      />

      <Card
        title="Bills"
        value={
          reports.billingReport.length
        }
      />
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        padding: 20,
        boxShadow:
          "0 3px 10px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          color: "#666",
          marginBottom: 8,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}