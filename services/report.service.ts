import { supabase } from "../lib/supabase";

import {
  ReportStats,
  DailyCollection,
  MonthlyReport,
  CustomerReport,
  BillingReport,
} from "../types/report";

export class ReportService {
  static async getReports(): Promise<ReportStats> {
    const [
      customers,
      bills,
      services,
    ] = await Promise.all([
      supabase.from("customers").select("*"),
      supabase.from("billing").select("*"),
      supabase
        .from("customer_services")
        .select("*"),
    ]);

    const customerData =
      customers.data || [];

    const billData =
      bills.data || [];

    const serviceData =
      services.data || [];

    // ==========================
    // Daily Collection
    // ==========================

    const dailyMap: Record<
      string,
      DailyCollection
    > = {};

    billData.forEach((bill: any) => {
      const date = bill.created_at
        ? new Date(
            bill.created_at
          ).toLocaleDateString()
        : "Unknown";

      if (!dailyMap[date]) {
        dailyMap[date] = {
          date,
          totalBills: 0,
          totalRevenue: 0,
          totalCustomers: 0,
        };
      }

      dailyMap[date].totalBills++;

      dailyMap[date].totalRevenue +=
        Number(
          bill.total_amount || 0
        );
    });

    const dailyCollection =
      Object.values(dailyMap);

    // ==========================
    // Monthly Revenue
    // ==========================

    const monthNames = [
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
    ];

    const monthlyRevenue: MonthlyReport[] =
      monthNames.map((month) => ({
        month,
        revenue: 0,
        bills: 0,
      }));

    billData.forEach((bill: any) => {
      if (!bill.created_at) return;

      const month =
        new Date(
          bill.created_at
        ).getMonth();

      monthlyRevenue[
        month
      ].revenue += Number(
        bill.total_amount || 0
      );

      monthlyRevenue[
        month
      ].bills++;
    });

    // ==========================
    // Customer Report
    // ==========================

    const customerReport: CustomerReport[] =
      customerData.map(
        (customer: any) => {
          const customerBills =
            billData.filter(
              (bill: any) =>
                bill.customer_id ===
                customer.id
            );

          const customerServices =
            serviceData.filter(
              (service: any) =>
                service.customer_id ===
                customer.id
            );

          return {
            id: customer.id,

            name:
              customer.name,

            mobile:
              customer.mobile,

            totalServices:
              customerServices.length,

            totalBills:
              customerBills.length,

            totalSpent:
              customerBills.reduce(
                (
                  sum: number,
                  bill: any
                ) =>
                  sum +
                  Number(
                    bill.total_amount ||
                      0
                  ),
                0
              ),
          };
        }
      );

    // ==========================
    // Billing Report
    // ==========================

    const billingReport: BillingReport[] =
      billData.map((bill: any) => ({
        id: bill.id,

        invoiceNo:
          bill.invoice_no ??
          "",

        customerName:
          bill.customer_name ??
          "Customer",

        amount: Number(
          bill.total_amount || 0
        ),

        paymentStatus:
          bill.payment_status ??
          "Pending",

        createdAt:
          bill.created_at,
      }));

    // ==========================

    return {
      dailyCollection,

      monthlyRevenue,

      customerReport,

      billingReport,
    };
  }
}