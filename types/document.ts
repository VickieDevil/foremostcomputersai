export interface Document {
  id?: string;

  customer_id: string;

  title: string;

  document_type: string;

  file_name: string;

  file_url: string;

  file_size?: number;

  mime_type?: string;

  uploaded_by?: string;

  remarks?: string;

  created_at?: string;

  updated_at?: string;
}

export interface DocumentFormData {
  customer_id: string;

  title: string;

  document_type: string;

  file: File | null;

  remarks?: string;
}

export const DOCUMENT_TYPES = [
  "Aadhaar Card",
  "PAN Card",
  "Passport",
  "Driving Licence",
  "Voter ID",
  "Ration Card",
  "Income Certificate",
  "Caste Certificate",
  "Domicile Certificate",
  "Birth Certificate",
  "Death Certificate",
  "Marksheet",
  "Degree",
  "Photo",
  "Signature",
  "Bank Passbook",
  "Cheque",
  "Electricity Bill",
  "Gas Bill",
  "Other",
] as const;