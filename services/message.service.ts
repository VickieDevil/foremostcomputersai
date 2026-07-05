import {
  whatsappService,
} from "./whatsapp.service";

export class MessageService {

  async send(
    contactId: string,
    message: string
  ): Promise<boolean> {

    try {

      return await whatsappService.sendMessage(
        contactId,
        message
      );

    } catch (error) {

      console.error(error);

      return false;

    }

  }

  async receive(
    contactId: string,
    message: string
  ): Promise<boolean> {

    try {

      return await whatsappService.receiveMessage(
        contactId,
        message
      );

    } catch (error) {

      console.error(error);

      return false;

    }

  }

}

export const messageService =
  new MessageService();