"use client";

import NavigationItem, {
  NavigationItemProps,
} from "./NavigationItem";

interface Props {
  title: string;
  items: NavigationItemProps[];
}

export default function NavigationGroup({
  title,
  items,
}: Props) {
  return (
    <div
      style={{
        marginBottom: 28,
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#64748b",
          marginBottom: 10,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>

      {items.map((item) => (
        <NavigationItem
          key={item.href}
          {...item}
        />
      ))}
    </div>
  );
}