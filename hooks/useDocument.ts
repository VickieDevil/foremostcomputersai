"use client";

import { useEffect, useState } from "react";
import { DocumentService } from "../services/document.service";
import {
  Document,
  DocumentFormData,
} from "../types/document";

export function useDocument(
  customerId?: string
) {
  const [documents, setDocuments] =
    useState<Document[]>([]);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    loadDocuments();
  }, [customerId]);

  async function loadDocuments() {
    try {
      setLoading(true);

      const data = customerId
        ? await DocumentService.getCustomerDocuments(
            customerId
          )
        : await DocumentService.getDocuments();

      setDocuments(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function uploadDocument(
    form: DocumentFormData
  ): Promise<boolean> {
    try {
      setLoading(true);

      await DocumentService.uploadDocument(
        form
      );

      await loadDocuments();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteDocument(
    doc: Document
  ): Promise<boolean> {
    try {
      setLoading(true);

      await DocumentService.deleteDocument(
        doc
      );

      await loadDocuments();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  return {
    documents,
    loading,
    loadDocuments,
    uploadDocument,
    deleteDocument,
  };
}