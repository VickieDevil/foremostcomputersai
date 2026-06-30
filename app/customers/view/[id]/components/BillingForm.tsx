"use client";

import { useState } from "react";
import { useBilling } from "../../../../../hooks/useBilling";
import {
  Billing,
  BillingFormData,
} from "../../../../../types/billing";

interface Props {
  customerId: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #d1d5db",
  borderRadius: 8,
  marginBottom: 15,
  fontSize: 15,
};

export default function BillingForm({
  customerId,
}: Props) {
  const { addBill, loading } = useBilling(customerId);

  const [form, setForm] =
    useState<BillingFormData>({
      customer_id: customerId,
      service_id: "",
      invoice_no: `INV-${Date.now()}`,
      service_name: "",
      amount: 0,
      discount: 0,
      gst: 18,
      total: 0,
      payment_mode: "Cash",
      payment_status: "Pending",
      remarks: "",
    });

  function calculateTotal(
    amount: number,
    discount: number,
    gst: number
  ) {
    const subtotal = amount - discount;
    return subtotal + (subtotal * gst) / 100;
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const ok = await addBill({
      ...form,
      total: calculateTotal(
        form.amount,
        form.discount,
        form.gst
      ),
    });

    if (!ok) return;

    alert("Bill Saved Successfully");

    setForm({
      customer_id: customerId,
      service_id: "",
      invoice_no: `INV-${Date.now()}`,
        service_name: "",
      amount: 0,
      discount: 0,
      gst: 18,
      total: 0,
      payment_mode: "Cash",
      payment_status: "Pending",
      remarks: "",
    });
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        marginTop: 25,
        borderRadius: 12,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2>💳 Create Bill</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          placeholder="Invoice Number"
          value={form.invoice_no}
          onChange={(e) =>
            setForm({
              ...form,
              invoice_no: e.target.value,
            })
          }
        />

        <input
          type="number"
          style={inputStyle}
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({
              ...form,
              amount: Number(e.target.value),
            })
          }
        />

        <input
          type="number"
          style={inputStyle}
          placeholder="Discount"
          value={form.discount}
          onChange={(e) =>
            setForm({
              ...form,
              discount: Number(e.target.value),
            })
          }
        />

        <input
          type="number"
          style={inputStyle}
          placeholder="GST %"
          value={form.gst}
          onChange={(e) =>
            setForm({
              ...form,
              gst: Number(e.target.value),
            })
          }
        />

        <select
          style={inputStyle}
          value={form.payment_mode}
          onChange={(e) =>
            setForm({
              ...form,
              payment_mode: e.target.value as Billing["payment_mode"],
            })
          }
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
          <option>Bank Transfer</option>
        </select>

        <select
          style={inputStyle}
          value={form.payment_status}
          onChange={(e) =>
            setForm({
              ...form,
              payment_status: e.target.value as Billing["payment_status"],
            })
          }
        >
          <option>Pending</option>
          <option>Paid</option>
          <option>Cancelled</option>
        </select>

        <textarea
          style={{
            ...inputStyle,
            height: 100,
          }}
          placeholder="Remarks"
          value={form.remarks}
          onChange={(e) =>
            setForm({
              ...form,
              remarks: e.target.value,
            })
          }
        />

        <div
          style={{
            marginBottom: 20,
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Total :
          ₹
          {calculateTotal(
            form.amount,
            form.discount,
            form.gst
          ).toFixed(2)}
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            border: "none",
            borderRadius: 8,
            background: "#2563eb",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          {loading
            ? "Saving..."
            : "Save Bill"}
        </button>
      </form>
    </div>
  );
}