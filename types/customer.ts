export interface Customer {
  id: string;

  full_name: string;

  mobile: string;

  email: string;

  address: string;

  aadhaar: string;

  pan: string;

  dob: string;

  gender: string;

  status: string;

  created_at: string;

  updated_at?: string;
}

export interface CustomerFormData {
  full_name: string;

  mobile: string;

  email: string;

  address: string;

  aadhaar: string;

  pan: string;

  dob: string;

  gender: string;

  status: string;
}