"use client";

import { useState } from "react";
import { useActivity } from "../../../../../hooks/useActivity";

interface Props {
  customerId: string;
}

const ACTIVITY_TYPES = [
  "Aadhaar New",
  "Aadhaar Update",
  "PAN New",
  "PAN Correction",
  "Voter ID",
  "Ayushman Card",
  "ABHA Card",
  "Passport",
  "Driving Licence",
  "Birth Certificate",
  "Income Certificate",
  "Caste Certificate",
  "Domicile Certificate",
  "Labour Card",
  "E-Shram Card",
  "Police Verification",
  "Electricity Bill",
  "Bank Account",
  "Insurance",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  border: "1px solid #d1d5db",
  borderRadius: 8,
  marginBottom: 15,
  fontSize: 15,
};

export default function ActivityForm({
  customerId,
}: Props) {
  const { addActivity, loading } = useActivity(customerId);

  const [activityType, setActivityType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const ok = await addActivity({
      customer_id: customerId,
      activity_type: activityType,
      title,
      description,
    });

    if (!ok) return;

    setActivityType("");
    setTitle("");
    setDescription("");
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 12,
        marginTop: 25,
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        ➕ Add Activity
      </h2>

      <form onSubmit={handleSubmit}>
        <select
          style={inputStyle}
          value={activityType}
          onChange={(e) =>
            setActivityType(e.target.value)
          }
          required
        >
          <option value="">
            Select Activity
          </option>

          {ACTIVITY_TYPES.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        <input
          style={inputStyle}
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <textarea
          style={{
            ...inputStyle,
            height: 120,
            resize: "vertical",
          }}
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          {loading
            ? "Saving..."
            : "Save Activity"}
        </button>
      </form>
    </div>
  );
}