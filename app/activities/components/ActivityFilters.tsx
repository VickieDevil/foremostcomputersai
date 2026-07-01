"use client";

interface Props {
  search: string;
  setSearch: (v: string) => void;

  filter: string;
  setFilter: (v: string) => void;
}

export default function ActivityFilters({
  search,
  setSearch,
  filter,
  setFilter,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        marginBottom: 25,
        flexWrap: "wrap",
      }}
    >
      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search Activity..."
        style={{
          flex: 1,
          minWidth: 250,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #ddd",
        }}
      />

      <select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        style={{
          padding: 12,
          borderRadius: 8,
        }}
      >
        <option>All</option>
        <option>Customer</option>
        <option>Invoice</option>
        <option>Document</option>
        <option>WhatsApp</option>
        <option>Payment</option>
      </select>
    </div>
  );
}