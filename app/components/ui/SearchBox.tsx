"use client";

interface Props {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function SearchBox({
  value,
  placeholder = "Search...",
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: 12,
        border: "1px solid #d1d5db",
        borderRadius: 8,
        fontSize: 15,
        outline: "none",
        marginBottom: 20,
      }}
    />
  );
}