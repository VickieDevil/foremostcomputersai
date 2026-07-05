export type CustomerStatus =
  | "Active"
  | "Pending"
  | "Blocked";

export interface Customer {

  id: string;

  name: string;

  mobile: string;

  email?: string | null;

  address?: string | null;

  aadhaar?: string | null;

  pan?: string | null;

  photo?: string | null;

  status: CustomerStatus;

  tags: string[];

  created_at: string;

  updated_at: string;

}