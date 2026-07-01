"use client";

import Link from "next/link";

interface ActivityCardProps {
  activity: any;

  onDelete?: (id: string) => void;
}

export default function ActivityCard({
  activity,
  onDelete,
}: ActivityCardProps) {
  function getStatusColor(status: string) {
    switch (status) {
      case "Completed":
        return "#16a34a";

      case "Pending":
        return "#f59e0b";

      case "Cancelled":
        return "#dc2626";

      default:
        return "#2563eb";
    }
  }

  function getPriorityColor(priority: string) {
    switch (priority) {
      case "High":
        return "#dc2626";

      case "Medium":
        return "#f59e0b";

      case "Low":
        return "#16a34a";

      default:
        return "#64748b";
    }
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
        marginBottom: 18,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 15,
        }}
      >
        <div>
          <h3
            style={{
              margin: 0,
            }}
          >
            {activity.title}
          </h3>

          <div
            style={{
              color: "#64748b",
              marginTop: 6,
              fontSize: 14,
            }}
          >
            {activity.customers?.full_name ??
              activity.customer_name ??
              "Unknown Customer"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <span
            style={{
              background: getPriorityColor(
                activity.priority
              ),
              color: "#fff",
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {activity.priority}
          </span>

          <span
            style={{
              background: getStatusColor(
                activity.status
              ),
              color: "#fff",
              padding: "4px 10px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {activity.status}
          </span>
        </div>
      </div>

      <div
        style={{
          color: "#475569",
          marginBottom: 18,
          lineHeight: 1.6,
        }}
      >
        {activity.description}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: 15,
          marginBottom: 20,
        }}
      >
        <Info
          title="Activity Type"
          value={activity.activity_type}
        />

        <Info
          title="Follow-up"
          value={
            activity.followup_date
              ? new Date(
                  activity.followup_date
                ).toLocaleDateString()
              : "-"
          }
        />

        <Info
          title="Assigned To"
          value={
            activity.assigned_to ??
            "-"
          }
        />

        <Info
          title="Created"
          value={
            activity.created_at
              ? new Date(
                  activity.created_at
                ).toLocaleDateString()
              : "-"
          }
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <Link
          href={`/activities/view/${activity.id}`}
        >
          <button style={viewBtn}>
            View
          </button>
        </Link>

        <Link
          href={`/activities/edit/${activity.id}`}
        >
          <button style={editBtn}>
            Edit
          </button>
        </Link>

        <button
          style={deleteBtn}
          onClick={() =>
            onDelete?.(activity.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;

  value: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          color: "#64748b",
          fontSize: 13,
          marginBottom: 4,
        }}
      >
        {title}
      </div>

      <strong>{value}</strong>
    </div>
  );
}

const viewBtn: React.CSSProperties = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};

const editBtn: React.CSSProperties = {
  background: "#f59e0b",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  background: "#dc2626",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
};