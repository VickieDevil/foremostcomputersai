"use client";

import { InvoiceItem } from "../../../types/invoice";

interface Props {
  items: InvoiceItem[];
  updateItem: (
    index: number,
    field: keyof InvoiceItem,
    value: any
  ) => void;

  addRow: () => void;

  removeRow: (index: number) => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px",
  border: "1px solid #d1d5db",
  borderRadius: 6,
};

export default function InvoiceItemsTable({
  items,
  updateItem,
  addRow,
  removeRow,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <h3 style={{ margin: 0 }}>
          Invoice Items
        </h3>

        <button
          type="button"
          onClick={addRow}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "8px 14px",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          + Add Item
        </button>
      </div>

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
            <th style={{ padding: 10 }}>
              Service
            </th>

            <th>Qty</th>

            <th>Rate</th>

            <th>GST %</th>

            <th>Discount</th>

            <th>Total</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(
            (item, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: 8,
                  }}
                >
                  <input
                    style={
                      inputStyle
                    }
                    value={
                      item.service_name
                    }
                    onChange={(
                      e
                    ) =>
                      updateItem(
                        index,
                        "service_name",
                        e.target.value
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    style={
                      inputStyle
                    }
                    value={
                      item.quantity
                    }
                    onChange={(
                      e
                    ) =>
                      updateItem(
                        index,
                        "quantity",
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    style={
                      inputStyle
                    }
                    value={
                      item.price
                    }
                    onChange={(
                      e
                    ) =>
                      updateItem(
                        index,
                        "price",
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    style={
                      inputStyle
                    }
                    value={item.gst}
                    onChange={(
                      e
                    ) =>
                      updateItem(
                        index,
                        "gst",
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                  />
                </td>

                <td>
                  <input
                    type="number"
                    style={
                      inputStyle
                    }
                    value={
                      item.discount
                    }
                    onChange={(
                      e
                    ) =>
                      updateItem(
                        index,
                        "discount",
                        Number(
                          e.target
                            .value
                        )
                      )
                    }
                  />
                </td>

                <td
                  style={{
                    textAlign:
                      "center",
                    fontWeight: 600,
                  }}
                >
                  ₹{" "}
                  {item.total.toFixed(
                    2
                  )}
                </td>

                <td>
                  <button
                    type="button"
                    onClick={() =>
                      removeRow(
                        index
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
                        "8px 12px",
                      borderRadius: 6,
                      cursor:
                        "pointer",
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