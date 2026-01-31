import type { Request, Response } from "express";
import { MessageModel } from "../models/Message.model.js";
import { ConversationModel } from "../models/Conversation.model.js";


export const getMessages = async (req: Request, res: Response) => {
  const messages = await MessageModel.find({
    conversationId: req.params.id,
  }).sort({ createdAt: 1 });

  res.json(messages);
};

export const sendMessage = async (req: Request, res: Response) => {
  const { conversationId, text } = req.body;
  const senderId = req.user!.userId;

  const message = await MessageModel.create({
    conversationId,
    senderId,
    text,
  });

  await ConversationModel.findByIdAndUpdate(
    conversationId,
    {
      lastMessage: {
        text,
        timestamp: new Date(),
      },
    }
  );


  getIO()
    .to(`conversation:${conversationId}`)
    .emit("receive-message", message);

  res.status(201).json(message);
};