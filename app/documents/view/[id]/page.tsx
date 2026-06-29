"use client";

interface Props {
  params: {
    id: string;
  };
}

export default function DocumentViewPage({
  params,
}: Props) {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>Document Details</h1>

      <p>
        Document ID: {params.id}
      </p>

      <p>
        This page is under development.
      </p>
    </div>
  );
}