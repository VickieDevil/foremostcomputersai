export type MessageType =
  | "text"
  | "image"
  | "document"
  | "audio"
  | "video"
  | "location"
  | "template";

export type MessageDirection =
  | "incoming"
  | "outgoing";

export type MessageStatus =
  | "sending"
  | "sent"
  | "delivered"
  | "read"
  | "failed";

export interface WhatsappMessage {
  id?: string;

  customer_id: string;

  phone_number: string;

  customer_name?: string;

  message: string;

  message_type: MessageType;

  direction: MessageDirection;

  status: MessageStatus;

  media_url?: string;

  media_name?: string;

  ai_generated?: boolean;

  template_name?: string;

  created_at?: string;

  updated_at?: string;
}

export interface ChatSession {
  customer_id: string;

  customer_name: string;

  phone_number: string;

  last_message: string;

  unread_count: number;

  last_message_time?: string;
}

export interface WhatsappTemplate {
  id?: string;

  name: string;

  category: string;

  language: string;

  body: string;

  variables?: string[];
}