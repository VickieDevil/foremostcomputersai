"use client";

interface Activity {
  id?: string;
  activity_type: string;
  title: string;
  description?: string;
  created_at?: string;
}

interface CustomerTimelineProps {
  activities?: Activity[];
}

export default function CustomerTimeline({
  activities = [],
}: CustomerTimelineProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        marginTop: 25,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        📝 Activity Timeline
      </h2>

      {activities.length === 0 ? (
        <div
          style={{
            padding: 25,
            background: "#f8fafc",
            borderRadius: 10,
            textAlign: "center",
            color: "#64748b",
          }}
        >
          No Activities Available
        </div>
      ) : (
        activities.map((activity) => (
          <div
            key={activity.id}
            style={{
              display: "flex",
              gap: 15,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#2563eb",
                marginTop: 6,
              }}
            />

            <div>
              <h4
                style={{
                  margin: 0,
                }}
              >
                {activity.title}
              </h4>

              <p
                style={{
                  margin: "6px 0",
                  color: "#64748b",
                }}
              >
                {activity.description}
              </p>

              <small
                style={{
                  color: "#94a3b8",
                }}
              >
                {activity.created_at
                  ? new Date(
                      activity.created_at
                    ).toLocaleString()
                  : ""}
              </small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}