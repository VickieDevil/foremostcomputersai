"use client";

import {
  useEffect,
  useState,
  useCallback,
} from "react";

import {
  WhatsappContact,
} from "@/types/whatsapp";

import {
  whatsappService,
} from "@/services/whatsapp.service";

import {
  useWhatsappStore,
} from "@/store";

export function useWhatsapp() {

  const {

    messages,

    setMessages,

    activeChat,

    setActiveChat,

  } = useWhatsappStore();

  const [

    contacts,

    setContacts,

  ] = useState<WhatsappContact[]>([]);

  const [

    selectedContact,

    setSelectedContact,

  ] =
    useState<WhatsappContact | null>(
      null
    );

  const [

    loading,

    setLoading,

  ] = useState(false);

  // ==========================
  // LOAD CONTACTS
  // ==========================

  const loadContacts =
    useCallback(async () => {

      setLoading(true);

      try {

        const response =
          await whatsappService.getContacts();

        setContacts(
          response.data
        );

      } catch (error) {

        console.error(error);

        setContacts([]);

      } finally {

        setLoading(false);

      }

    }, []);

  // ==========================
  // LOAD MESSAGES
  // ==========================

  const loadMessages =
    useCallback(
      async (
        contactId: string
      ) => {

        if (!contactId) {

          setMessages([]);

          return;

        }

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

          setMessages([]);

        }

      },
      [setMessages]
    );

  // ==========================
  // SELECT CONTACT
  // ==========================

  function selectContact(
    contact: WhatsappContact
  ) {

    setSelectedContact(contact);

    setActiveChat(
      contact.id
    );

    loadMessages(
      contact.id
    );

  }

  // ==========================
  // SEND MESSAGE
  // ==========================

  async function sendMessage(
    text: string
  ) {

    if (
      !selectedContact ||
      !text.trim()
    ) {
      return;
    }

    await whatsappService.sendMessage(
      selectedContact.id,
      text
    );

    await loadMessages(
      selectedContact.id
    );

  }

  // ==========================
  // REFRESH
  // ==========================

  async function refresh() {

    await loadContacts();

    if (selectedContact) {

      await loadMessages(
        selectedContact.id
      );

    }

  }

  // ==========================
  // INITIAL LOAD
  // ==========================

  useEffect(() => {

    loadContacts();

  }, [loadContacts]);

  return {

    contacts,

    messages,

    loading,

    activeChat,

    selectedContact,

    selectContact,

    refresh,

    loadContacts,

    loadMessages,

    sendMessage,

  };

}