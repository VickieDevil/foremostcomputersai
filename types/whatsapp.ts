export type MessageDirection =
  | "incoming"
  | "outgoing";

export type MessageStatus =
  | "sent"
  | "delivered"
  | "read";

export interface WhatsappContact {
  id: string;

  customer_id: string | null;

  name: string;

  mobile: string;

  country_code: string;

  profile_photo?: string | null;

  about?: string | null;

  last_seen?: string | null;

  is_business: boolean;

  is_blocked: boolean;

  created_at: string;

  updated_at: string;
}

export interface WhatsappMessage {
  id: string;

  contact_id: string;

  meta_message_id?: string | null;

  message_type: string;

  direction: MessageDirection;

  sender: string;

  message: string;

  media_url?: string | null;

  caption?: string | null;

  status: MessageStatus;

  reply_to?: string | null;

  is_starred: boolean;

  is_deleted: boolean;

  delivered_at?: string | null;

  read_at?: string | null;

  created_at: string;
}

/* ===========================
   Chat List View
=========================== */

export interface WhatsappChatList {

  id: string;

  name: string;

  mobile: string;

  country_code: string;

  is_blocked: boolean;

  last_message: string | null;

  last_message_time: string | null;

  total_messages: number;

}