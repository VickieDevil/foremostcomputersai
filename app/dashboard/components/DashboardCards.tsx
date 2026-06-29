"use client";

import { DashboardStats } from "../../../types/dashboard";

interface Props {
  stats: DashboardStats;
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  padding: 22,
  boxShadow: "0 4px 12px rgba(0,0,0,.08)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const valueStyle: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 700,
  color: "#111827",
};

const titleStyle: React.CSSProperties = {
  color: "#6b7280",
  fontSize: 14,
  fontWeight: 600,
};

export default function DashboardCards({
  stats,
}: Props) {
  const cards = [
    {
      title: "Total Customers",
      value: stats.totalCustomers,
      icon: "👥",
    },
    {
      title: "Active Customers",
      value: stats.activeCustomers,
      icon: "🟢",
    },
    {
      title: "Documents",
      value: stats.totalDocuments,
      icon: "📄",
    },
    {
      title: "Services",
      value: stats.totalServices,
      icon: "🛠",
    },
    {
      title: "Pending Services",
      value: stats.pendingServices,
      icon: "⏳",
    },
    {
      title: "Completed Services",
      value: stats.completedServices,
      icon: "✅",
    },
    {
      title: "Bills",
      value: stats.totalBills,
      icon: "🧾",
    },
    {
      title: "Pending Payments",
      value: stats.pendingPayments,
      icon: "💳",
    },
    {
      title: "Total Revenue",
      value: `₹ ${stats.totalRevenue.toLocaleString()}`,
      icon: "💰",
    },
    {
      title: "Today's Revenue",
      value: `₹ ${stats.todayRevenue.toLocaleString()}`,
      icon: "📈",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(240px,1fr))",
        gap: 20,
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={cardStyle}
        >
          <div
            style={{
              fontSize: 34,
            }}
          >
            {card.icon}
          </div>

          <div style={titleStyle}>
            {card.title}
          </div>

          <div style={valueStyle}>
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}