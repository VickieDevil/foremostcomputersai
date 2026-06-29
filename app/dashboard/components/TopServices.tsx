"use client";

interface ServiceItem {
  name: string;
  count: number;
}

interface Props {
  services: ServiceItem[];
}

export default function TopServices({
  services,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 25,
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        🏆 Top Services
      </h2>

      {services.length === 0 ? (
        <p>No service data available.</p>
      ) : (
        services.map((service, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{service.name}</span>

            <strong>{service.count}</strong>
          </div>
        ))
      )}
    </div>
  );
}