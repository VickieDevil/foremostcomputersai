"use client";

import { useRouter } from "next/navigation";

import PageContainer from "@/components/layout/PageContainer";

import CustomerForm from "../components/CustomerForm";

export default function AddCustomerPage() {

  const router = useRouter();

  function handleSuccess() {

    router.push("/customers");

  }

  function handleCancel() {

    router.back();

  }

  return (

    <PageContainer
      title="Add Customer"
      subtitle="Create a new customer profile."
    >

      <CustomerForm

        mode="create"

        onSuccess={handleSuccess}

        onCancel={handleCancel}

      />

    </PageContainer>

  );

}