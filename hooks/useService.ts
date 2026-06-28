"use client";

import { useEffect, useState } from "react";
import { ServiceService } from "../services/service.service";
import {
  CustomerService,
  CustomerServiceForm,
} from "../types/service";

export function useService(customerId?: string) {
  const [services, setServices] = useState<CustomerService[]>([]);
  const [loading, setLoading] = useState(false);

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    revenue: 0,
  });

  async function loadServices() {
    try {
      setLoading(true);

      const data = customerId
        ? await ServiceService.getCustomerServices(customerId)
        : await ServiceService.getServices();

      setServices(data);
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
    service: CustomerServiceForm
  ) {
    try {
      setLoading(true);

      await ServiceService.createService(service);

      await loadServices();
      await loadStats();

      alert("Service Added Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Add Service");

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function updateService(
    id: string,
    service: CustomerServiceForm
  ) {
    try {
      setLoading(true);

      await ServiceService.updateService(
        id,
        service
      );

      await loadServices();
      await loadStats();

      alert("Service Updated Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Update Service");

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteService(id: string) {
    try {
      setLoading(true);

      await ServiceService.deleteService(id);

      await loadServices();
      await loadStats();

      alert("Service Deleted Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Delete Service");

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
    addService,
    updateService,
    deleteService,
  };
}