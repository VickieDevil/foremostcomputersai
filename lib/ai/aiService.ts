class AIService {

  async generateReply(
    message: string
  ): Promise<string> {

    const response =
      await fetch(
        "/api/ai/reply",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      );

    const data =
      await response.json();

    if (!data.success) {
      throw new Error(
        data.error
      );
    }

    return data.reply;

  }

}

export const aiService =
  new AIService();