"use client";

import { useState } from "react";

import {
  WhatsappMessage,
} from "../types/whatsapp";

import {
  whatsappService,
} from "../services/whatsapp.service";

export function useWhatsapp() {
  const [messages, setMessages] =
    useState<WhatsappMessage[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadMessages(
    customerId: string
  ) {
    setLoading(true);

    const data =
      await whatsappService.getMessages(
        customerId
      );

    setMessages(data);

    setLoading(false);
  }

  async function sendMessage(
    data: WhatsappMessage
  ) {
    return whatsappService.sendMessage(
      data
    );
  }

  return {
    messages,
    loading,
    loadMessages,
    sendMessage,
  };
}