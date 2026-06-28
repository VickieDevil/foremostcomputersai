export interface CustomerService {
  id: string;

  customer_id: string;

  service_name: string;

  category: string;

  status: string;

  amount: number;

  remarks: string;

  created_at: string;
}

export interface CustomerServiceForm {
  customer_id: string;

  service_name: string;

  category: string;

  status: string;

  amount: number;

  remarks: string;
}

export const SERVICE_STATUS = [
  "Pending",
  "In Progress",
  "Completed",
  "Rejected",
] as const;

export const SERVICE_CATEGORIES = [
  "Aadhaar",
  "PAN",
  "Voter ID",
  "Ayushman",
  "Passport",
  "Driving Licence",
  "Birth Certificate",
  "Income Certificate",
  "Caste Certificate",
  "Domicile Certificate",
  "Labour Card",
  "E-Shram",
  "UAN",
  "ABHA Card",
  "Police Verification",
  "Electricity",
  "Banking",
  "Insurance",
  "CSC Service",
  "Other",
] as const;