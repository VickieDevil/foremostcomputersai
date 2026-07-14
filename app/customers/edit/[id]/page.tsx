"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

import PageContainer from "@/components/layout/PageContainer";

import CustomerForm from "../../components/CustomerForm";

import { useCustomer } from "@/hooks/useCustomer";

export default function EditCustomerPage() {
  const params = useParams();
  const router = useRouter();

  const customerId = params.id as string;

  const {
    customer,
    loading,
    getCustomerById,
  } = useCustomer();

  useEffect(() => {
    if (customerId) {
      getCustomerById(customerId);
    }
  }, [customerId]);

  if (loading) {
    return (
      <div style={{ padding: 40 }}>
        Loading Customer...
      </div>
    );
  }

  if (!customer) {
    return (
      <div style={{ padding: 40 }}>
        Customer Not Found
      </div>
    );
  }

  return (
    <PageContainer
      title="Edit Customer"
      subtitle="Update customer information"
    >
      <CustomerForm
        mode="edit"
        customer={customer}
        onSuccess={() => router.push("/customers")}
        onCancel={() => router.back()}
      />
    </PageContainer>
  );
}