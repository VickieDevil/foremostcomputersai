"use client";

interface Props {
  customerId: string;
}

export default function CustomerInfo({
  customerId,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 20,
        height: "fit-content",
      }}
    >
      <h2>Customer Info</h2>

      <hr />

      <p>
        <strong>ID:</strong>{" "}
        {customerId}
      </p>

      <p>
        <strong>Name:</strong>{" "}
        Rahul Sharma
      </p>

      <p>
        <strong>Mobile:</strong>{" "}
        +91 9876543210
      </p>

      <p>
        <strong>Status:</strong>{" "}
        Active Customer
      </p>

      <p>
        <strong>Last Visit:</strong>{" "}
        Today
      </p>

      <button
        style={{
          width: "100%",
          marginTop: 15,
          padding: 10,
          border: "none",
          borderRadius: 8,
          background: "#16a34a",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Open CRM Profile
      </button>
    </div>
  );
}