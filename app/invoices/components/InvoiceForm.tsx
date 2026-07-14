"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import {
  Invoice,
  InvoiceFormData,
  InvoiceItem,
  PaymentMethod,
  InvoiceStatus,
} from "../../../types/invoice";

import { useInvoice } from "../../../hooks/useInvoice";

import { useCustomer } from "../../../hooks/useCustomer";

import CustomerSelector from "./CustomerSelector";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceTotals from "./InvoiceTotals";
import PaymentSection from "./PaymentSection";

interface Props {
  initialData?: Invoice;

  editMode?: boolean;

  onSubmit?: (
    data: Invoice
  ) => Promise<void> | void;

  loading?: boolean;
}

export default function InvoiceForm({
  initialData,
  editMode = false,
  onSubmit,
  loading: externalLoading,
}: Props) {  const router = useRouter();

  const { customers } = useCustomer();

const {
  addInvoice,
  updateInvoice,
  loading,
} = useInvoice();

const saving =
  externalLoading ?? loading;

  const [customerId, setCustomerId] =
    useState("");

  const [customerName, setCustomerName] =
    useState("");

  const [customerMobile, setCustomerMobile] =
    useState("");

  const [customerEmail, setCustomerEmail] =
    useState("");

  const [customerAddress, setCustomerAddress] =
    useState("");

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("Cash");

  const [status, setStatus] =
    useState<InvoiceStatus>("Pending");

  const [remarks, setRemarks] =
    useState("");

  const [items, setItems] = useState<
    InvoiceItem[]
  >([
    {
      service_name: "",
      quantity: 1,
      price: 0,
      gst: 0,
      discount: 0,
      total: 0,
    },
  ]);

  useEffect(() => {
    if (!initialData) return;

    setCustomerId(initialData.customer_id);

    setCustomerName(initialData.customer_name);

    setCustomerMobile(
      initialData.customer_mobile
    );

    setCustomerEmail(
      initialData.customer_email ?? ""
    );

    setCustomerAddress(
      initialData.customer_address ?? ""
    );

    setPaymentMethod(
      initialData.payment_method
    );

    setStatus(initialData.status);

    setRemarks(initialData.remarks ?? "");

    setItems(initialData.items);
  }, [initialData]);

  function onCustomerChange(id: string) {
    setCustomerId(id);

    const customer = customers.find(
      (x) => x.id === id
    );

    if (!customer) return;

    setCustomerName(
  customer.full_name ??
  customer.name ??
  ""
);

    setCustomerMobile(customer.mobile);

    setCustomerEmail(customer.email ?? "");

    setCustomerAddress(
      customer.address ?? ""
    );
  }

  function updateItem(
    index: number,
    field: keyof InvoiceItem,
    value: any
  ) {
    const copy = [...items];

    copy[index] = {
      ...copy[index],
      [field]: value,
    };

    copy[index].total =
      copy[index].quantity *
      copy[index].price;

    copy[index].total +=
      (copy[index].total *
        copy[index].gst) /
      100;

    copy[index].total -=
      copy[index].discount;

    setItems(copy);
  }

  function addRow() {
    setItems([
      ...items,
      {
        service_name: "",
        quantity: 1,
        price: 0,
        gst: 0,
        discount: 0,
        total: 0,
      },
    ]);
  }

  function removeRow(index: number) {
    setItems(
      items.filter((_, i) => i !== index)
    );
  }

  const totals = useMemo(() => {
    let subtotal = 0;

    let gst = 0;

    let discount = 0;

    items.forEach((item) => {
      subtotal +=
        item.quantity * item.price;

      gst +=
        (item.quantity *
          item.price *
          item.gst) /
        100;

      discount += item.discount;
    });

    const grand =
      subtotal + gst - discount;

    return {
      subtotal,
      gst,
      discount,
      grand,
    };
  }, [items]);
    async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!customerId) {
      alert("Please Select Customer");
      return;
    }

    if (
      items.some(
        (item) =>
          !item.service_name.trim()
      )
    ) {
      alert(
        "Service Name is Required."
      );
      return;
    }

    const form: InvoiceFormData = {
      customer_id: customerId,

      customer_name: customerName,

      customer_mobile: customerMobile,

      customer_email: customerEmail,

      customer_address:
        customerAddress,

      items,

      payment_method:
        paymentMethod,

      remarks,

      status,
    };

if (onSubmit) {
  await onSubmit({
    ...(initialData ?? {}),
    ...form,
  } as Invoice);

  router.push("/invoices");

  return;
}

let ok = false;

if (
  editMode &&
  initialData?.id
) {
  ok = await updateInvoice(
    initialData.id,
    form
  );
} else {
  ok = await addInvoice(form);
}

if (!ok) return;

alert(
  editMode
    ? "Invoice Updated Successfully"
    : "Invoice Created Successfully"
);

router.push("/invoices");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <CustomerSelector
        customers={customers}
        value={customerId}
        onChange={
          onCustomerChange
        }
      />

      <InvoiceItemsTable
        items={items}
        updateItem={
          updateItem
        }
        addRow={addRow}
        removeRow={
          removeRow
        }
      />

      <InvoiceTotals
        subtotal={
          totals.subtotal
        }
        gst={totals.gst}
        discount={
          totals.discount
        }
        grandTotal={
          totals.grand
        }
      />

      <PaymentSection
        paymentMethod={
          paymentMethod
        }
        status={status}
        remarks={remarks}
        onPaymentMethodChange={
          setPaymentMethod
        }
        onStatusChange={
          setStatus
        }
        onRemarksChange={
          setRemarks
        }
      >        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 20,
          }}
        >
          <button
            type="button"
            onClick={() =>
              router.push("/invoices")
            }
            style={{
              padding: "12px 20px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              background: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            style={{
              padding: "12px 22px",
              borderRadius: 8,
              border: "none",
              background: "#2563eb",
              color: "#fff",
              cursor: saving
                ? "wait"
                : "pointer",
              fontWeight: 600,
            }}
          >
            {saving
              ? "Saving..."
              : editMode
              ? "Update Invoice"
              : "Create Invoice"}
          </button>
        </div>
      </PaymentSection>
    </form>
  );
}