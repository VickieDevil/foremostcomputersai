"use client";

import { useActivity } from "../../hooks/useActivity";

export default function ActivityPage() {
  const { activities, loading } = useActivity();

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>Activity Timeline</h1>

      {loading && <p>Loading...</p>}

      {!loading &&
        activities.map((item) => (
          <div
            key={item.id}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              marginBottom: 15,
            }}
          >
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <small>{item.activity_type}</small>
          </div>
        ))}
    </div>
  );
}