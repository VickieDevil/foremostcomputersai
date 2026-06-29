"use client";

import { DashboardStats } from "../../../types/dashboard";

interface Props {
  stats: DashboardStats;
}

export default function RevenueCard({
  stats,
}: Props) {
  return (
    <div
      style={{
        marginTop: 25,
        background: "#fff",
        borderRadius: 16,
        padding: 25,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        💰 Revenue Summary
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
        }}
      >
        <div
          style={{
            padding: 20,
            background: "#ecfdf5",
            borderRadius: 12,
          }}
        >
          <h3>Total Revenue</h3>

          <h1>
            ₹
            {stats.totalRevenue.toLocaleString()}
          </h1>
        </div>

        <div
          style={{
            padding: 20,
            background: "#eff6ff",
            borderRadius: 12,
          }}
        >
          <h3>Today's Revenue</h3>

          <h1>
            ₹
            {stats.todayRevenue.toLocaleString()}
          </h1>
        </div>

        <div
          style={{
            padding: 20,
            background: "#fef3c7",
            borderRadius: 12,
          }}
        >
          <h3>Pending Payments</h3>

          <h1>
            {stats.pendingPayments}
          </h1>
        </div>
      </div>
    </div>
  );
}