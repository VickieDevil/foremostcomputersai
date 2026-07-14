"use client";

import { Customer } from "@/types/customer";

interface Props {
  customer: Customer;
}

export default function CustomerTimeline({
  customer,
}: Props) {

  return (

    <div
      style={{
        background:"#fff",
        borderRadius:12,
        padding:20,
      }}
    >

      <h3>Timeline</h3>

      <div
        style={{
          marginTop:15,
          display:"grid",
          gap:12,
        }}
      >

        <div>

          <strong>Created</strong>

          <div>

            {new Date(
              customer.created_at
            ).toLocaleString()}

          </div>

        </div>

        <div>

          <strong>Updated</strong>

          <div>

            {new Date(
              customer.updated_at ??
              customer.created_at
            ).toLocaleString()}

          </div>

        </div>

      </div>

    </div>

  );

}