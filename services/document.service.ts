import { supabase } from "../lib/supabase";
import {
  Document,
  DocumentFormData,
} from "../types/document";

const BUCKET = "documents";

export class DocumentService {

  // ===========================
  // Get All Documents
  // ===========================

  static async getAllDocuments(): Promise<Document[]> {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data || []) as Document[];
  }

  // Backward Compatibility
  static async getDocuments(): Promise<Document[]> {
    return this.getAllDocuments();
  }

  // ===========================
  // Get Single Document
  // ===========================

  static async getDocumentById(
    id: string
  ): Promise<Document | null> {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Document;
  }

  // ===========================
  // Customer Documents
  // ===========================

  static async getCustomerDocuments(
    customerId: string
  ): Promise<Document[]> {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data || []) as Document[];
  }

  // ===========================
  // Upload Document
  // ===========================

  static async uploadDocument(
    form: DocumentFormData
  ) {
    if (!form.file)
      throw new Error("No file selected");

    const fileName = `${Date.now()}-${form.file.name}`;

    const { error: uploadError } =
      await supabase.storage
        .from(BUCKET)
        .upload(fileName, form.file);

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(fileName);

    const { data, error } =
      await supabase
        .from("documents")
        .insert([
          {
            customer_id: form.customer_id,
            title: form.title,
            document_type: form.document_type,
            file_name: form.file.name,
            file_url: publicUrl,
            file_size: form.file.size,
            mime_type: form.file.type,
            uploaded_by: "Admin",
            remarks: form.remarks ?? "",
          },
        ])
        .select();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Update Document
  // ===========================

  static async updateDocument(
    id: string,
    values: Partial<Document>
  ) {
    const { data, error } =
      await supabase
        .from("documents")
        .update(values)
        .eq("id", id)
        .select();

    if (error) throw error;

    return data;
  }

  // ===========================
  // Delete Document
  // ===========================

  static async deleteDocument(
    doc: Document
  ) {
    const fileName =
      doc.file_url?.split("/").pop();

    if (fileName) {
      await supabase.storage
        .from(BUCKET)
        .remove([fileName]);
    }

    const { error } =
      await supabase
        .from("documents")
        .delete()
        .eq("id", doc.id);

    if (error) throw error;

    return true;
  }
}