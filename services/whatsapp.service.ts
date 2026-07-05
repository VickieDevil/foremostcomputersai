import {
  successResponse,
} from "@/core/api/ApiResponse";

import {
  createApiError,
} from "@/core/api/ApiError";

import { whatsappRepository } from "@/core/repositories/whatsapp.repository";

import { logger } from "@/core/logger/logger";

import { DatabaseError } from "@/core/errors/DatabaseError";

class WhatsappService {

  async getChatList() {

    try {

      return await whatsappRepository.getChatList();

    } catch (error) {

      logger.error(error);

      throw new DatabaseError(
        "Unable to load chat list."
      );

    }

  }

async getContacts() {

  try {

    const contacts =
      await whatsappRepository.getContacts();

    return successResponse(
      contacts,
      "Contacts loaded successfully."
    );

  } catch (error) {

    logger.error(
      error,
      "Unable to load contacts."
    );

    throw createApiError(
      "WHATSAPP_CONTACTS_ERROR",
      "Unable to load contacts.",
      error
    );

  }

}
 async getMessages(
  contactId: string
) {

  try {

    const messages =
      await whatsappRepository.getMessages(
        contactId
      );

    return successResponse(
      messages,
      "Messages loaded successfully."
    );

  } catch (error) {

    logger.error(
      error,
      "Unable to load messages."
    );

    throw createApiError(
      "WHATSAPP_MESSAGES_ERROR",
      "Unable to load messages.",
      error
    );

  }

}
  async sendMessage(
  contactId: string,
  text: string
) {

  try {

    await whatsappRepository.sendMessage(
      contactId,
      text
    );

    return successResponse(
      true,
      "Message sent successfully."
    );

  } catch (error) {

    logger.error(
      error,
      "Unable to send message."
    );

    throw createApiError(
      "WHATSAPP_SEND_ERROR",
      "Unable to send message.",
      error
    );

  }

}

 async receiveMessage(
  contactId: string,
  text: string
) {

  try {

    await whatsappRepository.receiveMessage(
      contactId,
      text
    );

    return successResponse(
      true,
      "Message received successfully."
    );

  } catch (error) {

    logger.error(
      error,
      "Unable to receive message."
    );

    throw createApiError(
      "WHATSAPP_RECEIVE_ERROR",
      "Unable to receive message.",
      error
    );

  }

}
}

export const whatsappService =
  new WhatsappService();