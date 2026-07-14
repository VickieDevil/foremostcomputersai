"use client";

import { useEffect, useMemo, useState } from "react";

import {
  useBilling,
} from "../../../../../hooks/useBilling";

import {
  BillingFormData,
  PAYMENT_MODES,
  PAYMENT_STATUS,
} from "../../../../../types/billing";

interface Props {
  customerId: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d1d5db",
  borderRadius: 8,
  marginBottom: 12,
};

const tableHead: React.CSSProperties = {
  background: "#2563eb",
  color: "#fff",
};

export default function CustomerBilling({
  customerId,
}: Props) {
  const {
    bills,
    loading,
    addBill,
    deleteBill,
    loadBills,
  } = useBilling(customerId);

  const [form, setForm] =
    useState<BillingFormData>({
      customer_id: customerId,
      service_id: "",
      invoice_no: "",
      service_name: "",
      amount: 0,
      discount: 0,
      gst: 18,
      total: 0,
      payment_status: "Pending",
      payment_mode: "Cash",
      remarks: "",
    });

  useEffect(() => {
    loadBills();
  }, []);

  useEffect(() => {
    const subtotal =
      Number(form.amount || 0) -
      Number(form.discount || 0);

    const gstAmount =
      subtotal *
      (Number(form.gst || 0) / 100);

    const total =
      subtotal + gstAmount;

    setForm((prev) => ({
      ...prev,
      total: Number(
        total.toFixed(2)
      ),
    }));
  }, [
    form.amount,
    form.discount,
    form.gst,
  ]);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const ok =
      await addBill(form);

    if (!ok) return;

    setForm({
      customer_id: customerId,
      service_id: "",
      invoice_no: "",
      service_name: "",
      amount: 0,
      discount: 0,
      gst: 18,
      total: 0,
      payment_status: "Pending",
      payment_mode: "Cash",
      remarks: "",
    });
  }

  const summary = useMemo(() => {
    return bills.reduce(
      (acc, item) => {
        acc.total +=
          Number(item.total || 0);

        if (
          item.payment_status ===
          "Paid"
        ) {
          acc.received +=
            Number(item.total || 0);
        }

        if (
          item.payment_status ===
          "Pending"
        ) {
          acc.pending +=
            Number(item.total || 0);
        }

        if (
          item.payment_status ===
          "Partial"
        ) {
          acc.partial +=
            Number(item.total || 0);
        }

        return acc;
      },
      {
        total: 0,
        received: 0,
        pending: 0,
        partial: 0,
      }
    );
  }, [bills]);

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 30,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        💰 Customer Billing
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: 15,
          marginBottom: 25,
        }}
      >
        <SummaryCard
          title="Invoices"
          value={bills.length}
        />

        <SummaryCard
          title="Revenue"
          value={`₹ ${summary.total.toFixed(
            2
          )}`}
        />

        <SummaryCard
          title="Received"
          value={`₹ ${summary.received.toFixed(
            2
          )}`}
        />

        <SummaryCard
          title="Pending"
          value={`₹ ${summary.pending.toFixed(
            2
          )}`}
        />
      </div>

      <form
        onSubmit={handleSubmit}
      >
        <input
          style={inputStyle}
          placeholder="Invoice Number"
          value={form.invoice_no}
          onChange={(e) =>
            setForm({
              ...form,
              invoice_no:
                e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Service Name"
          value={form.service_name}
          onChange={(e) =>
            setForm({
              ...form,
              service_name:
                e.target.value,
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
              amount: Number(
                e.target.value
              ),
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
              discount: Number(
                e.target.value
              ),
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
              gst: Number(
                e.target.value
              ),
            })
          }
        />

        <input
          readOnly
          style={{
            ...inputStyle,
            background:
              "#f3f4f6",
            fontWeight: 700,
          }}
          value={form.total}
        />

        <select
          style={inputStyle}
          value={
            form.payment_status
          }
          onChange={(e) =>
            setForm({
              ...form,
              payment_status:
                e.target
                  .value as BillingFormData["payment_status"],
            })
          }
        >
          {PAYMENT_STATUS.map(
            (item) => (
              <option
                key={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          style={inputStyle}
          value={
            form.payment_mode
          }
          onChange={(e) =>
            setForm({
              ...form,
              payment_mode:
                e.target
                  .value as BillingFormData["payment_mode"],
            })
          }
        >
          {PAYMENT_MODES.map(
            (item) => (
              <option
                key={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <textarea
          style={{
            ...inputStyle,
            minHeight: 90,
          }}
          placeholder="Remarks"
          value={form.remarks}
          onChange={(e) =>
            setForm({
              ...form,
              remarks:
                e.target.value,
            })
          }
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            background:
              "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {loading
            ? "Saving..."
            : "Create Invoice"}
        </button>
      </form>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse:
            "collapse",
        }}
      >
        <thead>
          <tr style={tableHead}>
            <th>Invoice</th>
            <th>Service</th>
            <th>Total</th>
            <th>Status</th>
            <th>Mode</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr
              key={bill.id}
            >
              <td>
                {
                  bill.invoice_no
                }
              </td>

              <td>
                {
                  bill.service_name
                }
              </td>

              <td>
                ₹ {bill.total}
              </td>

              <td>
                {
                  bill.payment_status
                }
              </td>

              <td>
                {
                  bill.payment_mode
                }
              </td>

              <td>
                <button
                  onClick={async () => {
                    if (
                      !confirm(
                        "Delete Invoice?"
                      )
                    )
                      return;

                    await deleteBill(
                      bill.id!
                    );
                  }}
                  style={{
                    background:
                      "#dc2626",
                    color:
                      "#fff",
                    border:
                      "none",
                    padding:
                      "6px 12px",
                    borderRadius: 6,
                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value:
    | string
    | number;
}) {
  return (
    <div
      style={{
        background:
          "#f8fafc",
        padding: 18,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          color: "#64748b",
        }}
      >
        {title}
      </div>

      <h2
        style={{
          margin: 0,
        }}
      >
        {value}
      </h2>
    </div>
  );
}