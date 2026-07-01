import {
  SYSTEM_PROMPT,
  buildCustomerPrompt,
} from "./prompt";

export interface GeminiRequest {
  customerName: string;

  history: string;

  message: string;
}

export async function askGemini(
  data: GeminiRequest
): Promise<string> {
  const prompt =
    buildCustomerPrompt(
      data.customerName,
      data.history,
      data.message
    );

  console.log(
    "Gemini Prompt",
    SYSTEM_PROMPT,
    prompt
  );

  /*
    Future:

    Google Gemini API

    const result=await fetch(...)

  */

  return "AI integration coming soon.";
}