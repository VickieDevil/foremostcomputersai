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

  const initials =
    customer.name
      .split(" ")
      .map((v) => v[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

  return (

    <div
      onClick={onSelect}
      style={{
        display: "flex",
        gap: 14,
        padding: 15,
        cursor: "pointer",
        background: active
          ? "#dcfce7"
          : "#fff",
        borderBottom:
          "1px solid #eee",
        transition: ".2s",
      }}
    >

      {/* Avatar */}

      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#16a34a",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 700,
          fontSize: 18,
          position: "relative",
          flexShrink: 0,
        }}
      >
        {initials}

        {customer.online && (

          <span
            style={{
              position: "absolute",
              bottom: 2,
              right: 2,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#22c55e",
              border: "2px solid white",
            }}
          />

        )}

      </div>

      {/* Right Side */}

      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
          }}
        >

          <strong
            style={{
              fontSize: 16,
            }}
          >
            {customer.name}
          </strong>

          <small
            style={{
              color: "#64748b",
            }}
          >
            {customer.time || ""}
          </small>

        </div>

        <div
          style={{
            marginTop: 6,
            color: "#64748b",
            fontSize: 14,
            overflow: "hidden",
            textOverflow:
              "ellipsis",
            whiteSpace:
              "nowrap",
          }}
        >
          {customer.lastMessage}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >

          <small
            style={{
              color: "#94a3b8",
            }}
          >
            +91 {customer.mobile}
          </small>

          {customer.unread >
            0 && (

            <div
              style={{
                minWidth: 22,
                height: 22,
                borderRadius: 20,
                background:
                  "#16a34a",
                color: "#fff",
                display: "flex",
                justifyContent:
                  "center",
                alignItems:
                  "center",
                fontSize: 12,
                fontWeight: 700,
                padding:
                  "0 7px",
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