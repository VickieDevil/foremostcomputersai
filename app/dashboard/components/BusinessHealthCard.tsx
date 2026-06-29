"use client";

import { DashboardStats } from "@/types/dashboard";

interface Props {
  stats: DashboardStats;
}

export default function BusinessHealthCard({
  stats,
}: Props) {

  let score = 100;

  score -= stats.pendingPayments * 5;
  score -= stats.pendingServices * 4;

  if (stats.totalRevenue === 0) score -= 15;

  if (score < 0) score = 0;

  let color = "#22c55e";
  let status = "Excellent";

  if (score < 80) {
    color = "#f59e0b";
    status = "Good";
  }

  if (score < 60) {
    color = "#ef4444";
    status = "Needs Attention";
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        marginTop: 25,
      }}
    >
      <h2
        style={{
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        🩺 Business Health
      </h2>

      <div
        style={{
          fontSize: 60,
          fontWeight: "bold",
          color,
        }}
      >
        {score}
      </div>

      <div
        style={{
          fontSize: 22,
          marginBottom: 20,
          color,
        }}
      >
        {status}
      </div>

      <hr />

      <div
        style={{
          marginTop: 20,
          lineHeight: "35px",
        }}
      >
        <div>
          👥 Active Customers :
          <b> {stats.activeCustomers}</b>
        </div>

        <div>
          🛠 Pending Services :
          <b> {stats.pendingServices}</b>
        </div>

        <div>
          💰 Pending Payments :
          <b> {stats.pendingPayments}</b>
        </div>

        <div>
          📈 Total Revenue :
          <b> ₹{stats.totalRevenue}</b>
        </div>
      </div>
    </div>
  );
}