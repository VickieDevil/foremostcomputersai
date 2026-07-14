import { CustomerFormData } from "@/types/customer.form";

export interface ValidationErrors {
  name?: string;
  mobile?: string;
  email?: string;
  aadhaar?: string;
  pan?: string;
}

export function validateCustomer(
  data: CustomerFormData
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = "Customer name is required.";
  }

  if (!/^[6-9]\d{9}$/.test(data.mobile)) {
    errors.mobile = "Invalid mobile number.";
  }

  if (
    data.email &&
    !/^\S+@\S+\.\S+$/.test(data.email)
  ) {
    errors.email = "Invalid email.";
  }

  if (
    data.aadhaar &&
    !/^\d{12}$/.test(data.aadhaar)
  ) {
    errors.aadhaar = "Invalid Aadhaar.";
  }

  if (
    data.pan &&
    !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
      data.pan.toUpperCase()
    )
  ) {
    errors.pan = "Invalid PAN.";
  }

  return errors;
}