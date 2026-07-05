"use client";

interface Props {

  name: string;

  size?: number;

}

export default function Avatar({

  name,

  size = 42,

}: Props) {

  const initials =

    name

      .split(" ")

      .map((n) => n[0])

      .join("")

      .substring(0, 2)

      .toUpperCase();

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

        userSelect: "none",

      }}

    >

      {initials}

    </div>

  );

}