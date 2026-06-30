"use client";

import { useState } from "react";

import { useService } from "../../../../../hooks/useService";

import {
  ServiceFormData,
  SERVICE_CATEGORIES,
  SERVICE_STATUS,
  SERVICE_PRIORITY,
} from "../../../../../types/service";

interface Props {
  customerId: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: 8,
  border: "1px solid #d1d5db",
  marginBottom: 10,
};

export default function CustomerServices({
  customerId,
}: Props) {
  const {
    services,
    loading,
    addService,
    deleteService,
    stats,
  } = useService(customerId);

  const [form, setForm] =
  useState<ServiceFormData>({
    customer_id: customerId,

    service_name: "",

    category: SERVICE_CATEGORIES[0],

    description: "",

    status: "Pending",

    priority: "Normal",

    amount: 0,

    paid_amount: 0,

    due_amount: 0,

    remarks: "",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const ok = await addService(form);

    if (!ok) return;

    setForm({
  customer_id: customerId,
  service_name: "",
  category: SERVICE_CATEGORIES[0],
  description: "",
  status: "Pending",
  priority: "Normal",
  amount: 0,
  paid_amount: 0,
  due_amount: 0,
  remarks: "",
});
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 25,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2>🛠 Customer Services</h2>

      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 15,
          marginBottom: 25,
        }}
      >
        <Stat
          title="Total"
          value={stats.total}
        />

        <Stat
          title="Completed"
          value={stats.completed}
        />

        <Stat
          title="Pending"
          value={stats.pending}
        />

        <Stat
          title="Revenue"
          value={`₹ ${stats.revenue}`}
        />
      </div>

      {/* Form */}

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          placeholder="Service Name"
value={form.service_name}

onChange={(e)=>
setForm({
...form,
service_name:e.target.value,
})
}
        />

        <select
          style={inputStyle}
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          {SERVICE_CATEGORIES.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          style={inputStyle}
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target
                .value as ServiceFormData["status"],
            })
          }
        >
          {SERVICE_STATUS.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <select
          style={inputStyle}
          value={form.priority}
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target
                .value as ServiceFormData["priority"],
            })
          }
        >
          {SERVICE_PRIORITY.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>

        <input
          type="number"
          style={inputStyle}
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => {
            const amount = Number(
              e.target.value
            );

            setForm({
              ...form,
              amount,
              due_amount:
                amount - form.paid_amount,
            });
          }}
        />

        <input
          type="number"
          style={inputStyle}
          placeholder="Paid Amount"
          value={form.paid_amount}
          onChange={(e) => {
            const paid = Number(
              e.target.value
            );

            setForm({
              ...form,
              paid_amount: paid,
              due_amount:
                form.amount - paid,
            });
          }}
        />

        <textarea
          style={{
            ...inputStyle,
            minHeight: 90,
          }}
          placeholder="Remarks"

value={form.remarks ?? ""}

onChange={(e)=>
setForm({
...form,
remarks:e.target.value,
})
}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {loading
            ? "Saving..."
            : "Add Service"}
        </button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      {/* Table */}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "#fff",
            }}
          >
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Paid</th>
            <th>Due</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.service_name}</td>

              <td>{service.category}</td>

              <td>{service.status}</td>

              <td>₹ {service.amount}</td>

              <td>
                ₹ {service.paid_amount}
              </td>

              <td>
                ₹ {service.due_amount}
              </td>

              <td>
                <button
                  onClick={() =>
                    deleteService(
                      service.id
                    )
                  }
                  style={{
                    background:
                      "#dc2626",
                    color: "#fff",
                    border: "none",
                    padding:
                      "6px 12px",
                    borderRadius: 6,
                    cursor: "pointer",
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

function Stat({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div
      style={{
        background: "#f8fafc",
        borderRadius: 10,
        padding: 16,
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: 14,
        }}
      >
        {title}
      </div>

      <h3 style={{ margin: 0 }}>
        {value}
      </h3>
    </div>
  );
}