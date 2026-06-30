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
    loadDocuments(customerId);
  }, [customerId]);

  async function loadDocuments(
    customer?: string
  ) {
    try {
      setLoading(true);

      const data = customer
        ? await DocumentService.getCustomerDocuments(
            customer
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

      await loadDocuments(customerId);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function deleteDocument(
    id: string,
    customer?: string
  ): Promise<boolean> {
    try {
      setLoading(true);

      const doc = documents.find(
        (d) => d.id === id
      );

      if (!doc) {
        console.warn(
          "Document not found:",
          id
        );
        return false;
      }

      await DocumentService.deleteDocument(
        doc
      );

      await loadDocuments(
        customer ?? customerId
      );

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