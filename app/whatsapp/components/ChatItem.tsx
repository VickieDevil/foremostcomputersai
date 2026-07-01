"use client";

interface Props {
  customer: {
    id: string;
    name: string;
    mobile: string;
    lastMessage: string;
    unread: number;
    time: string;
    online: boolean;
  };

  active: boolean;

  onSelect: () => void;
}

export default function ChatItem({
  customer,
  active,
  onSelect,
}: Props) {
  return (
    <div
      onClick={onSelect}
      style={{
        padding: 15,
        cursor: "pointer",
        background: active ? "#e0f2fe" : "#fff",
        borderBottom: "1px solid #eee",
        transition: ".2s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <strong>{customer.name}</strong>

        <small>{customer.time}</small>
      </div>

      <div
        style={{
          color: "#64748b",
          marginTop: 5,
          fontSize: 14,
        }}
      >
        {customer.lastMessage}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <small>{customer.mobile}</small>

        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          {customer.online && (
            <span
              style={{
                width: 10,
                height: 10,
                background: "#16a34a",
                borderRadius: 20,
                display: "inline-block",
              }}
            />
          )}

          {customer.unread > 0 && (
            <div
              style={{
                background: "#16a34a",
                color: "#fff",
                borderRadius: 20,
                padding: "2px 8px",
                fontSize: 12,
              }}
            >
              {customer.unread}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}