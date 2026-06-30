export type ServiceStatus =
  | "Pending"
  | "In Progress"
  | "Completed"
  | "Cancelled"
  | "Rejected";

export type ServicePriority =
  | "Low"
  | "Normal"
  | "High"
  | "Urgent";

export interface Service {
  id: string;

  customer_id: string;

  service_name: string;

  category: string;

  description?: string;

  amount: number;

  paid_amount: number;

  due_amount: number;

  status: ServiceStatus;

  priority: ServicePriority;

  assigned_to?: string;

  expected_delivery?: string;

  completed_at?: string;

  remarks?: string;

  created_at: string;

  updated_at?: string;
}

export interface ServiceFormData {
  customer_id: string;

  service_name: string;

  category: string;

  description?: string;

  amount: number;

  paid_amount: number;

  due_amount: number;

  status: ServiceStatus;

  priority: ServicePriority;

  assigned_to?: string;

  expected_delivery?: string;

  remarks?: string;
}

export const SERVICE_STATUS = [
  "Pending",
  "In Progress",
  "Completed",
  "Cancelled",
  "Rejected",
] as const;

export const SERVICE_PRIORITY = [
  "Low",
  "Normal",
  "High",
  "Urgent",
] as const;
export const SERVICE_CATEGORIES = [
  "Aadhaar",
  "PAN Card",
  "Voter ID",
  "Passport",
  "Driving Licence",
  "Income Certificate",
  "Caste Certificate",
  "Domicile",
  "Birth Certificate",
  "Death Certificate",
  "Ayushman Card",
  "ABHA Card",
  "E-Shram",
  "Labour Card",
  "UAN",
  "Police Verification",
  "Electricity Bill",
  "Water Bill",
  "CSC Service",
  "Banking",
  "Insurance",
  "Other",
] as const;