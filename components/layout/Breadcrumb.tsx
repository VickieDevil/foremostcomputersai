"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumb() {

  const pathname =
    usePathname();

  const parts =
    pathname
      .split("/")
      .filter(Boolean);

  return (

    <div
      style={{
        color: "#64748b",
        fontSize: 14,
        marginBottom: 20,
      }}
    >

      Home

      {parts.map(
        (part) => (

          <span key={part}>

            {" / "}

            <strong
              style={{
                color:
                  "#111827",
              }}
            >
              {part}
            </strong>

          </span>

        )
      )}

    </div>

  );

}