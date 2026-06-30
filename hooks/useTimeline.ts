"use client";

import { useEffect, useState } from "react";
import { TimelineService } from "../services/timeline.service";
import { TimelineItem } from "../types/timeline";

export function useTimeline(
  customerId?: string
) {
  const [timeline, setTimeline] =
    useState<TimelineItem[]>([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    if (customerId) {
      loadTimeline();
    }
  }, [customerId]);

  async function loadTimeline() {
    if (!customerId) return;

    try {
      setLoading(true);

      const data =
        await TimelineService.getCustomerTimeline(
          customerId
        );

      setTimeline(data || []);
    } catch (error) {
      console.error(
        "Timeline Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  async function addTimeline(
    item: Partial<TimelineItem>
  ): Promise<boolean> {
    try {
      await TimelineService.createTimeline(
        item
      );

      await loadTimeline();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  async function deleteTimeline(
    id: string
  ): Promise<boolean> {
    try {
      await TimelineService.deleteTimeline(
        id
      );

      await loadTimeline();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  return {
    timeline,
    loading,
    refresh: loadTimeline,
    addTimeline,
    deleteTimeline,
  };
}