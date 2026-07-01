"use client";

import { useState } from "react";

import { ChatMessage } from "@/types/message";

export function useMessages() {

  const [messages, setMessages] =
    useState<ChatMessage[]>([]);

  function addMessage(

    from: "customer" | "me",

    text: string

  ) {

    setMessages(old => [

      ...old,

      {

        id: Date.now(),

        from,

        text,

        createdAt:
          new Date().toISOString()

      }

    ]);

  }

  return {

    messages,

    addMessage

  };

}