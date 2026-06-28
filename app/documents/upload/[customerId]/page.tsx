"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useDocument } from "../../../../hooks/useDocument";

export default function UploadDocumentPage() {
  const { customerId } = useParams();

  const { uploadDocument, loading } = useDocument();

  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState<File | null>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!file) {
      alert("Please Select File");
      return;
    }

    const ok = await uploadDocument(
      customerId as string,
      file,
      documentName,
      documentType,
      remarks
    );

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
      <h2>Upload Document</h2>

      <p>
        <b>Customer ID:</b> {customerId}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          placeholder="Document Name"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          required
        />

        <input
          style={inputStyle}
          placeholder="Document Type"
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
          required
        />

        <textarea
          style={inputStyle}
          placeholder="Remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
          required
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
          {loading ? "Uploading..." : "Upload Document"}
        </button>
      </form>
    </div>
  );
}