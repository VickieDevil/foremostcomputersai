"use client";

import { useEffect, useState } from "react";

import { Customer } from "@/types/customer";
import { useCustomer } from "@/hooks/useCustomer";

type Mode = "create" | "edit";

interface Props {
  mode?: Mode;
  customer?: Customer | null;
  onSuccess?: () => void;
  onCancel?: () => void;
}

interface FormState {
  name: string;
  mobile: string;
  email: string;
  address: string;
  aadhaar: string;
  pan: string;
  status: "Active" | "Pending" | "Blocked";
}

const initialState: FormState = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  aadhaar: "",
  pan: "",
  status: "Active",
};

export default function CustomerForm({
  mode = "create",
  customer,
  onSuccess,
  onCancel,
}: Props) {
  const {
    createCustomer,
    updateCustomer,
    loading,
  } = useCustomer();

  const [form, setForm] =
    useState<FormState>(initialState);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (mode === "edit" && customer) {
      setForm({
        name: customer.name ?? "",
        mobile: customer.mobile ?? "",
        email: customer.email ?? "",
        address: customer.address ?? "",
        aadhaar: customer.aadhaar ?? "",
        pan: customer.pan ?? "",
        status: customer.status ?? "Active",
      });
    }
  }, [mode, customer]);

  function change(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) {
      setError("");
    }
  }

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const data: FormState = {
      name: form.name.trim(),
      mobile: form.mobile.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      aadhaar: form.aadhaar.trim(),
      pan: form.pan.trim().toUpperCase(),
      status: form.status,
    };

    if (data.name.length < 3) {
      setError(
        "Customer name must contain at least 3 characters."
      );
      return;
    }

    if (!/^\d{10}$/.test(data.mobile)) {
      setError(
        "Mobile number must be exactly 10 digits."
      );
      return;
    }

    if (
      data.aadhaar &&
      !/^\d{12}$/.test(data.aadhaar)
    ) {
      setError(
        "Aadhaar number must be exactly 12 digits."
      );
      return;
    }

    if (
      data.pan &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
        data.pan
      )
    ) {
      setError(
        "Invalid PAN number."
      );
      return;
    }

    let success = false;

    if (mode === "create") {
      success =
        await createCustomer(data);
    } else {
      if (!customer) return;

      success =
        await updateCustomer(
          customer.id,
          data
        );
    }

    if (!success) {
      setError(
        "Unable to save customer."
      );
      return;
    }

    if (mode === "create") {
      setForm(initialState);
    }

    onSuccess?.();
  }

  const inputStyle = {
    width: "100%",
    padding: 12,
    border: "1px solid #d1d5db",
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 15,
  };

  return (
    <form
      onSubmit={submit}
      style={{
        maxWidth: 760,
        margin: "0 auto",
        background: "#fff",
        padding: 30,
        borderRadius: 12,
        boxShadow:
          "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 24,
        }}
      >
        {mode === "create"
          ? "Add Customer"
          : "Edit Customer"}
      </h2>

      {error && (
        <div
          style={{
            background: "#fee2e2",
            color: "#b91c1c",
            padding: 12,
            borderRadius: 8,
            marginBottom: 20,
            border:
              "1px solid #fecaca",
          }}
        >
          {error}
        </div>
      )}

      <input
        name="name"
        placeholder="Customer Name"
        value={form.name}
        onChange={change}
        style={inputStyle}
      />

      <input
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={change}
        style={inputStyle}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={change}
        style={inputStyle}
      />

      <input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={change}
        style={inputStyle}
      />

      <input
        name="aadhaar"
        placeholder="Aadhaar Number"
        value={form.aadhaar}
        onChange={change}
        style={inputStyle}
      />

      <input
        name="pan"
        placeholder="PAN Number"
        value={form.pan}
        onChange={change}
        style={inputStyle}
      />

      <select
        name="status"
        value={form.status}
        onChange={change}
        style={inputStyle}
      >
        <option value="Active">
          Active
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="Blocked">
          Blocked
        </option>
      </select>

      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            style={{
              flex: 1,
              padding: 12,
            }}
          >
            Cancel
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            flex: 1,
            padding: 12,
            border: 0,
            borderRadius: 8,
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {loading
            ? "Saving..."
            : mode === "create"
            ? "Create Customer"
            : "Update Customer"}
        </button>
      </div>
    </form>
  );
}