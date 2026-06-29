"use client";

import { DashboardStats } from "@/types/dashboard";

interface Props {
  stats: DashboardStats;
}

export default function AISummary({
  stats,
}: Props) {
  const messages: string[] = [];

  if (stats.pendingPayments > 0) {
    messages.push(
      `💰 ${stats.pendingPayments} payment(s) are still pending.`
    );
  }

  if (stats.pendingServices > 0) {
    messages.push(
      `🛠 ${stats.pendingServices} service(s) are pending.`
    );
  }

  if (stats.activeCustomers > 0) {
    messages.push(
      `👥 You currently have ${stats.activeCustomers} active customers.`
    );
  }

  if (stats.totalRevenue > 100000) {
    messages.push(
      "📈 Excellent! Revenue is looking very healthy."
    );
  } else if (stats.totalRevenue > 0) {
    messages.push(
      "📊 Revenue is growing. Keep serving customers regularly."
    );
  } else {
    messages.push(
      "⚠ No revenue has been recorded yet."
    );
  }

  if (stats.totalDocuments > 0) {
    messages.push(
      `📁 ${stats.totalDocuments} documents are stored securely.`
    );
  }

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 25,
        marginTop: 25,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          color: "#111827",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        🤖 AI Business Summary
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              background: "#f3f4f6",
              padding: 14,
              borderRadius: 10,
              fontSize: 16,
            }}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}