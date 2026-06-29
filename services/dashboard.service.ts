import { supabase } from "../lib/supabase";
import {
  DashboardStats,
  MonthlyRevenue,
  TopService,
} from "../types/dashboard";

export class DashboardService {
  static async getDashboardStats(): Promise<DashboardStats> {
    const [
      customers,
      documents,
      services,
      bills,
      activities,
    ] = await Promise.all([
      supabase.from("customers").select("*"),
      supabase.from("documents").select("*"),
      supabase.from("customer_services").select("*"),
      supabase.from("billing").select("*"),
      supabase
        .from("activities")
        .select("*")
        .order("created_at", {
          ascending: false,
        })
        .limit(5),
    ]);

    const customerData = customers.data || [];
    const documentData = documents.data || [];
    const serviceData = services.data || [];
    const billData = bills.data || [];
    const activityData = activities.data || [];

    // ==========================
    // Recent Customers
    // ==========================

    const recentCustomers = [...customerData]
      .sort(
        (a: any, b: any) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      )
      .slice(0, 5)
      .map((customer: any) => ({
        id: customer.id,
        name: customer.name,
        mobile: customer.mobile,
      }));

    // ==========================
    // Monthly Revenue
    // ==========================

    const monthlyRevenue: MonthlyRevenue[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ].map((month) => ({
      month,
      revenue: 0,
    }));

    billData.forEach((bill: any) => {
      if (!bill.created_at) return;

      const monthIndex = new Date(
        bill.created_at
      ).getMonth();

      monthlyRevenue[monthIndex].revenue +=
        Number(bill.total_amount || 0);
    });

    // ==========================
    // Top Services
    // ==========================

    const serviceCounter: Record<string, number> =
      {};

    serviceData.forEach((service: any) => {
      const serviceName =
        service.service_name ||
        service.name ||
        "Unknown";

      serviceCounter[serviceName] =
        (serviceCounter[serviceName] || 0) + 1;
    });

    const topServices: TopService[] =
      Object.entries(serviceCounter)
        .map(([name, count]) => ({
          name,
          count,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    // ==========================
    // Pending Payment List
    // ==========================

    const pendingPaymentList = billData
      .filter(
        (bill: any) =>
          bill.payment_status !== "Paid"
      )
      .slice(0, 5)
      .map((bill: any) => ({
        customer:
          bill.customer_name ||
          bill.service_name ||
          "Customer",

        amount: Number(
          bill.total_amount || 0
        ),
      }));

    // ==========================
    // Return Dashboard
    // ==========================

    return {
      totalCustomers: customerData.length,

      activeCustomers: customerData.filter(
        (c: any) =>
          c.status === "Active"
      ).length,

      totalDocuments:
        documentData.length,

      totalServices:
        serviceData.length,

      pendingServices:
        serviceData.filter(
          (s: any) =>
            s.status === "Pending"
        ).length,

      completedServices:
        serviceData.filter(
          (s: any) =>
            s.status === "Completed"
        ).length,

      totalBills: billData.length,

      pendingPayments:
        billData.filter(
          (b: any) =>
            b.payment_status !==
            "Paid"
        ).length,

      totalRevenue: billData.reduce(
        (
          sum: number,
          bill: any
        ) =>
          sum +
          Number(
            bill.total_amount || 0
          ),
        0
      ),

      todayRevenue: billData
        .filter((bill: any) => {
          if (!bill.created_at)
            return false;

          return (
            new Date(
              bill.created_at
            ).toDateString() ===
            new Date().toDateString()
          );
        })
        .reduce(
          (
            sum: number,
            bill: any
          ) =>
            sum +
            Number(
              bill.total_amount || 0
            ),
          0
        ),

      recentCustomers,

      monthlyRevenue,

      topServices,

      pendingPaymentList,

      activities: activityData.map(
        (activity: any) => ({
          id: activity.id,

          title:
            activity.title ||
            activity.activity_name ||
            "Activity",

          activity_type:
            activity.activity_type ||
            activity.type ||
            "General",

          created_at:
            activity.created_at,
        })
      ),
    };
  }
}