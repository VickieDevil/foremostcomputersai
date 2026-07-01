"use client";

import { useParams } from "next/navigation";

import ChatWindow from "../../components/ChatWindow";
import CustomerInfo from "../../components/CustomerInfo";
import AIReplyBox from "../../components/AIReplyBox";

import { useState } from "react";

import { aiService } from "../../../../lib/ai/aiService";

export default function WhatsappChatPage() {

  const params = useParams();

  const customerId =
    params.customerId as string;

  const [reply, setReply] =
    useState("");

  const [loadingAI, setLoadingAI] =
    useState(false);

  async function generateAI() {

    setLoadingAI(true);

    const result =
      await aiService.generateReply(
        "Customer asked about PAN Card."
      );

    setReply(result);

    setLoadingAI(false);

  }

  function applyReply() {

    alert(
      "Next Batch me AI reply automatically message box me fill hoga."
    );

  }

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "300px 1fr 350px",
        gap: 20,
        padding: 20,
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >

      <CustomerInfo
        customerId={customerId}
      />

      <ChatWindow
        customerId={customerId}
      />

      <AIReplyBox
        reply={reply}
        loading={loadingAI}
        onGenerate={generateAI}
        onApply={applyReply}
      />

    </div>

  );

}