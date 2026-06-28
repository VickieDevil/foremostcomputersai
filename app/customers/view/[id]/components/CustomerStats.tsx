"use client";

interface CustomerStatsProps {
  customer: any;
  documents: any[];
}

const cardStyle: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 12,
  padding: 20,
  boxShadow: "0 2px 8px rgba(0,0,0,.08)",
  textAlign: "center",
};

export default function CustomerStats({
  customer,
  documents,
}: CustomerStatsProps) {
  const totalDocuments = documents.length;

  return (
    <div style={{ marginBottom: 25 }}>
      <h2
        style={{
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        Customer Statistics
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 20,
        }}
      >
        <div style={cardStyle}>
          <h3>📄</h3>
          <h2>{totalDocuments}</h2>
          <p>Total Documents</p>
        </div>

        <div style={cardStyle}>
          <h3>📝</h3>
          <h2>0</h2>
          <p>Activities</p>
        </div>

        <div style={cardStyle}>
          <h3>🏛️</h3>
          <h2>0</h2>
          <p>CSC Services</p>
        </div>

        <div style={cardStyle}>
          <h3>💰</h3>
          <h2>₹0</h2>
          <p>Revenue</p>
        </div>

        <div style={cardStyle}>
          <h3>
            {customer.status === "Active"
              ? "🟢"
              : "🔴"}
          </h3>

          <h2>{customer.status}</h2>

          <p>Current Status</p>
        </div>

        <div style={cardStyle}>
          <h3>📅</h3>

          <h2>
            {customer.created_at
              ? new Date(
                  customer.created_at
                ).toLocaleDateString()
              : "-"}
          </h2>

          <p>Customer Since</p>
        </div>
      </div>
    </div>
  );
}