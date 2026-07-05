"use client";

import NavigationGroup from "./NavigationGroup";

const menu = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: "🏠",
      },
      {
        title: "Customers",
        href: "/customers",
        icon: "👥",
      },
      {
        title: "WhatsApp",
        href: "/whatsapp",
        icon: "💬",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        title: "Documents",
        href: "/documents",
        icon: "📄",
      },
      {
        title: "Billing",
        href: "/billing",
        icon: "💳",
      },
      {
        title: "Reports",
        href: "/reports",
        icon: "📊",
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        title: "Settings",
        href: "/settings",
        icon: "⚙️",
      },
    ],
  },
];

export default function NavigationMenu() {
  return (
    <>
      {menu.map((group) => (
        <NavigationGroup
          key={group.title}
          title={group.title}
          items={group.items}
        />
      ))}
    </>
  );
}