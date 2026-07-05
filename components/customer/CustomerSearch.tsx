"use client";

interface Props {

  value: string;

  onChange: (
    value: string
  ) => void;

}

export default function CustomerSearch({

  value,

  onChange,

}: Props) {

  return (

    <input

      placeholder="Search customer..."

      value={value}

      onChange={(e)=>

        onChange(
          e.target.value
        )

      }

      style={{

        width: "100%",

        padding: 12,

        borderRadius: 10,

        border:
          "1px solid #d1d5db",

      }}

    />

  );

}