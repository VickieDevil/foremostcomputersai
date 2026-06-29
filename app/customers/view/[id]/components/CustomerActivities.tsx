"use client";

import { useActivity } from "../../../../../hooks/useActivity";

import ActivityForm from "./ActivityForm";
import ActivityTable from "./ActivityTable";

interface Props {
  customerId: string;
}

export default function CustomerActivities({
  customerId,
}: Props) {
  const {
    activities,
    loading,
    removeActivity,
  } = useActivity(customerId);

  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <ActivityForm customerId={customerId} />

      <ActivityTable
        activities={activities}
        loading={loading}
        removeActivity={removeActivity}
      />
    </div>
  );
}