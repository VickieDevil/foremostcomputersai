"use client";

interface Customer {

  id: string;

  name: string;

  mobile: string;

  status: string;

}

interface Props {

  customers: Customer[];

}

export default function CustomerTable({

  customers,

}: Props) {

  return (

    <table

      style={{

        width:"100%",

        borderCollapse:"collapse",

        background:"#fff",

      }}

    >

      <thead>

        <tr>

          <th>Name</th>

          <th>Mobile</th>

          <th>Status</th>

        </tr>

      </thead>

      <tbody>

        {customers.map(customer=>(

          <tr key={customer.id}>

            <td>{customer.name}</td>

            <td>{customer.mobile}</td>

            <td>{customer.status}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}