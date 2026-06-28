"use client";

import { useState } from "react";
import { DocumentService } from "../services/document.service";

export function useDocument() {
  const [documents, setDocuments] = useState<any[]>([]);
  const [document, setDocument] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // ===========================
  // Upload Document
  // ===========================
  async function uploadDocument(
    customerId: string,
    file: File,
    documentName: string,
    documentType: string,
    remarks: string
  ) {
    try {
      setLoading(true);

      const fileUrl = await DocumentService.uploadFile(file);

      await DocumentService.saveDocument({
        customer_id: customerId,
        document_name: documentName,
        document_type: documentType,
        file_url: fileUrl,
        remarks,
      });

      alert("Document Uploaded Successfully");

      await loadDocuments(customerId);

      return true;
    } catch (error: any) {
      console.error(error);

      alert(error.message || "Upload Failed");

      return false;
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Customer Documents
  // ===========================
  async function loadDocuments(customerId: string) {
    try {
      setLoading(true);

      const data = await DocumentService.getDocuments(customerId);

      setDocuments(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // All Documents
  // ===========================
  async function loadAllDocuments() {
    try {
      setLoading(true);

      const data = await DocumentService.getAllDocuments();

      setDocuments(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Search Documents
  // ===========================
  async function searchDocuments(search: string) {
    try {
      setLoading(true);

      if (!search.trim()) {
        await loadAllDocuments();
        return;
      }

      const data = await DocumentService.searchDocuments(search);

      setDocuments(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Single Document
  // ===========================
  async function getDocumentById(id: string) {
    try {
      setLoading(true);

      const data = await DocumentService.getDocumentById(id);

      setDocument(data);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  }

  // ===========================
  // Delete Document
  // ===========================
  async function deleteDocument(
    id: string,
    customerId?: string
  ) {
    try {
      setLoading(true);

      await DocumentService.deleteDocument(id);

      if (customerId) {
        await loadDocuments(customerId);
      } else {
        await loadAllDocuments();
      }

      alert("Document Deleted Successfully");

      return true;
    } catch (error) {
      console.error(error);

      alert("Unable To Delete Document");

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    documents,
    document,
    loading,

    uploadDocument,

    loadDocuments,
    loadAllDocuments,

    searchDocuments,

    getDocumentById,

    deleteDocument,
  };
}