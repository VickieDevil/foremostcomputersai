"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  whatsappService,
} from "@/services/whatsapp.service";

import {
  useWhatsappStore,
} from "@/store";

export function useMessages(
  contactId: string
) {

  const {

    messages,

    setMessages,

    setActiveChat,

  } =
    useWhatsappStore();

  const [

    loading,

    setLoading,

  ] =
    useState(true);

  const [

    sending,

    setSending,

  ] =
    useState(false);

  const loadMessages =
    useCallback(async () => {

      if (!contactId) {

        setMessages([]);

        setLoading(false);

        return;

      }

      setLoading(true);

      try {

        const response =
          await whatsappService.getMessages(
            contactId
          );

        setMessages(
          response.data
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }, [
      contactId,
      setMessages,
    ]);

  async function send(
    text: string
  ) {

    if (
      !text.trim()
    )
      return;

    try {

      setSending(true);

      await whatsappService.sendMessage(
        contactId,
        text
      );

      setActiveChat(
        contactId
      );

      await loadMessages();

    } catch (error) {

      console.error(error);

    } finally {

      setSending(false);

    }

  }

  useEffect(() => {

    loadMessages();

  }, [loadMessages]);

  return {

    messages,

    loading,

    sending,

    reload:
      loadMessages,

    send,

  };

}