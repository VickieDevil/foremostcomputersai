"use client";

interface Props {
  total?: number;
}

export default function CustomerDocumentsCard({
  total = 0,
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>Documents</h3>

      <h2>{total}</h2>
    </div>
  );
}