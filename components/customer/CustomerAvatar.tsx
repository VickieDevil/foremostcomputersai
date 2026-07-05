"use client";

interface CustomerAvatarProps {
  name: string;
  image?: string | null;
  size?: number;
}

export default function CustomerAvatar({
  name,
  image,
  size = 52,
}: CustomerAvatarProps) {
  const initials = name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
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
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      {initials}
    </div>
  );
}