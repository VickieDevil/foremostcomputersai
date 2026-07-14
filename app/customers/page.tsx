"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import PageContainer from "@/components/layout/PageContainer";

import CustomerToolbar from "@/components/customer/CustomerToolbar";
import CustomerStats from "@/components/customer/CustomerStats";
import CustomerList from "@/components/customer/CustomerList";
import CustomerTable from "@/components/customer/CustomerTable";
import CustomerPagination from "@/components/customer/CustomerPagination";
import CustomerViewToggle from "@/components/customer/CustomerViewToggle";
import CustomerEmpty from "@/components/customer/CustomerEmpty";

import { useCustomer } from "@/hooks/useCustomer";

export default function CustomersPage() {
  const router = useRouter();

  const {
    customers,
    loading,
    reload,
  } = useCustomer();

  const [search, setSearch] = useState("");

  const [view, setView] = useState<"grid" | "table">(
    "grid"
  );

  const [page, setPage] = useState(1);

  const pageSize = 10;

  const filteredCustomers = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return customers.filter((customer) => {
      const name = String(
        (customer as any).full_name ??
          customer.name ??
          ""
      ).toLowerCase();

      const mobile = String(
        customer.mobile ?? ""
      );

      return (
        name.includes(keyword) ||
        mobile.includes(keyword)
      );
    });
  }, [customers, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCustomers.length / pageSize
    )
  );

  const paginatedCustomers =
    filteredCustomers.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

  const total = customers.length;

  const active = customers.filter(
    (c) =>
      (c.status ?? "") === "Active"
  ).length;

  const pending = customers.filter(
    (c) =>
      (c.status ?? "") === "Pending"
  ).length;

  const blocked = customers.filter(
    (c) =>
      (c.status ?? "") === "Blocked"
  ).length;

  return (
    <PageContainer
      title="Customers"
      subtitle="Manage all customer records"
    >
      <CustomerToolbar
        search={search}
        onSearch={(value) => {
          setSearch(value);
          setPage(1);
        }}
        onAdd={() =>
          router.push("/customers/add")
        }
        onRefresh={reload}
        onExport={() => {
          console.log(
            "Export customers"
          );
        }}
      >
        <CustomerViewToggle
          view={view}
          onChange={setView}
        />
      </CustomerToolbar>

      <CustomerStats
        total={total}
        active={active}
        pending={pending}
        blocked={blocked}
      />

      <div
        style={{
          marginTop: 24,
        }}
      >
        {loading ? (
          <div
            style={{
              padding: 40,
              textAlign: "center",
            }}
          >
            Loading customers...
          </div>
        ) : filteredCustomers.length === 0 ? (
          <CustomerEmpty />
        ) : view === "grid" ? (
          <CustomerList
            customers={paginatedCustomers}
          />
        ) : (
          <CustomerTable
            customers={paginatedCustomers}
          />
        )}
      </div>

      {!loading &&
        filteredCustomers.length > 0 && (
          <CustomerPagination
            page={page}
            totalPages={totalPages}
            onChange={setPage}
          />
        )}
    </PageContainer>
  );
}