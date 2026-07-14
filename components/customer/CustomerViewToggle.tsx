"use client";

interface Props {

  view:
    "grid"
    | "table";

  onChange: (
    view:
      "grid"
      | "table"
  ) => void;

}

export default function CustomerViewToggle({

  view,

  onChange,

}: Props) {

  return (

    <div
      style={{
        display:"flex",
        gap:10,
      }}
    >

      <button
        onClick={()=>
          onChange("grid")
        }
      >
        Grid
      </button>

      <button
        onClick={()=>
          onChange("table")
        }
      >
        Table
      </button>

    </div>

  );

}