"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCustomer } from "../../../../hooks/useCustomer";

export default function EditCustomerPage() {
  const { id } = useParams();
  const router = useRouter();

  const {
    customer,
    loading,
    getCustomerById,
    updateCustomer,
  } = useCustomer();

  const [formData, setFormData] = useState({
    full_name: "",
    mobile: "",
    email: "",
    address: "",
    aadhaar: "",
    pan: "",
    dob: "",
    gender: "",
    status: "Active",
  });

  useEffect(() => {
    if (id) {
      getCustomerById(id as string);
    }
  }, [id]);

  useEffect(() => {
    if (customer) {
      setFormData({
        full_name: customer.full_name || "",
        mobile: customer.mobile || "",
        email: customer.email || "",
        address: customer.address || "",
        aadhaar: customer.aadhaar || "",
        pan: customer.pan || "",
        dob: customer.dob || "",
        gender: customer.gender || "",
        status: customer.status || "Active",
      });
    }
  }, [customer]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const ok = await updateCustomer(
      id as string,
      formData
    );

    if (ok) {
      router.push("/customers");
    }
  }

  if (loading) {
    return (
      <div style={{ padding: 30 }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        background: "#fff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 3px 10px rgba(0,0,0,.1)",
      }}
    >
      <h2>Edit Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="aadhaar"
          placeholder="Aadhaar"
          value={formData.aadhaar}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="pan"
          placeholder="PAN"
          value={formData.pan}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {loading ? "Updating..." : "Update Customer"}
        </button>
      </form>
    </div>
  );
}