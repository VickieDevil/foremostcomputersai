import { supabase } from "../lib/supabase";
import {
  Document,
  DocumentFormData,
} from "../types/document";

const BUCKET = "documents";

export class DocumentService {
  static async getDocuments() {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return data as Document[];
  }

  static async getCustomerDocuments(
    customerId: string
  ) {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return data as Document[];
  }

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
            customer_id:
              form.customer_id,

            title: form.title,

            document_type:
              form.document_type,

            file_name:
              form.file.name,

            file_url: publicUrl,

            file_size:
              form.file.size,

            mime_type:
              form.file.type,

            uploaded_by:
              "Admin",

            remarks:
              form.remarks ?? "",
          },
        ])
        .select();

    if (error) throw error;

    return data;
  }

  static async deleteDocument(
    doc: Document
  ) {
    const fileName =
      doc.file_url.split("/").pop();

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