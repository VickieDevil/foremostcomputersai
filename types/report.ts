export interface DailyCollection {
  date: string;
  totalBills: number;
  totalRevenue: number;
  totalCustomers: number;
}

export interface MonthlyReport {
  month: string;
  revenue: number;
  bills: number;
}

export interface CustomerReport {
  id: string;
  name: string;
  mobile: string;
  totalServices: number;
  totalBills: number;
  totalSpent: number;
}

export interface BillingReport {
  id: string;
  invoiceNo: string;
  customerName: string;
  amount: number;
  paymentStatus: string;
  createdAt: string;
}

export interface ReportStats {
  dailyCollection: DailyCollection[];

  monthlyRevenue: MonthlyReport[];

  customerReport: CustomerReport[];

  billingReport: BillingReport[];
}