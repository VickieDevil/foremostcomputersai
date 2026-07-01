import { askGemini } from "./gemini";

export class AIService {
  async generateReply(
    customerName: string,

    history: string,

    message: string
  ) {
    return askGemini({
      customerName,

      history,

      message,
    });
  }
}

export const aiService =
  new AIService();