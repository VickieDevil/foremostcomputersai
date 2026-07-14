"use client";

import { Document } from "@/types/document";

interface CustomerDocumentsProps {
  customerId: string;

  documents: Document[];

  deleteDocument: (
    id: string,
    customerId?: string
  ) => Promise<boolean>;
}

export default function CustomerDocuments({
  customerId,
  documents,
  deleteDocument,
}: CustomerDocumentsProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        marginTop: 25,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#1f2937",
          }}
        >
          📄 Customer Documents
        </h2>

        <button
          style={button("#2563eb")}
        >
          + Upload
        </button>
      </div>

      {documents.length === 0 ? (
        <div
          style={{
            padding: 40,
            textAlign: "center",
            borderRadius: 10,
            background: "#f8fafc",
            color: "#64748b",
            border: "1px dashed #cbd5e1",
          }}
        >
          No Documents Uploaded Yet
        </div>
      ) : (
        <table
          style={{
            width: "100%",
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
              <th style={th}>Document</th>
              <th style={th}>Type</th>
              <th style={th}>Uploaded</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr
                key={doc.id}
                style={{
                  borderBottom:
                    "1px solid #e5e7eb",
                }}
              >
                <td style={td}>
                  {doc.title ??
                    doc.file_name ??
                    "-"}
                </td>

                <td style={td}>
                  {doc.document_type ??
                    "-"}
                </td>

                <td style={td}>
                  {doc.created_at
                    ? new Date(
                        doc.created_at
                      ).toLocaleDateString(
                        "en-IN"
                      )
                    : "-"}
                </td>

                <td style={td}>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    {doc.file_url && (
                      <>
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button
                            style={button(
                              "#16a34a"
                            )}
                          >
                            View
                          </button>
                        </a>

                        <a
                          href={doc.file_url}
                          download
                        >
                          <button
                            style={button(
                              "#2563eb"
                            )}
                          >
                            Download
                          </button>
                        </a>
                      </>
                    )}

                    <button
                      style={button(
                        "#dc2626"
                      )}
                      onClick={async () => {
                        const ok =
                          confirm(
                            `Delete "${doc.title ?? doc.file_name}" ?`
                          );

                        if (!ok) return;

                        await deleteDocument(
                          doc.id,
                          customerId
                        );
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th: React.CSSProperties = {
  padding: 12,
  textAlign: "left",
};

const td: React.CSSProperties = {
  padding: 12,
};

function button(
  color: string
): React.CSSProperties {
  return {
    background: color,
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: 600,
  };
}