"use client";

import { useCallback, useEffect, useState } from "react";

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

  const [stats, setStats] =
    useState(defaultStats);

  const [loading, setLoading] =
    useState(false);

  const loadServices =
    useCallback(async () => {
      try {
        setLoading(true);

        const data = customerId
          ? await ServiceService.getCustomerServices(
              customerId
            )
          : await ServiceService.getServices();

        setServices(data ?? []);
      } catch (error) {
        console.error(error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    }, [customerId]);

  const loadStats =
    useCallback(async () => {
      try {
        const result =
          await ServiceService.getServiceStats();

        setStats(result ?? defaultStats);
      } catch (error) {
        console.error(error);

        setStats(defaultStats);
      }
    }, []);

  const addService =
    useCallback(
      async (
        service: ServiceFormData
      ): Promise<boolean> => {
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
      },
      [loadServices, loadStats]
    );

  const updateService =
    useCallback(
      async (
        id: string,
        service: Partial<ServiceFormData>
      ): Promise<boolean> => {
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
      },
      [loadServices, loadStats]
    );

  const deleteService =
    useCallback(
      async (
        id: string
      ): Promise<boolean> => {
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
      },
      [loadServices, loadStats]
    );

  useEffect(() => {
    loadServices();
    loadStats();
  }, [loadServices, loadStats]);

  return {
    services,
    stats,
    loading,

    loadServices,
    loadStats,

    addService,
    updateService,
    deleteService,
  };
}