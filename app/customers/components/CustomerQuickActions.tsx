"use client";

interface Props {
  customerId: string;
}

export default function CustomerQuickActions({
  customerId,
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>Quick Actions</h3>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <button>Edit</button>

        <button>Documents</button>

        <button>Billing</button>

        <button>WhatsApp</button>

        <button>Timeline</button>
      </div>
    </div>
  );
}