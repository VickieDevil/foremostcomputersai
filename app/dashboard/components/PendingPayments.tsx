"use client";

interface Payment {
  customer: string;
  amount: number;
}

interface Props {
  payments: Payment[];
}

export default function PendingPayments({
  payments,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        💰 Pending Payments
      </h2>

      {payments.length === 0 ? (
        <p>No Pending Payments</p>
      ) : (
        payments.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              padding: "12px 0",
              borderBottom:
                "1px solid #eee",
            }}
          >
            <span>{item.customer}</span>

            <strong>
              ₹
              {item.amount.toLocaleString()}
            </strong>
          </div>
        ))
      )}
    </div>
  );
}