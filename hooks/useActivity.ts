"use client";

import { useEffect, useState } from "react";
import { ActivityService } from "../services/activity.service";
import { Activity } from "../types/activity";

export function useActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadActivities();
  }, []);

  async function loadActivities() {
    try {
      setLoading(true);

      const data = await ActivityService.getAll();

      setActivities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function addActivity(activity: Partial<Activity>) {
    await ActivityService.create(activity);

    await loadActivities();
  }

  async function removeActivity(id: string) {
    await ActivityService.delete(id);

    await loadActivities();
  }

  return {
    activities,
    loading,
    loadActivities,
    addActivity,
    removeActivity,
  };
}