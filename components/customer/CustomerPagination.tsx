"use client";

interface Props {

  page: number;

  totalPages: number;

  onChange: (
    page:number
  ) => void;

}

export default function CustomerPagination({

  page,

  totalPages,

  onChange,

}: Props) {

  return (

    <div

      style={{

        display:"flex",

        justifyContent:"center",

        gap:10,

        marginTop:30,

      }}

    >

      <button

        disabled={
          page===1
        }

        onClick={()=>

          onChange(page-1)

        }

      >

        Previous

      </button>

      <strong>

        {page}
        /
        {totalPages}

      </strong>

      <button

        disabled={
          page===totalPages
        }

        onClick={()=>

          onChange(page+1)

        }

      >

        Next

      </button>

    </div>

  );

}