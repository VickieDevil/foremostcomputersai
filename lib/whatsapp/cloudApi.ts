import { ENV } from "../config/env";

export class WhatsappCloudAPI {
  async sendText(
    to: string,
    message: string
  ) {
    console.log(
      "Sending WhatsApp",
      to,
      message
    );

    /*
      Meta Cloud API
      Integration
      */

    return {
      success: true,
    };
  }
}

export const whatsappCloud =
  new WhatsappCloudAPI();