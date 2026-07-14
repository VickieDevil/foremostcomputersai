"use client";

interface Props {
  totalInvoices?: number;
  pendingAmount?: number;
}

export default function CustomerBillingCard({
  totalInvoices = 0,
  pendingAmount = 0,
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>Billing</h3>

      <p>
        Invoices : {totalInvoices}
      </p>

      <p>
        Pending : ₹{pendingAmount}
      </p>
    </div>
  );
}