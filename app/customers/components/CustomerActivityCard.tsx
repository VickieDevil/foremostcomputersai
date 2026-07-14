"use client";

interface Props {
  activities?: any[];
}

export default function CustomerActivityCard({
  activities = [],
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>Recent Activities</h3>

      {activities.length === 0 ? (
        <p>No Activity</p>
      ) : (
        activities.map((item, i) => (
          <div key={i}>
            {JSON.stringify(item)}
          </div>
        ))
      )}
    </div>
  );
}