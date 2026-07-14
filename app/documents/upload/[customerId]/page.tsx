"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useDocument } from "../../../../hooks/useDocument";
import { DocumentFormData } from "../../../../types/document";

export default function UploadDocumentPage() {

  const params = useParams();

  const customerId =
    params.customerId as string;

  const {
    uploadDocument,
    loading,
  } = useDocument(customerId);

  const [
    documentName,
    setDocumentName,
  ] = useState("");

  const [
    documentType,
    setDocumentType,
  ] = useState("");

  const [
    remarks,
    setRemarks,
  ] = useState("");

  const [
    file,
    setFile,
  ] =
    useState<File | null>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    if (!file) {

      alert("Please Select File");

      return;

    }

    const form: DocumentFormData = {

      customer_id: customerId,

      title: documentName,

      document_type: documentType,

      remarks,

      file,

    };

    const ok =
      await uploadDocument(form);

    if (ok) {

      setDocumentName("");

      setDocumentType("");

      setRemarks("");

      setFile(null);

    }

  }

  const inputStyle = {

    width: "100%",

    padding: 12,

    marginBottom: 15,

    borderRadius: 8,

    border: "1px solid #ccc",

  };

  return (

    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        background: "#fff",
        padding: 30,
        borderRadius: 10,
      }}
    >

      <h2>

        Upload Document

      </h2>

      <p>

        <b>Customer ID :</b>

        {" "}

        {customerId}

      </p>

      <form
        onSubmit={handleSubmit}
      >

        <input
          style={inputStyle}
          placeholder="Document Name"
          value={documentName}
          onChange={(e) =>
            setDocumentName(
              e.target.value
            )
          }
          required
        />

        <input
          style={inputStyle}
          placeholder="Document Type"
          value={documentType}
          onChange={(e) =>
            setDocumentType(
              e.target.value
            )
          }
          required
        />

        <textarea
          style={inputStyle}
          placeholder="Remarks"
          value={remarks}
          onChange={(e) =>
            setRemarks(
              e.target.value
            )
          }
        />

        <input
          type="file"
          required
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ??
                null
            )
          }
        />

        <br />

        <br />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >

          {loading
            ? "Uploading..."
            : "Upload Document"}

        </button>

      </form>

    </div>

  );

}