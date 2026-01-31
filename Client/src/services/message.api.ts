
import { api } from "../lib/axios";

export const sendMessageApi = async (
  conversationId: string,
  text: string
): Promise<Message> => {
  const res = await api.post("/messages", {
    conversationId,
    text,
  });
  return res.data;
};