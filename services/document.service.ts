import { supabase } from "../lib/supabase";
import { DocumentData } from "../types/document";

export class DocumentService {
  // ==========================================
  // Upload File
  // ==========================================
  static async uploadFile(file: File) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("documents")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("documents")
      .getPublicUrl(fileName);

    return data.publicUrl;
  }

  // ==========================================
  // Save Document
  // ==========================================
  static async saveDocument(document: DocumentData) {
    const { data, error } = await supabase
      .from("documents")
      .insert([document])
      .select();

    if (error) throw error;

    return data;
  }

  // ==========================================
  // Customer Documents
  // ==========================================
  static async getDocuments(customerId: string) {
    const { data, error } = await supabase
      .from("documents")
      .select(`
        *,
        customers (
          full_name,
          mobile
        )
      `)
      .eq("customer_id", customerId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  // ==========================================
  // All Documents
  // ==========================================
  static async getAllDocuments() {
    const { data, error } = await supabase
      .from("documents")
      .select(`
        *,
        customers (
          full_name,
          mobile
        )
      `)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  // ==========================================
  // Single Document
  // ==========================================
  static async getDocumentById(id: string) {
    const { data, error } = await supabase
      .from("documents")
      .select(`
        *,
        customers (
          full_name,
          mobile
        )
      `)
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  // ==========================================
  // Search Documents
  // ==========================================
  static async searchDocuments(search: string) {
    const { data, error } = await supabase
      .from("documents")
      .select(`
        *,
        customers (
          full_name,
          mobile
        )
      `)
      .or(
        `document_name.ilike.%${search}%,document_type.ilike.%${search}%`
      )
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;
  }

  // ==========================================
  // Delete Document
  // ==========================================
  static async deleteDocument(id: string) {
    const { error } = await supabase
      .from("documents")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }
}