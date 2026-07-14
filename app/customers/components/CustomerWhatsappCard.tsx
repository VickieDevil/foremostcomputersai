"use client";

interface Props {
  unread?: number;
}

export default function CustomerWhatsappCard({
  unread = 0,
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>WhatsApp</h3>

      <p>
        Unread Messages : {unread}
      </p>
    </div>
  );
}