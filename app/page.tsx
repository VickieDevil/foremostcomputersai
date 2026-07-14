"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./components/ui/Button";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";

import { customerService } from "../services/customer.service";
import { DocumentService } from "../services/document.service";
export default function Home() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [customerCount, setCustomerCount] = useState(0);
  const [activeCustomers, setActiveCustomers] = useState(0);
  const [todayCustomers, setTodayCustomers] = useState(0);
const [documentCount, setDocumentCount] = useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
  try {
    // Customers
    const response =
      await customerService.getCustomers();

    const customerList =
      response.data ?? [];

    setCustomers(customerList);

    setCustomerCount(customerList.length);

    setActiveCustomers(
      customerList.filter(
        (c: any) =>
          c.status?.toLowerCase() ===
          "active"
      ).length
    );

    const today = new Date()
      .toISOString()
      .split("T")[0];

    setTodayCustomers(
      customerList.filter(
        (c: any) =>
          c.created_at?.startsWith(
            today
          )
      ).length
    );

    // Documents
    const documentData =
      await DocumentService.getAllDocuments();

    setDocumentCount(
      documentData.length
    );

  } catch (error) {

    console.error(error);

    setCustomers([]);

    setCustomerCount(0);

    setActiveCustomers(0);

    setTodayCustomers(0);

    setDocumentCount(0);

  }
}

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

        <div style={{ padding: 30 }}>
          <h2 style={{ marginBottom: 20 }}>
            Dashboard Overview
          </h2>

          {/* Dashboard Cards */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
            }}
          >
            <DashboardCard
              title="Total Customers"
              value={customerCount.toString()}
            />

            <DashboardCard
              title="Active Customers"
              value={activeCustomers.toString()}
            />

            <DashboardCard
              title="Today's Customers"
              value={todayCustomers.toString()}
            />

            <DashboardCard
              title="Total Documents"
              value={documentCount.toString()}
            />
          </div>

          {/* Quick Actions */}

          <div
            style={{
              marginTop: 35,
              display: "flex",
              gap: 15,
              flexWrap: "wrap",
            }}
          >
            <Link href="/customers/add">
              <Button variant="primary">
    + Add Customer
</Button>
            </Link>

            <Link href="/customers">
              <button
                style={{
                  padding: "12px 20px",
                  background: "#16a34a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Customer List
              </button>
            </Link>

            <Link href="/documents">
              <button
                style={{
                  padding: "12px 20px",
                  background: "#f59e0b",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Documents
              </button>
            </Link>
          </div>

          {/* Recent Customers */}

          <div
            style={{
              marginTop: 40,
              background: "#fff",
              borderRadius: 10,
              padding: 20,
              boxShadow:
                "0 2px 8px rgba(0,0,0,.08)",
            }}
          >
            <h3>Recent Customers</h3>

            {customers.length === 0 ? (
              <p>No Customers Found</p>
            ) : (
              <table
                style={{
                  width: "100%",
                  marginTop: 15,
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                    }}
                  >
                    <th style={{ padding: 10 }}>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>View</th>
                  </tr>
                </thead>

                <tbody>
                  {customers
                    .slice(0, 5)
                    .map((customer: any) => (
                      <tr
                        key={customer.id}
                        style={{
                          borderBottom:
                            "1px solid #eee",
                        }}
                      >
                        <td style={{ padding: 10 }}>
                          {customer.full_name}
                        </td>

                        <td>{customer.mobile}</td>

                        <td>
                          {customer.email || "-"}
                        </td>

                        <td>
                          {customer.status}
                        </td>

                        <td>
                          <Link
                            href={`/customers/view/${customer.id}`}
                          >
                            <button
                              style={{
                                background:
                                  "#16a34a",
                                color: "#fff",
                                border: "none",
                                padding:
                                  "6px 12px",
                                borderRadius: 6,
                                cursor:
                                  "pointer",
                              }}
                            >
                              View
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}