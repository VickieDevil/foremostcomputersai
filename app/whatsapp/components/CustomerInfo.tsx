"use client";

interface Props {
  customerName: string;
  phone: string;
}

export default function CustomerInfo({
  customerName,
  phone,
}: Props) {
  return (
    <div
      style={{
        padding: 20,
        borderBottom:
          "1px solid #ddd",
        background: "#fff",
      }}
    >
      <h3>{customerName}</h3>

      <div>{phone}</div>
    </div>
  );
}