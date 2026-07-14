"use client";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function CustomerPageHeader({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>{title}</h1>

        {subtitle && (
          <p
            style={{
              color: "#64748b",
              marginTop: 6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div>{children}</div>
    </div>
  );
}