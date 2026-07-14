export type CustomerStatus =
  | "Active"
  | "Pending"
  | "Blocked";

export interface Customer {

  id: string;

  // Database Column
  full_name?: string | null;

  // Temporary Compatibility
  name?: string | null;

  mobile: string;

  email?: string | null;

  address?: string | null;

  aadhaar?: string | null;

  pan?: string | null;

  dob?: string | null;

  gender?: string | null;

  status?: CustomerStatus | null;

  photo?: string | null;

  tags?: string[];

  created_at: string;

  updated_at?: string;

}