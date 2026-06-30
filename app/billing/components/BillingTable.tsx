"use client";

export default function BillingTable() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>
        📄 Billing Records
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f3f4f6",
            }}
          >
            <th style={{ padding: 12 }}>Invoice</th>
            <th style={{ padding: 12 }}>Customer</th>
            <th style={{ padding: 12 }}>Amount</th>
            <th style={{ padding: 12 }}>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td
              colSpan={4}
              style={{
                padding: 30,
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              No Billing Records Found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}