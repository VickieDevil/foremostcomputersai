"use client";

interface Customer {
  id: string;
  name: string;
  mobile: string;
}

interface Props {
  customers: Customer[];
}

export default function TopCustomers({
  customers,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        ⭐ Top Customers
      </h2>

      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        customers.map((customer, index) => (
          <div
            key={customer.id}
            style={{
              padding: 15,
              marginBottom: 12,
              borderBottom: "1px solid #eee",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              #{index + 1} {customer.name}
            </div>

            <div
              style={{
                color: "#666",
              }}
            >
              📞 {customer.mobile}
            </div>

            <div
              style={{
                marginTop: 8,
                color: "#2563eb",
                cursor: "pointer",
              }}
            >
              View Profile →
            </div>
          </div>
        ))
      )}
    </div>
  );
}