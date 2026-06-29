"use client";

import { RecentActivity } from "@/types/dashboard";

interface Props {
  activities: RecentActivity[];
}

export default function RecentActivities({
  activities,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5">

      <h2 className="text-xl font-bold mb-5">
        Recent Activities
      </h2>

      {activities.length === 0 ? (
        <p className="text-gray-500">
          No recent activity found.
        </p>
      ) : (
        <div className="space-y-4">

          {activities.map((item) => (
            <div
              key={item.id}
              className="border-b pb-3"
            >
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.activity_type}
              </p>

              <p className="text-xs text-gray-400">
                {new Date(
                  item.created_at
                ).toLocaleString()}
              </p>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}