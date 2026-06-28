"use client";

import { useState } from "react";
import { useService } from "../../../../../hooks/useService";
import {
  CustomerServiceForm,
  SERVICE_CATEGORIES,
  SERVICE_STATUS,
} from "../../../../../types/service";

interface Props {
  customerId: string;
}

const inputStyle = {
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
    useState<CustomerServiceForm>({
      customer_id: customerId,
      service_name: "",
      category: "",
      status: "Pending",
      amount: 0,
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
      category: "",
      status: "Pending",
      amount: 0,
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
      <h2>🛠 CSC Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 15,
          margin: "20px 0",
        }}
      >
        <div>
          <strong>Total</strong>
          <h3>{stats.total}</h3>
        </div>

        <div>
          <strong>Completed</strong>
          <h3>{stats.completed}</h3>
        </div>

        <div>
          <strong>Pending</strong>
          <h3>{stats.pending}</h3>
        </div>

        <div>
          <strong>Revenue</strong>
          <h3>₹ {stats.revenue}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
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

        <select
          style={inputStyle}
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
        >
          <option value="">
            Select Category
          </option>

          {SERVICE_CATEGORIES.map(
            (cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
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
              status:
                e.target.value,
            })
          }
        >
          {SERVICE_STATUS.map(
            (status) => (
              <option
                key={status}
              >
                {status}
              </option>
            )
          )}
        </select>

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
          style={inputStyle}
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
          }}
        >
          Add Service
        </button>
      </form>

      <hr
        style={{
          margin: "25px 0",
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
          <tr
            style={{
              background:
                "#2563eb",
              color: "#fff",
            }}
          >
            <th>Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {services.map(
            (service) => (
              <tr
                key={service.id}
              >
                <td>
                  {
                    service.service_name
                  }
                </td>

                <td>
                  {
                    service.category
                  }
                </td>

                <td>
                  {service.status}
                </td>

                <td>
                  ₹
                  {
                    service.amount
                  }
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
                      color:
                        "#fff",
                      border:
                        "none",
                      padding:
                        "6px 12px",
                      borderRadius: 6,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}