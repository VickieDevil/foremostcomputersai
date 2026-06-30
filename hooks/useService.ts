"use client";

import { useEffect, useState } from "react";
import { ServiceService } from "../services/service.service";
import {
  Service,
  ServiceFormData,
} from "../types/service";

interface ServiceStats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  cancelled: number;
  revenue: number;
  received: number;
  due: number;
}

const defaultStats: ServiceStats = {
  total: 0,
  completed: 0,
  pending: 0,
  inProgress: 0,
  cancelled: 0,
  revenue: 0,
  received: 0,
  due: 0,
};

export function useService(
  customerId?: string
) {
  const [services, setServices] =
    useState<Service[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [stats, setStats] =
    useState<ServiceStats>(defaultStats);

  async function loadServices() {
    try {
      setLoading(true);

      const data = customerId
        ? await ServiceService.getCustomerServices(
            customerId
          )
        : await ServiceService.getServices();

      setServices(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadStats() {
    try {
      const result =
        await ServiceService.getServiceStats();

      setStats(result);
    } catch (error) {
      console.error(error);
    }
  }

  async function addService(
    service: ServiceFormData
  ): Promise<boolean> {
    try {
      setLoading(true);

      await ServiceService.createService(
        service
      );

      await Promise.all([
        loadServices(),
        loadStats(),
      ]);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function updateService(
    id: string,
    service: Partial<ServiceFormData>
  ): Promise<boolean> {
    try {
      setLoading(true);

      await ServiceService.updateService(
        id,
        service
      );

      await Promise.all([
        loadServices(),
        loadStats(),
      ]);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteService(
    id: string
  ): Promise<boolean> {
    try {
      setLoading(true);

      await ServiceService.deleteService(
        id
      );

      await Promise.all([
        loadServices(),
        loadStats(),
      ]);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
    loadStats();
  }, [customerId]);

  return {
    services,
    loading,
    stats,
    loadServices,
    loadStats,
    addService,
    updateService,
    deleteService,
  };
}