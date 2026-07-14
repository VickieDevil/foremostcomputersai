export interface CustomerFormData {
  name: string;
  mobile: string;
  email: string;
  address: string;
  aadhaar: string;
  pan: string;
  photo: string;
  status: "Active" | "Pending" | "Blocked";
  tags: string[];
}

export const defaultCustomerForm: CustomerFormData = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  aadhaar: "",
  pan: "",
  photo: "",
  status: "Active",
  tags: [],
};