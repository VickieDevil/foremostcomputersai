export interface ChatMessage {
  id: number;

  from: "customer" | "me";

  text: string;

  createdAt?: string;
}