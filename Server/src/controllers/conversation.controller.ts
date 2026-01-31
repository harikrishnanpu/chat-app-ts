import type { Request, Response } from "express";
import { ConversationModel } from "../models/Conversation.model.js";


export const getConversations = async (req: Request, res: Response) => {
  const conversations = await ConversationModel.find({
    participants: req.user!.userId,
  })
    .populate("participants", "name isOnline")
    .sort({ updatedAt: -1 });

  res.json(conversations);
};