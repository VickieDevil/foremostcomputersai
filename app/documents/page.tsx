"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useDocument } from "../../hooks/useDocument";

export default function DocumentsPage() {
  const {
    documents,
    loading,
    loadAllDocuments,
    searchDocuments,
    deleteDocument,
  } = useDocument();

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadAllDocuments();
  }, []);

  useEffect(() => {
    searchDocuments(search);
  }, [search]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <div style={{ padding: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <h2>Documents Management</h2>

            <Link href="/customers">
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
                Upload New Document
              </button>
            </Link>
          </div>

          <input
            placeholder="Search Document..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: 350,
              padding: 10,
              borderRadius: 8,
              border: "1px solid #ccc",
              marginBottom: 20,
            }}
          />

          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <table
              style={{
                width: "100%",
                background: "#fff",
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
                  <th style={{ padding: 12 }}>Customer</th>
                  <th>Document</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {documents.map((doc: any) => (
                  <tr key={doc.id}>
                    <td style={{ padding: 12 }}>
                      {doc.customers?.full_name || "-"}
                    </td>

                    <td>{doc.document_name}</td>

                    <td>{doc.document_type}</td>

                    <td>
                      {new Date(
                        doc.created_at
                      ).toLocaleDateString()}
                    </td>

                    <td>
                      <a
                        href={doc.file_url}
                        target="_blank"
                      >
                        <button>View</button>
                      </a>

                      <button
                        style={{
                          marginLeft: 8,
                        }}
                        onClick={() =>
                          window.open(
                            doc.file_url,
                            "_blank"
                          )
                        }
                      >
                        Download
                      </button>

                      <button
                        style={{
                          marginLeft: 8,
                        }}
                        onClick={() =>
                          deleteDocument(doc.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}