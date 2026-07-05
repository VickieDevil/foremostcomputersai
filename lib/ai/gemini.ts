import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "../config/env";

const genAI = new GoogleGenerativeAI(
  ENV.GEMINI_API_KEY
);

export async function generateReply(
  customerMessage: string
): Promise<string> {
  try {
    const model =
  genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

    const prompt = `
You are AI Assistant of Foremost Computers.

Reply politely.

Customer Message:

${customerMessage}

Keep reply under 80 words.
`;

    const result =
      await model.generateContent(prompt);

    return (
      result.response.text() ||
      "Thank you."
    );
  } catch (error) {
    console.error(error);

    return "Sorry, AI unavailable.";
  }
}