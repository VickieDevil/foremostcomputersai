"use client";

interface Props {

  text: string;

  color?: string;

}

export default function Badge({

  text,

  color = "#16a34a",

}: Props) {

  return (

    <span

      style={{

        background: color,

        color: "#fff",

        borderRadius: 999,

        padding: "4px 10px",

        fontSize: 12,

        fontWeight: 600,

      }}

    >

      {text}

    </span>

  );

}