"use client";

import { useMemo, useState } from "react";

import { useActivity } from "../../hooks/useActivity";

import ActivityList from "./components/ActivityList";
import ActivityFilters from "./components/ActivityFilters";

export default function ActivityPage() {
  const {
    activities,
    loading,
  } = useActivity();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const filteredActivities =
    useMemo(() => {
      let list = [...activities];

      if (search.trim()) {
        const value =
          search.toLowerCase();

        list = list.filter(
          (item: any) =>
            item.title
              ?.toLowerCase()
              .includes(value) ||
            item.description
              ?.toLowerCase()
              .includes(value)
        );
      }

      if (filter !== "All") {
        list = list.filter(
          (item: any) =>
            item.activity_type ===
            filter
        );
      }

      return list;
    }, [
      activities,
      search,
      filter,
    ]);

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1
        style={{
          marginBottom: 25,
        }}
      >
        Activity Timeline
      </h1>

      <ActivityFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <ActivityList
        activities={
          filteredActivities
        }
        loading={loading}
      />
    </div>
  );
}