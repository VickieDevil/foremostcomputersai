export class MessageService {
  async send(
    customerId: string,
    message: string
  ) {
    console.log(
      "Sending Message",
      customerId,
      message
    );

    await new Promise((r) =>
      setTimeout(r, 500)
    );

    return true;
  }
}

export const messageService =
  new MessageService();