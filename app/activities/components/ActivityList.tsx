"use client";

import ActivityCard from "./ActivityCard";

interface Props {
  activities: any[];
  loading?: boolean;
}

export default function ActivityList({
  activities,
  loading = false,
}: Props) {
  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 40,
          textAlign: "center",
        }}
      >
        Loading Activities...
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: 40,
          textAlign: "center",
          color: "#64748b",
        }}
      >
        No Activities Found
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gap: 20,
      }}
    >
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </div>
  );
}