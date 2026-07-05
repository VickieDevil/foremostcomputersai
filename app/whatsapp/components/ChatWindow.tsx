"use client";

import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageComposer from "./MessageComposer";

import { useMessages } from "@/hooks/useMessages";

interface Props {
  customerId: string;
}

export default function ChatWindow({
  customerId,
}: Props) {

  const {
    messages,
    loading,
    sending,
    send,
  } = useMessages(customerId);

  const bottomRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  return (

    <div
      style={{
        background: "#fff",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid #ddd",
      }}
    >

      <ChatHeader
        customerName={`Customer ${customerId}`}
        mobile=""
        online
      />

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: 20,
          background: "#f5f5f5",
        }}
      >

        {loading &&

          <p>Loading...</p>

        }

        {!loading &&
          messages.length === 0 && (

            <p>No Messages</p>

          )}

        {messages.map((msg) => (

          <MessageBubble

            key={msg.id}

            text={msg.message}

            sender={
              msg.direction ===
              "incoming"
                ? "customer"
                : "me"
            }

            time={
              new Date(
                msg.created_at
              ).toLocaleTimeString()
            }

          />

        ))}

        <div ref={bottomRef} />

      </div>

      <MessageComposer

        onSend={send}

      />

    </div>

  );

}