"use client";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (
    value: string
  ) => void;
}

export default function SearchBox({
  value,
  placeholder = "Search...",
  onChange,
}: Props) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) =>
        onChange(e.target.value)
      }
      style={{
        width: "100%",
        padding: 12,
        borderRadius: 8,
        border: "1px solid #ddd",
        outline: "none",
        fontSize: 15,
      }}
    />
  );
}