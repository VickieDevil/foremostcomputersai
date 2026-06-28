"use client";

interface CustomerAISummaryProps {
  customer: any;
}

export default function CustomerAISummary({
  customer,
}: CustomerAISummaryProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: 20,
        borderRadius: 12,
        marginTop: 25,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        🤖 AI Assistant Summary
      </h2>

      <div
        style={{
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          padding: 18,
          borderRadius: 10,
          lineHeight: 1.8,
          color: "#334155",
        }}
      >
        <p>
          <strong>Name :</strong>{" "}
          {customer.full_name}
        </p>

        <p>
          Customer profile has been created
          successfully.
        </p>

        <p>
          AI will analyse:
        </p>

        <ul>
          <li>Customer behaviour</li>

          <li>CSC Services History</li>

          <li>Document Verification</li>

          <li>WhatsApp Conversation</li>

          <li>Payment History</li>

          <li>Future Recommendations</li>
        </ul>

        <p>
          <strong>Status :</strong>{" "}
          AI Analysis Module Coming Soon
        </p>
      </div>
    </div>
  );
}