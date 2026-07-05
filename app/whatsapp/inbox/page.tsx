"use client";

import { useEffect, useState } from "react";

import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

import {
  WhatsappContact,
} from "@/types/whatsapp";

import {
  whatsappService,
} from "@/services/whatsapp.service";

export default function InboxPage() {

  const [
    contacts,
    setContacts,
  ] = useState<WhatsappContact[]>([]);

  const [
    selectedId,
    setSelectedId,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(true);

  async function loadContacts() {

    setLoading(true);

    try {

      const data =
        await whatsappService.getContacts();

      setContacts(data);

      if (
        data.length > 0 &&
        !selectedId
      ) {
        setSelectedId(
          data[0].id
        );
      }

    } catch (err) {

      console.error(
        err
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadContacts();

  }, []);

  if (loading) {

    return (
      <div
        style={{
          padding: 40,
        }}
      >
        Loading Contacts...
      </div>
    );

  }

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "340px 1fr",
        gap: 20,
        padding: 25,
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >

      <ChatList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      {

        selectedId && (

          <ChatWindow
            customerId={
              selectedId
            }
          />

        )

      }

    </div>

  );

}