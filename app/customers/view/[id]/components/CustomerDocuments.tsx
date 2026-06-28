"use client";

interface CustomerDocumentsProps {
  customerId: string;

  documents: any[];

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
      <h2
        style={{
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        📄 Customer Documents
      </h2>

      {documents.length === 0 ? (
        <div
          style={{
            padding: 30,
            textAlign: "center",
            background: "#f8fafc",
            borderRadius: 10,
            color: "#64748b",
          }}
        >
          No Documents Uploaded
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
              <th style={{ padding: 12 }}>Document</th>
              <th>Type</th>
              <th>Uploaded</th>
              <th>Actions</th>
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

                <td>{doc.document_type}</td>

                <td>
                  {new Date(doc.created_at).toLocaleDateString()}
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button style={button("#16a34a")}>
                        View
                      </button>
                    </a>

                    <a
                      href={doc.file_url}
                      download
                    >
                      <button style={button("#2563eb")}>
                        Download
                      </button>
                    </a>

                    <button
                      style={button("#dc2626")}
                      onClick={async () => {
                        const ok = confirm(
                          `Delete ${doc.document_name}?`
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

function button(color: string): React.CSSProperties {
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