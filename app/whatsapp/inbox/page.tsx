"use client";

import { useEffect } from "react";

import { useWhatsapp } from "../../../hooks/useWhatsapp";

export default function InboxPage() {
  const {
    messages,

    loading,

    loadMessages,
  } = useWhatsapp();

  useEffect(() => {
    loadMessages("demo");
  }, []);

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <h1>
        WhatsApp Inbox
      </h1>

      {loading && (
        <p>
          Loading...
        </p>
      )}

      {!loading &&
        messages.length ===
          0 && (
          <div>
            No Messages Yet
          </div>
        )}

      {messages.map(
        (message) => (
          <div
            key={message.id}
            style={{
              padding: 15,

              border:
                "1px solid #ddd",

              marginBottom: 12,

              borderRadius: 8,
            }}
          >
            <strong>
              {
                message.customer_name
              }
            </strong>

            <div>
              {
                message.message
              }
            </div>

            <small>
              {
                message.status
              }
            </small>
          </div>
        )
      )}
    </div>
  );
}