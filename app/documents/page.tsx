"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { useDocument } from "../../hooks/useDocument";

export default function DocumentsPage() {
  const {
    documents,
    loading,
    loadDocuments,
    deleteDocument,
  } = useDocument();

  const [search, setSearch] =
    useState("");

  const [selectedType, setSelectedType] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Newest");

  useEffect(() => {
    loadDocuments();
  }, []);

  const totalDocuments =
    documents.length;

  const filteredDocuments = useMemo(() => {
    let list = [...documents];

    if (search.trim()) {
      const value =
        search.toLowerCase();

      list = list.filter(
        (doc: any) =>
          doc.document_name
            ?.toLowerCase()
            .includes(value) ||
          doc.document_type
            ?.toLowerCase()
            .includes(value) ||
          doc.customers?.full_name
            ?.toLowerCase()
            .includes(value)
      );
    }

    if (selectedType !== "All") {
      list = list.filter(
        (doc: any) =>
          doc.document_type ===
          selectedType
      );
    }

    list.sort(
      (a: any, b: any) => {
        switch (sortBy) {
          case "Newest":
            return (
              new Date(
                b.created_at
              ).getTime() -
              new Date(
                a.created_at
              ).getTime()
            );

          case "Oldest":
            return (
              new Date(
                a.created_at
              ).getTime() -
              new Date(
                b.created_at
              ).getTime()
            );

          case "Name":
            return a.document_name.localeCompare(
              b.document_name
            );

          default:
            return 0;
        }
      }
    );

    return list;
  }, [
    documents,
    search,
    selectedType,
    sortBy,
  ]);

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

        <div
          style={{
            padding: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: 25,
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                }}
              >
                Documents
              </h2>

              <div
                style={{
                  color: "#64748b",
                  marginTop: 6,
                  fontSize: 14,
                }}
              >
                Total Documents :
                {" "}
                {totalDocuments}
              </div>
            </div>

            <Link
              href="/customers"
            >
              <button
                style={{
                  background:
                    "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding:
                    "10px 20px",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Upload New
                Document
              </button>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: 15,
              flexWrap: "wrap",
              marginBottom: 25,
            }}
          >
            <input
              type="text"
              placeholder="Search document..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              style={{
                flex: 1,
                minWidth: 260,
                padding: 12,
                border:
                  "1px solid #d1d5db",
                borderRadius: 8,
              }}
            />

            <select
              value={selectedType}
              onChange={(e) =>
                setSelectedType(
                  e.target.value
                )
              }
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <option>
                All
              </option>
              <option>
                Aadhaar
              </option>
              <option>
                PAN
              </option>
              <option>
                Passport
              </option>
              <option>
                Certificate
              </option>
              <option>
                Other
              </option>
            </select>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
              style={{
                padding: 12,
                borderRadius: 8,
              }}
            >
              <option>
                Newest
              </option>
              <option>
                Oldest
              </option>
              <option>
                Name
              </option>
            </select>
          </div>

          {loading ? (
            <h3>Loading Documents...</h3>
          ) : filteredDocuments.length === 0 ? (
            <h3>No Documents Found</h3>
          ) : (
            <table
              style={{
                width: "100%",
                background: "#fff",
                borderCollapse: "collapse",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                  }}
                >
                  <th style={{ padding: 12 }}>
                    Customer
                  </th>

                  <th>Document</th>

                  <th>Type</th>

                  <th>Date</th>

                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredDocuments.map(
                  (doc: any) => (
                    <tr key={doc.id}>
                      <td
                        style={{
                          padding: 12,
                        }}
                      >
                        {doc.customers
                          ?.full_name || "-"}
                      </td>

                      <td>
                        <strong>
                          {
                            doc.document_name
                          }
                        </strong>
                      </td>

                      <td>
                        <span
                          style={{
                            background:
                              "#eff6ff",
                            color:
                              "#2563eb",
                            padding:
                              "5px 10px",
                            borderRadius: 20,
                            fontSize: 12,
                            fontWeight: 600,
                          }}
                        >
                          {
                            doc.document_type
                          }
                        </span>
                      </td>

                      <td>
                        {new Date(
                          doc.created_at
                        ).toLocaleDateString()}
                      </td>

                      <td
                        style={{
                          whiteSpace:
                            "nowrap",
                        }}
                      >
                        <Link
                          href={`/documents/view/${doc.id}`}
                        >
                          <button
                            style={{
                              ...actionBtn,
                              background:
                                "#2563eb",
                            }}
                          >
                            View
                          </button>
                        </Link>

                        <button
                          style={{
                            ...actionBtn,
                            background:
                              "#16a34a",
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

                        <Link
                          href={`/documents/upload/${doc.customer_id}`}
                        >
                          <button
                            style={{
                              ...actionBtn,
                              background:
                                "#f59e0b",
                              marginLeft: 8,
                            }}
                          >
                            Edit
                          </button>
                        </Link>

                        <button
                          style={{
                            ...actionBtn,
                            background:
                              "#dc2626",
                              marginLeft: 8,
                          }}
                          onClick={async () => {
                            if (
                              confirm(
                                `Delete ${doc.document_name}?`
                              )
                            ) {
                              await deleteDocument(
                                doc.id
                              );

                              await loadDocuments();
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

const actionBtn: React.CSSProperties = {
  color: "#fff",
  border: "none",
  padding: "7px 12px",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
};