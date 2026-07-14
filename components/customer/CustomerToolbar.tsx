"use client";

interface Props {

  search: string;

  onSearch: (
    value: string
  ) => void;

  onAdd: () => void;

  onRefresh: () => void;

  onExport: () => void;

  children?: React.ReactNode;

}

export default function CustomerToolbar({

  search,

  onSearch,

  onAdd,

  onRefresh,

  onExport,

  children,

}: Props) {

  return (

    <div

      style={{

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        gap: 20,

        marginBottom: 24,

        flexWrap: "wrap",

      }}

    >

      <input

        placeholder="Search customer..."

        value={search}

        onChange={(e)=>

          onSearch(
            e.target.value
          )

        }

        style={{

          flex: 1,

          minWidth: 280,

          padding: 12,

          borderRadius: 10,

          border:
            "1px solid #d1d5db",

        }}

      />

      <div

        style={{

          display: "flex",

          gap: 10,

        }}

      >

        {children}

        <button onClick={onRefresh}>
          Refresh
        </button>

        <button onClick={onExport}>
          Export
        </button>

        <button onClick={onAdd}>
          + Customer
        </button>

      </div>

    </div>

  );

}