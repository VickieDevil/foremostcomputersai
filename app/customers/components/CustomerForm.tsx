"use client";

import { useState } from "react";

export default function CustomerForm() {
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

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  return (

      <div
  style={{
    background: "#fff",
    padding: 30,
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: 700,
    margin: "30px auto",
  }}
>
  <h2>Add New Customer</h2>

  <input
    type="text"
    name="full_name"
    placeholder="Full Name"
    value={formData.full_name}
    onChange={handleChange}
    style={{
      width: "100%",
      padding: 12,
      marginTop: 15,
      marginBottom: 15,
    }}
  />

  <input
    type="text"
    name="mobile"
    placeholder="Mobile Number"
    value={formData.mobile}
    onChange={handleChange}
    style={{
      width: "100%",
      padding: 12,
      marginBottom: 15,
    }}
  />
</div>

  );
}