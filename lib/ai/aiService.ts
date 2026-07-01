import { generateReply } from "./gemini";

class AIService {

  async generateReply(
    message: string
  ) {

    return generateReply(message);

  }

}

export const aiService =
  new AIService();