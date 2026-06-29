"use client";

import { useReports } from "../../hooks/useReports";

import ReportCards from "./components/ReportCards";
import DailyCollection from "./components/DailyCollection";
import MonthlyReports from "./components/MonthlyReports";
import CustomerReport from "./components/CustomerReport";
import BillingReport from "./components/BillingReport";
import ExportButtons from "./components/ExportButtons";

export default function ReportsPage() {
  const { reports, loading } = useReports();

  if (loading) {
    return (
      <div
        style={{
          padding: 50,
          textAlign: "center",
          fontSize: 22,
        }}
      >
        Loading Reports...
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
          fontSize: 34,
          marginBottom: 25,
          fontWeight: 700,
        }}
      >
        📊 Reports Center
      </h1>

      <ReportCards reports={reports} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 25,
        }}
      >
        <DailyCollection
          data={reports.dailyCollection}
        />

        <MonthlyReports
          data={reports.monthlyRevenue}
        />
      </div>

      <div
        style={{
          marginTop: 25,
        }}
      >
        <CustomerReport
          customers={
            reports.customerReport
          }
        />
      </div>

      <div
        style={{
          marginTop: 25,
        }}
      >
        <BillingReport
          bills={
            reports.billingReport
          }
        />
      </div>

      <div
        style={{
          marginTop: 25,
        }}
      >
        <ExportButtons />
      </div>
    </div>
  );
}