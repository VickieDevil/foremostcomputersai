"use client";

import { useState } from "react";
import Link from "next/link";
import { useCustomer } from "../../hooks/useCustomer";

export default function CustomersPage() {
  const {
    customers,
    loading,
    deleteCustomer,
  } = useCustomer();

  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((customer: any) => {
    const value = search.toLowerCase();

    return (
      customer.full_name?.toLowerCase().includes(value) ||
      customer.mobile?.includes(value) ||
      customer.email?.toLowerCase().includes(value)
    );
  });

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h1>Customers</h1>

        <Link href="/customers/add">
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            + Add Customer
          </button>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by Name, Mobile or Email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "350px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      {loading ? (
        <h3>Loading Customers...</h3>
      ) : filteredCustomers.length === 0 ? (
        <h3>No Customers Found</h3>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fff",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <th style={{ padding: 12 }}>Name</th>
              <th style={{ padding: 12 }}>Mobile</th>
              <th style={{ padding: 12 }}>Email</th>
              <th style={{ padding: 12 }}>Status</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer: any) => (
              <tr key={customer.id}>
                <td style={{ padding: 12 }}>{customer.full_name}</td>

                <td style={{ padding: 12 }}>{customer.mobile}</td>

                <td style={{ padding: 12 }}>{customer.email}</td>

                <td style={{ padding: 12 }}>{customer.status}</td>

                <td style={{ padding: 12 }}>
                  <button
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      marginRight: 8,
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>

                  <button
                    style={{
                      background: "#f59e0b",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      marginRight: 8,
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

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
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}