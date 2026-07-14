"use client";

interface Props {
  notes?: string | null;
}

export default function CustomerNotes({
  notes,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <h3>Notes</h3>

      <div
        style={{
          color: "#64748b",
          whiteSpace: "pre-wrap",
        }}
      >
        {notes?.trim()
          ? notes
          : "No notes available."}
      </div>
    </div>
  );
}