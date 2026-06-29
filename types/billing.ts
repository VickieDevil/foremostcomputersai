export interface Billing {
  id?: string;

  customer_id: string;

  service_id?: string;

  invoice_no: string;

  service_name: string;

  amount: number;

  discount: number;

  gst: number;

  total: number;

  payment_status: "Pending" | "Paid" | "Partial";

  payment_mode:
    | "Cash"
    | "UPI"
    | "Card"
    | "Bank Transfer";

  remarks: string;

  created_at?: string;

  updated_at?: string;
}

export interface BillingFormData {
  customer_id: string;

  service_id?: string;

  invoice_no: string;

  service_name: string;

  amount: number;

  discount: number;

  gst: number;

  total: number;

  payment_status: "Pending" | "Paid" | "Partial";

  payment_mode:
    | "Cash"
    | "UPI"
    | "Card"
    | "Bank Transfer";

  remarks: string;
}

export const PAYMENT_STATUS = [
  "Pending",
  "Paid",
  "Partial",
] as const;

export const PAYMENT_MODES = [
  "Cash",
  "UPI",
  "Card",
  "Bank Transfer",
] as const;