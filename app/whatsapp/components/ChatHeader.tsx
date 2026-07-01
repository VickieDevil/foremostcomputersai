"use client";

interface Props {
  customerName: string;
  mobile: string;
  online?: boolean;
}

export default function ChatHeader({
  customerName,
  mobile,
  online,
}: Props) {
  return (
    <div
      style={{
        padding: 16,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{customerName}</h3>

        <small
          style={{
            color: online ? "#16a34a" : "#64748b",
          }}
        >
          {online ? "Online" : mobile}
        </small>
      </div>

      <div
        style={{
          fontSize: 22,
          cursor: "pointer",
        }}
      >
        ⋮
      </div>
    </div>
  );
}