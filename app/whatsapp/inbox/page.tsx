"use client";

import { useState } from "react";

import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

export default function InboxPage() {
  const [selectedId, setSelectedId] =
    useState("1");

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        gap: 20,
        padding: 25,
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <ChatList
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <ChatWindow
        customerId={selectedId}
      />
    </div>
  );
}