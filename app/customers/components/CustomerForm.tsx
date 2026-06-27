"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useCustomer } from "../../../hooks/useCustomer";
import { CustomerFormData } from "../../../types/customer";

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  marginTop: "6px",
  marginBottom: "15px",
  fontSize: "15px",
  outline: "none",
};

export default function CustomerForm() {
  const { saveCustomer, loading } = useCustomer();

  const [formData, setFormData] = useState<CustomerFormData>({
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

  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    
    alert("Handle Submit Running");

    console.log("Form Submitted");
    console.log(formData);

    const success = await saveCustomer(formData);

    if (success) {
      setMessage("Customer Saved Successfully");

      setFormData({
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
    } else {
      setMessage("Unable To Save Customer");
    }
  };

  return (
    <div
      style={{
        maxWidth: 750,
        margin: "40px auto",
        background: "#fff",
        padding: 30,
        borderRadius: 10,
        boxShadow: "0 3px 12px rgba(0,0,0,.12)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        Add New Customer
      </h2>

      {message && (
        <div
          style={{
            background: "#e0f2fe",
            padding: 12,
            marginBottom: 20,
            borderRadius: 6,
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Number"
          value={formData.aadhaar}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="pan"
          placeholder="PAN Number"
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
        </select>        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "#94a3b8" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Saving Customer..." : "Save Customer"}
        </button>
      </form>
    </div>
  );
}