"use client";

import { useState } from "react";
import {
  DOCUMENT_TYPES,
  DocumentFormData,
} from "../../../types/document";
import { useDocument } from "../../../hooks/useDocument";

interface Props {
  customerId: string;
}

export default function DocumentUpload({
  customerId,
}: Props) {
  const { uploadDocument } =
    useDocument(customerId);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState<DocumentFormData>({
      customer_id: customerId,
      title: "",
      document_type:
        DOCUMENT_TYPES[0],
      file: null,
      remarks: "",
    });

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!form.file) {
      alert("Please select a file");
      return;
    }

    setLoading(true);

    const ok =
      await uploadDocument(form);

    setLoading(false);

    if (ok) {
      alert("Document Uploaded Successfully");

      setForm({
        customer_id: customerId,
        title: "",
        document_type:
          DOCUMENT_TYPES[0],
        file: null,
        remarks: "",
      });
    }
  }

  const inputStyle = {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    border: "1px solid #ddd",
    borderRadius: 8,
    fontSize: 15,
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        boxShadow:
          "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        Upload Document
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Document Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <select
          style={inputStyle}
          value={form.document_type}
          onChange={(e) =>
            setForm({
              ...form,
              document_type:
                e.target.value,
            })
          }
        >
          {DOCUMENT_TYPES.map(
            (type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            )
          )}
        </select>

        <input
          style={inputStyle}
          type="file"
          onChange={(e) =>
            setForm({
              ...form,
              file:
                e.target.files?.[0] ??
                null,
            })
          }
        />

        <textarea
          style={{
            ...inputStyle,
            height: 100,
          }}
          placeholder="Remarks"
          value={form.remarks}
          onChange={(e) =>
            setForm({
              ...form,
              remarks:
                e.target.value,
            })
          }
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 14,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            background:
              "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
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