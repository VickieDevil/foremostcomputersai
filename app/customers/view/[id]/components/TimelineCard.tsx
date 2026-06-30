"use client";

import { Timeline } from "../../../../../types/timeline";

interface Props {
  timeline: Timeline[];
  loading?: boolean;
}

function getColor(status: Timeline["status"]) {
  switch (status) {
    case "Success":
      return "#16a34a";

    case "Pending":
      return "#f59e0b";

    case "Warning":
      return "#ea580c";

    case "Failed":
      return "#dc2626";

    default:
      return "#2563eb";
  }
}

export default function TimelineCard({
  timeline,
  loading = false,
}: Props) {
  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 20,
          marginTop: 20,
        }}
      >
        Loading Timeline...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: 25,
        }}
      >
        📜 Customer Timeline
      </h2>

      {timeline.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#64748b",
            padding: 30,
          }}
        >
          No Timeline Available
        </div>
      ) : (
        timeline.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: 15,
              marginBottom: 20,
              borderLeft: `4px solid ${getColor(
                item.status
              )}`,
              paddingLeft: 15,
            }}
          >
            <div
              style={{
                fontSize: 24,
              }}
            >
              {item.icon ?? "📌"}
            </div>

            <div
              style={{
                flex: 1,
              }}
            >
              <h4
                style={{
                  margin: 0,
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  marginTop: 6,
                  color: "#64748b",
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    background: getColor(item.status),
                    color: "#fff",
                    padding: "3px 10px",
                    borderRadius: 20,
                    fontSize: 12,
                  }}
                >
                  {item.status}
                </span>

                <small
                  style={{
                    color: "#94a3b8",
                  }}
                >
                  {item.created_at
                    ? new Date(
                        item.created_at
                      ).toLocaleString()
                    : ""}
                </small>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}