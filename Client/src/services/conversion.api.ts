
import { api } from "../lib/axios";

export const fetchConversations = async (): Promise<Conversation[]> => {
  const res = await api.get("/conversations");
  return res.data;
};

export const fetchMessages = async (
  conversationId: string
) => {
  const res = await api.get(
    `/conversations/${conversationId}/messages`
  );
  return res.data;
};