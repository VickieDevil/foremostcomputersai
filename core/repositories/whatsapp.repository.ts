import { BaseRepository } from "./base.repository";

import { TABLES } from "@/constants/database";

import {
  WhatsappChatList,
  WhatsappContact,
  WhatsappMessage,
} from "@/types/whatsapp";

export class WhatsappRepository extends BaseRepository {

  // ===========================
  // CHAT LIST
  // ===========================

  async getChatList(): Promise<WhatsappChatList[]> {

    const { data, error } =
      await this.db
        .from(TABLES.WHATSAPP_CHAT_LIST)
        .select("*")
        .order("last_message_time", {
          ascending: false,
          nullsFirst: false,
        });

    if (error) throw error;

    return (data ?? []) as WhatsappChatList[];
  }

  // ===========================
  // CONTACTS
  // ===========================

  async getContacts(): Promise<WhatsappContact[]> {

    const { data, error } =
      await this.db
        .from(TABLES.WHATSAPP_CONTACTS)
        .select("*")
        .order("name");

    if (error) throw error;

    return (data ?? []) as WhatsappContact[];
  }

  async getContact(
    id: string
  ): Promise<WhatsappContact | null> {

    const { data, error } =
      await this.db
        .from(TABLES.WHATSAPP_CONTACTS)
        .select("*")
        .eq("id", id)
        .single();

    if (error) return null;

    return data as WhatsappContact;
  }

  // ===========================
  // MESSAGES
  // ===========================

  async getMessages(
    contactId: string
  ): Promise<WhatsappMessage[]> {

    const { data, error } =
      await this.db
        .from(TABLES.WHATSAPP_MESSAGES)
        .select("*")
        .eq("contact_id", contactId)
        .order("created_at", {
          ascending: true,
        });

    if (error) throw error;

    return (data ?? []) as WhatsappMessage[];
  }

  async sendMessage(
    contactId: string,
    text: string
  ): Promise<void> {

    const { error } =
      await this.db
        .from(TABLES.WHATSAPP_MESSAGES)
        .insert([
          {
            contact_id: contactId,
            message: text,
            message_type: "text",
            direction: "outgoing",
            sender: "me",
            status: "sent",
          },
        ]);

    if (error) throw error;
  }

  async receiveMessage(
    contactId: string,
    text: string
  ): Promise<void> {

    const { error } =
      await this.db
        .from(TABLES.WHATSAPP_MESSAGES)
        .insert([
          {
            contact_id: contactId,
            message: text,
            message_type: "text",
            direction: "incoming",
            sender: "customer",
            status: "delivered",
          },
        ]);

    if (error) throw error;
  }

}

export const whatsappRepository =
  new WhatsappRepository();