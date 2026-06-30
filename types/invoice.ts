export type InvoiceStatus =
  | "Draft"
  | "Pending"
  | "Paid"
  | "Partially Paid"
  | "Cancelled";

export type PaymentMethod =
  | "Cash"
  | "UPI"
  | "Card"
  | "Bank Transfer"
  | "Cheque";

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

  customer_email?: string;

  customer_address?: string;

  items: InvoiceItem[];

  subtotal: number;

  gst_total: number;

  discount_total: number;

  grand_total: number;

  paid_amount: number;

  due_amount: number;

  payment_method: PaymentMethod;

  status: InvoiceStatus;

  remarks?: string;

  created_at?: string;

  updated_at?: string;
}

export interface InvoiceFormData {
  customer_id: string;

  customer_name: string;

  customer_mobile: string;

  customer_email?: string;

  customer_address?: string;

  items: InvoiceItem[];

  payment_method: PaymentMethod;

  remarks?: string;

  status: InvoiceStatus;
}