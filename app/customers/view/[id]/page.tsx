"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import { useCustomer } from "../../../../hooks/useCustomer";
import { useDocument } from "../../../../hooks/useDocument";

export default function ViewCustomerPage() {
  const params = useParams();
  const router = useRouter();

  const {
    customer,
    loading,
    getCustomerById,
  } = useCustomer();

  const {
    documents,
    loadDocuments,
    deleteDocument,
  } = useDocument();

  useEffect(() => {
    if (params.id) {
      getCustomerById(params.id as string);
      loadDocuments(params.id as string);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!customer) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Customer Not Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        background: "#fff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 3px 10px rgba(0,0,0,.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Customer Details</h2>

        <Link
          href={`/documents/upload/${customer.id}`}
        >
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Upload Document
          </button>
        </Link>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <p><strong>Name :</strong> {customer.full_name}</p>
      <p><strong>Mobile :</strong> {customer.mobile}</p>
      <p><strong>Email :</strong> {customer.email || "-"}</p>
      <p><strong>Address :</strong> {customer.address || "-"}</p>
      <p><strong>Aadhaar :</strong> {customer.aadhaar || "-"}</p>
      <p><strong>PAN :</strong> {customer.pan || "-"}</p>
      <p><strong>DOB :</strong> {customer.dob || "-"}</p>
      <p><strong>Gender :</strong> {customer.gender || "-"}</p>
      <p><strong>Status :</strong> {customer.status}</p>

      <hr
        style={{
          margin: "30px 0",
        }}
      />

      <h3>Customer Documents</h3>      {documents.length === 0 ? (
        <div
          style={{
            marginTop: 20,
            padding: 20,
            background: "#f8fafc",
            borderRadius: 8,
          }}
        >
          No Documents Uploaded
        </div>
      ) : (
        <table
          style={{
            width: "100%",
            marginTop: 20,
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <th style={{ padding: 12 }}>Document</th>
              <th style={{ padding: 12 }}>Type</th>
              <th style={{ padding: 12 }}>Uploaded</th>
              <th style={{ padding: 12 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc: any) => (
              <tr
                key={doc.id}
                style={{
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={{ padding: 12 }}>
                  {doc.document_name}
                </td>

                <td style={{ padding: 12 }}>
                  {doc.document_type}
                </td>

                <td style={{ padding: 12 }}>
                  {new Date(
                    doc.created_at
                  ).toLocaleDateString()}
                </td>

                <td style={{ padding: 12 }}>
                  <a
                    href={doc.file_url}
                    target="_blank"
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 6,
                      marginRight: 8,
                      textDecoration: "none",
                    }}
                  >
                    View
                  </a>

                  <a
                    href={doc.file_url}
                    download
                    style={{
                      background: "#2563eb",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 6,
                      marginRight: 8,
                      textDecoration: "none",
                    }}
                  >
                    Download
                  </a>

                  <button
                    onClick={async () => {
                      const ok = confirm(
                        `Delete ${doc.document_name}?`
                      );

                      if (!ok) return;

                      await deleteDocument(
                        doc.id,
                        customer.id
                      );
                    }}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 10,
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            background: "#64748b",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Back
        </button>

        <Link href={`/customers/edit/${customer.id}`}>
          <button
            style={{
              background: "#f59e0b",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Edit Customer
          </button>
        </Link>
      </div>
    </div>
  );
}