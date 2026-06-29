"use client";

import { useDashboard } from "../../hooks/useDashboard";

import DashboardCards from "./components/DashboardCards";
import QuickActions from "./components/QuickActions";
import RevenueCard from "./components/RevenueCard";
import MonthlyRevenueChart from "./components/MonthlyRevenueChart";
import RecentCustomers from "./components/RecentCustomers";
import RecentActivities from "./components/RecentActivities";
import AISummary from "./components/AISummary";
import BusinessHealthCard from "./components/BusinessHealthCard";
import TopCustomers from "./components/TopCustomers";
import TopServices from "./components/TopServices";
import PendingPayments from "./components/PendingPayments";

export default function DashboardPage() {
  const { stats, loading } = useDashboard();

  if (loading) {
    return (
      <div
        style={{
          padding: 50,
          textAlign: "center",
          fontSize: 22,
        }}
      >
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 30,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: 25,
          color: "#111827",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        📊 Foremost Computers AI Dashboard
      </h1>

      {/* Dashboard Cards */}
      <DashboardCards stats={stats} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Revenue Summary */}
      <RevenueCard stats={stats} />

      {/* Revenue Chart */}
      <div
        style={{
          marginTop: 25,
        }}
      >
        <MonthlyRevenueChart
          data={stats.monthlyRevenue}
        />
      </div>

      {/* Recent Customers + Activities */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 25,
        }}
      >
        <RecentCustomers
          customers={stats.recentCustomers}
        />

        <RecentActivities
          activities={stats.activities}
        />
      </div>

      {/* AI Summary + Business Health */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 25,
        }}
      >
        <AISummary stats={stats} />

        <BusinessHealthCard
          stats={stats}
        />
      </div>

      {/* Top Customers + Top Services */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 25,
        }}
      >
        <TopCustomers
          customers={stats.recentCustomers}
        />

        <TopServices
          services={stats.topServices}
        />
      </div>

      {/* Pending Payments */}
      <div
        style={{
          marginTop: 25,
        }}
      >
        <PendingPayments
          payments={
            stats.pendingPaymentList
          }
        />
      </div>

      {/* Project Status */}
      <div
        style={{
          marginTop: 30,
          background: "#fff",
          padding: 25,
          borderRadius: 16,
          boxShadow:
            "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            marginBottom: 15,
          }}
        >
          🚀 Project Status
        </h2>

        <p>
          Welcome to Foremost Computers
          AI CRM.
        </p>

        <p>
          Customer, Billing,
          Activities, Services and
          Documents are fully integrated.
        </p>

        <p>
          Dashboard Analytics is now
          live with Revenue Chart,
          Business Health, AI Summary,
          Top Services and Pending
          Payments.
        </p>

        <p>
          Next Phase:
          Reports • PDF Export • Excel
          Export • AI Copilot •
          WhatsApp Automation.
        </p>
      </div>
    </div>
  );
}