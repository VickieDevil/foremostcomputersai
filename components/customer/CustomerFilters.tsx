"use client";

interface Props {

  value: string;

  onChange: (
    value: string
  ) => void;

}

export default function CustomerFilters({

  value,

  onChange,

}: Props) {

  return (

    <select

      value={value}

      onChange={(e)=>

        onChange(
          e.target.value
        )

      }

      style={{

        padding: 12,

        borderRadius: 10,

      }}

    >

      <option value="">

        All

      </option>

      <option value="Active">

        Active

      </option>

      <option value="Pending">

        Pending

      </option>

      <option value="Blocked">

        Blocked

      </option>

    </select>

  );

}