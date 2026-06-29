export interface DashboardCustomer {
  id: string;
  name: string;
  mobile: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  activity_type: string;
  created_at: string;
}

export interface MonthlyRevenue {
  month: string;
  revenue: number;
}

export interface TopService {
  name: string;
  count: number;
}

export interface PendingPayment {
  customer: string;
  amount: number;
}

export interface DashboardStats {
  totalCustomers: number;

  activeCustomers: number;

  totalDocuments: number;

  totalServices: number;

  pendingServices: number;

  completedServices: number;

  totalBills: number;

  pendingPayments: number;

  totalRevenue: number;

  todayRevenue: number;

  recentCustomers: DashboardCustomer[];

  monthlyRevenue: MonthlyRevenue[];

  topServices: TopService[];

  pendingPaymentList: PendingPayment[];

  activities: RecentActivity[];
}