"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { useCustomer } from "../../../../hooks/useCustomer";
import { useDocument } from "../../../../hooks/useDocument";

import CustomerProfile from "./components/CustomerProfile";
import CustomerStats from "./components/CustomerStats";
import CustomerActions from "./components/CustomerActions";
import CustomerActivities from "./components/CustomerActivities";
import CustomerDocuments from "./components/CustomerDocuments";
import CustomerTimeline from "./components/CustomerTimeline";
import CustomerAISummary from "./components/CustomerAISummary";
import CustomerServices from "./components/CustomerServices";

export default function ViewCustomerPage() {
  const params = useParams();

  const {
    customer,
    loading,
    getCustomerById,
  } = useCustomer();

  const {
    documents,
    loadDocuments,
    deleteDocument,
  } = useDocument();

  useEffect(() => {
    if (params.id) {
      getCustomerById(params.id as string);
      loadDocuments(params.id as string);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
        }}
      >
        <h2>Loading Customer...</h2>
      </div>
    );
  }

  if (!customer) {
    return (
      <div
        style={{
          padding: 40,
          textAlign: "center",
        }}
      >
        <h2>Customer Not Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "30px auto",
        padding: 20,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <CustomerProfile customer={customer} />

      <CustomerStats
        customer={customer}
        documents={documents}
      />

      <CustomerActions customerId={customer.id} />

      <CustomerServices customerId={customer.id} />
      <CustomerActivities customerId={customer.id} />
      <CustomerDocuments
        customerId={customer.id}
        documents={documents}
        deleteDocument={deleteDocument}
      />

      <CustomerTimeline />

      <CustomerAISummary customer={customer} />
    </div>
  );
}