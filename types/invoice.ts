export type InvoiceStatus =
  | "Draft"
  | "Pending"
  | "Paid"
  | "Cancelled";

export type PaymentMethod =
  | "Cash"
  | "UPI"
  | "Card"
  | "Bank Transfer";

export interface InvoiceItem {
  id?: string;

  service_name: string;

  quantity: number;

  price: number;

  gst: number;

  discount: number;

  total: number;
}

export interface Invoice {
  id?: string;

  invoice_no: string;

  customer_id: string;

  customer_name: string;

  customer_mobile: string;

  items: InvoiceItem[];

  subtotal: number;

  gst_total: number;

  discount_total: number;

  grand_total: number;

  payment_method: PaymentMethod;

  status: InvoiceStatus;

  remarks?: string;

  created_at?: string;

  updated_at?: string;
}