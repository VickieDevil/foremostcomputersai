"use client";

import { useEffect, useState } from "react";
import { DashboardService } from "../services/dashboard.service";
import { DashboardStats } from "../types/dashboard";

const defaultStats: DashboardStats = {
  totalCustomers: 0,

  activeCustomers: 0,

  totalDocuments: 0,

  totalServices: 0,

  pendingServices: 0,

  completedServices: 0,

  totalBills: 0,

  pendingPayments: 0,

  totalRevenue: 0,

  todayRevenue: 0,

  recentCustomers: [],

  monthlyRevenue: [],

  topServices: [],

  pendingPaymentList: [],

  activities: [],
};

export function useDashboard() {
  const [stats, setStats] =
    useState<DashboardStats>(defaultStats);

  const [loading, setLoading] =
    useState(true);

  async function loadDashboard() {
    try {
      setLoading(true);

      const data =
        await DashboardService.getDashboardStats();

      setStats(data);
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    stats,
    loading,

    refresh: loadDashboard,
  };
}