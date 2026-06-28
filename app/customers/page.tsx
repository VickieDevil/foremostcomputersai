"use client";

import { useState } from "react";
import Link from "next/link";
import { useCustomer } from "../../hooks/useCustomer";

export default function CustomersPage() {
  const { customers, loading, deleteCustomer } = useCustomer();

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer: any) => {
    const value = search.toLowerCase();

    return (
      customer.full_name?.toLowerCase().includes(value) ||
      customer.mobile?.includes(value) ||
      customer.email?.toLowerCase().includes(value) ||
      customer.aadhaar?.includes(value)
    );
  });

  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (c: any) => c.status?.toLowerCase() === "active"
  ).length;

  return (
    <div
      style={{
        padding: 30,
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 25,
        }}
      >
        <h1 style={{ margin: 0 }}>Customer Management</h1>

        <Link href="/customers/add">
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "12px 22px",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            + Add Customer
          </button>
        </Link>
      </div>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginBottom: 25,
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <h3>Total Customers</h3>
          <h1>{totalCustomers}</h1>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "#fff",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <h3>Active Customers</h3>
          <h1>{activeCustomers}</h1>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "#fff",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <h3>Search Result</h3>
          <h1>{filteredCustomers.length}</h1>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Name, Mobile, Email or Aadhaar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: 450,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 20,
          fontSize: 15,
        }}
      />

      {/* Table */}
      {loading ? (
        <h3>Loading Customers...</h3>
      ) : filteredCustomers.length === 0 ? (
        <h3>No Customers Found</h3>
      ) : (
        <div
          style={{
            overflowX: "auto",
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 3px 12px rgba(0,0,0,.08)",
          }}
        >
          <table
            style={{
              width: "100%",
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
                <th style={{ padding: 15 }}>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th width="260">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer: any) => (
                <tr
                  key={customer.id}
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td style={{ padding: 15 }}>{customer.full_name}</td>

                  <td>{customer.mobile}</td>

                  <td>{customer.email || "-"}</td>

                  <td>
                    <span
                      style={{
                        background:
                          customer.status === "Active"
                            ? "#16a34a"
                            : "#dc2626",
                        color: "#fff",
                        padding: "4px 10px",
                        borderRadius: 20,
                        fontSize: 13,
                      }}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <Link href={`/customers/view/${customer.id}`}>
                        <button
                          style={{
                            background: "#16a34a",
                            color: "#fff",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: 6,
                            cursor: "pointer",
                          }}
                        >
                          View
                        </button>
                      </Link>

                      <Link href={`/customers/edit/${customer.id}`}>
                        <button
                          style={{
                            background: "#f59e0b",
                            color: "#fff",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: 6,
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={async () => {
                          const ok = confirm(
                            `Delete ${customer.full_name}?`
                          );

                          if (!ok) return;

                          await deleteCustomer(customer.id);
                        }}
                        style={{
                          background: "#dc2626",
                          color: "#fff",
                          border: "none",
                          padding: "8px 14px",
                          borderRadius: 6,
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}