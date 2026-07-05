import { NextResponse } from "next/server";

import { generateReply } from "../../../../lib/ai/gemini";

export async function POST(
  request: Request
) {
  try {
    const body = await request.json();

    const message =
      body.message ?? "";

    if (!message.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Message is required",
        },
        {
          status: 400,
        }
      );
    }

    const reply =
      await generateReply(message);

    return NextResponse.json({
      success: true,
      reply,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "AI Server Error",
      },
      {
        status: 500,
      }
    );

  }
}