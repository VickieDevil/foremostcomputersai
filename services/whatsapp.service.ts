import {
  WhatsappMessage,
} from "../types/whatsapp";

export class WhatsappService {
  async getChats() {
    return [];
  }

  async getMessages(
    customerId: string
  ) {
    return [];
  }

  async sendMessage(
    data: WhatsappMessage
  ) {
    console.log(data);

    return true;
  }

  async deleteMessage(
    id: string
  ) {
    return true;
  }
}

export const whatsappService =
  new WhatsappService();