"use client";

interface Props {
  tags: string[];
}

export default function CustomerTags({
  tags,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
      }}
    >
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            background: "#e2e8f0",
            padding: "4px 10px",
            borderRadius: 20,
            fontSize: 12,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}