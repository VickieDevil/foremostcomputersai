import {
  whatsappService,
} from "./whatsapp.service";

export class MessageService {

  async send(
    contactId: string,
    message: string
  ): Promise<boolean> {

    try {

      const response =
        await whatsappService.sendMessage(
          contactId,
          message
        );

      return response.data;

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

      const response =
        await whatsappService.receiveMessage(
          contactId,
          message
        );

      return response.data;

    } catch (error) {

      console.error(error);

      return false;

    }

  }

}

export const messageService =
  new MessageService();