"use client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{ padding: "30px" }}>
          <h2>Dashboard Overview</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            <DashboardCard title="Customers" value="150" />
            <DashboardCard title="Orders" value="89" />
            <DashboardCard title="Revenue" value="₹25,000" />
            <DashboardCard title="Services" value="32" />
          </div>
        </div>
      </div>
    </div>
  );
}