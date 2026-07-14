"use client";

interface CustomerAvatarProps {
  name?: string | null;
  image?: string | null;
  size?: number;
}

export default function CustomerAvatar({
  name,
  image,
  size = 52,
}: CustomerAvatarProps) {

  const safeName = (name ?? "").trim();

  const initials =
    safeName.length > 0
      ? safeName
          .split(" ")
          .filter(Boolean)
          .map((x) => x[0])
          .join("")
          .substring(0, 2)
          .toUpperCase()
      : "?";

  if (image) {
    return (
      <img
        src={image}
        alt={safeName || "Customer"}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#2563eb",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      {initials}
    </div>
  );
}