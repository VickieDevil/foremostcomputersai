"use client";

interface Props {
  total: number;
  active: number;
  pending: number;
  blocked: number;
}

export default function CustomerStats({
  total,
  active,
  pending,
  blocked,
}: Props) {

  const cards = [

    {
      title: "Total Customers",
      value: total,
      color: "#2563eb",
    },

    {
      title: "Active",
      value: active,
      color: "#16a34a",
    },

    {
      title: "Pending",
      value: pending,
      color: "#f59e0b",
    },

    {
      title: "Blocked",
      value: blocked,
      color: "#dc2626",
    },

  ];

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: 20,
      }}
    >

      {cards.map(card => (

        <div
          key={card.title}
          style={{
            background: "#fff",
            borderLeft:
              `6px solid ${card.color}`,
            padding: 20,
            borderRadius: 10,
          }}
        >

          <h4>{card.title}</h4>

          <h2>{card.value}</h2>

        </div>

      ))}

    </div>

  );

}