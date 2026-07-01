"use client";

import { useState } from "react";
import { aiService } from "@/lib/ai/aiService";

export function useAIReply() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");

  async function generate(message: string) {
    setLoading(true);

    try {
      const result =
        await aiService.generateReply(message);

      setReply(result);

      return result;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    reply,
    generate,
  };
}