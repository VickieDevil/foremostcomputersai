"use client";

import { useEffect, useState } from "react";

import { ReportService } from "../services/report.service";

import { ReportStats } from "../types/report";

const defaultReports: ReportStats = {
  dailyCollection: [],

  monthlyRevenue: [],

  customerReport: [],

  billingReport: [],
};

export function useReports() {
  const [reports, setReports] =
    useState<ReportStats>(
      defaultReports
    );

  const [loading, setLoading] =
    useState(true);

  async function loadReports() {
    try {
      setLoading(true);

      const data =
        await ReportService.getReports();

      setReports(data);
    } catch (error) {
      console.error(
        "Reports Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  return {
    reports,
    loading,
    refresh: loadReports,
  };
}