import { Schema, model, Types } from "mongoose";

const ConversationSchema = new Schema(
  {
    participants: [{ type: Types.ObjectId, ref: "User" }],
    lastMessage: {
      text: String,
      timestamp: Date,
    },
    unreadCount: [
      {
        userId: { type: Types.ObjectId, ref: "User" },
        count: Number,
      },
    ],
  },
  { timestamps: true }
);

export const ConversationModel = model(
  "Conversation",
  ConversationSchema
);
