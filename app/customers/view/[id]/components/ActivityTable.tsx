"use client";

import { Activity } from "../../../../../types/activity";

interface Props {
  activities: Activity[];
  loading: boolean;
  removeActivity: (id: string) => Promise<boolean>;
}

export default function ActivityTable({
  activities,
  loading,
  removeActivity,
}: Props) {
  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          marginTop: 25,
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        }}
      >
        Loading Activities...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 25,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>
        📋 Activity History
      </h2>

      {activities.length === 0 ? (
        <div
          style={{
            padding: 30,
            textAlign: "center",
            color: "#64748b",
            background: "#f8fafc",
            borderRadius: 10,
          }}
        >
          No Activities Found
        </div>
      ) : (
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
              <th style={{ padding: 12 }}>Type</th>
              <th style={{ padding: 12 }}>Title</th>
              <th style={{ padding: 12 }}>Description</th>
              <th style={{ padding: 12 }}>Date</th>
              <th style={{ padding: 12 }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((item) => (
              <tr
                key={item.id}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={{ padding: 12 }}>
                  {item.activity_type}
                </td>

                <td style={{ padding: 12 }}>
                  {item.title}
                </td>

                <td style={{ padding: 12 }}>
                  {item.description}
                </td>

                <td style={{ padding: 12 }}>
                  {item.created_at
                    ? new Date(
                        item.created_at
                      ).toLocaleString()
                    : "-"}
                </td>

                <td style={{ padding: 12 }}>
                  <button
                    onClick={async () => {
                      if (
                        confirm(
                          "Delete this activity?"
                        )
                      ) {
                        await removeActivity(
                          item.id!
                        );
                      }
                    }}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "8px 14px",
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
      )}
    </div>
  );
}