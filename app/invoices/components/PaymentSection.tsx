"use client";

import React from "react";

import {
  PaymentMethod,
  InvoiceStatus,
} from "../../../types/invoice";

interface Props {
  paymentMethod: PaymentMethod;

  status: InvoiceStatus;

  remarks: string;

  onPaymentMethodChange: (
    value: PaymentMethod
  ) => void;

  onStatusChange: (
    value: InvoiceStatus
  ) => void;

  onRemarksChange: (
    value: string
  ) => void;

  children?: React.ReactNode;
}

const paymentMethods: PaymentMethod[] = [
  "Cash",
  "UPI",
  "Card",
  "Bank Transfer",
  "Cheque",
];

const statusList: InvoiceStatus[] = [
  "Draft",
  "Pending",
  "Paid",
  "Partially Paid",
  "Cancelled",
];

export default function PaymentSection({
  paymentMethod,
  status,
  remarks,
  onPaymentMethodChange,
  onStatusChange,
  onRemarksChange,
  children,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        marginTop: 20,
        borderRadius: 12,
        boxShadow:
          "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 20,
        }}
      >
        Payment Details
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: 20,
        }}
      >
        <div>
          <label>
            Payment Method
          </label>

          <select
            value={paymentMethod}
            onChange={(e) =>
              onPaymentMethodChange(
                e.target
                  .value as PaymentMethod
              )
            }
            style={inputStyle}
          >
            {paymentMethods.map(
              (method) => (
                <option
                  key={method}
                  value={method}
                >
                  {method}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label>Status</label>

          <select
            value={status}
            onChange={(e) =>
              onStatusChange(
                e.target
                  .value as InvoiceStatus
              )
            }
            style={inputStyle}
          >
            {statusList.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
        }}
      >
        <label>
          Remarks
        </label>

        <textarea
          value={remarks}
          onChange={(e) =>
            onRemarksChange(
              e.target.value
            )
          }
          rows={4}
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
        />
      </div>

      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 10,
  borderRadius: 8,
  border: "1px solid #d1d5db",
  marginTop: 6,
};