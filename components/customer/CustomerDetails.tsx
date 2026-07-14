"use client";

import { Customer } from "@/types/customer";

import CustomerInfo from "./CustomerInfo";
import CustomerContact from "./CustomerContact";
import CustomerDocuments from "./CustomerDocuments";
import CustomerNotes from "./CustomerNotes";
import CustomerTimeline from "./CustomerTimeline";

interface Props {
  customer: Customer;
}

export default function CustomerDetails({
  customer,
}: Props) {

  return (

    <div
      style={{
        display:"grid",
        gap:20,
      }}
    >

      <CustomerInfo
        customer={customer}
      />

      <CustomerContact
        customer={customer}
      />

      <CustomerDocuments
        customer={customer}
      />

      <CustomerNotes
        notes={(customer as any).notes}
      />

      <CustomerTimeline
        customer={customer}
      />

    </div>

  );

}