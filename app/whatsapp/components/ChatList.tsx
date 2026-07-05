"use client";

import { useMemo, useState } from "react";

import ChatItem from "./ChatItem";

import {
  WhatsappContact,
} from "@/types/whatsapp";

interface Props {

  contacts: WhatsappContact[];

  selectedId: string;

  onSelect: (
    id: string
  ) => void;

}

export default function ChatList({

  contacts,

  selectedId,

  onSelect,

}: Props) {

  const [
    search,
    setSearch,
  ] = useState("");

  const filteredContacts =
    useMemo(() => {

      return contacts.filter(
        (contact) =>

          contact.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          contact.mobile.includes(
            search
          )

      );

    }, [
      contacts,
      search,
    ]);

  return (

    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >

      <div
        style={{
          padding: 15,
          borderBottom:
            "1px solid #eee",
        }}
      >

        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="Search Customer..."
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border:
              "1px solid #ddd",
          }}
        />

      </div>

      <div
        style={{
          overflowY: "auto",
          flex: 1,
        }}
      >

        {filteredContacts.map(
          (contact) => (

            <ChatItem

              key={contact.id}

              customer={{

                id: contact.id,

                name:
                  contact.name,

                mobile:
                  contact.mobile,

                lastMessage:
                  "Tap to open conversation",

                unread: 0,

                time: "",

                online:
                  !contact.is_blocked,

              }}

              active={
                selectedId ===
                contact.id
              }

              onSelect={() =>
                onSelect(
                  contact.id
                )
              }

            />

          )
        )}

        {filteredContacts.length ===
          0 && (

          <div
            style={{
              padding: 20,
              textAlign:
                "center",
              color: "#888",
            }}
          >
            No contacts found.
          </div>

        )}

      </div>

    </div>

  );

}