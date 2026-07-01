"use client";

import { InvoiceStatus } from "../../../types/invoice";

interface Props {
  search: string;
  status: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: InvoiceStatus | "") => void;
}

const statuses: (InvoiceStatus | "")[] = [
  "",
  "Draft",
  "Pending",
  "Paid",
  "Partially Paid",
  "Cancelled",
];

export default function InvoiceFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        display: "flex",
        gap: 15,
        flexWrap: "wrap",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <input
        type="text"
        placeholder="Search Invoice..."
        value={search}
        onChange={(e) =>
          onSearchChange(e.target.value)
        }
        style={{
          flex: 1,
          minWidth: 250,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      />

      <select
        value={status}
        onChange={(e) =>
          onStatusChange(
            e.target.value as InvoiceStatus | ""
          )
        }
        style={{
          width: 220,
          padding: 10,
          borderRadius: 8,
          border: "1px solid #d1d5db",
        }}
      >
        <option value="">
          All Status
        </option>

        {statuses
          .filter(Boolean)
          .map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}