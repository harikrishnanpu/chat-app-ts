import { Server, Socket } from "socket.io";
import http from "http";
import { MessageModel } from "./models/Message.model.js";
import { ConversationModel } from "./models/Conversation.model.js";

let io: Server | null = null;

export const initSocket = (httpServer: http.Server) => {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
      credentials: true,
    },
  });

  io.on("connection", (socket: Socket) => {
    console.log(" Socket connected:", socket.id);

    socket.on("join-user", (userId: string) => {
      socket.join(`user:${userId}`);
      console.log(`User joined room user:${userId}`);
    });

   
    socket.on(
      "join-conversation",
      (conversationId: string) => {
        socket.join(`conversation:${conversationId}`);
        console.log(
          `Joined conversation:${conversationId}`
        );
      }
    );

    socket.on(
      "send-message",
      async ({
        conversationId,
        senderId,
        text,
      }) => {
        // Save message
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

   
        io?.to(`conversation:${conversationId}`).emit(
          "receive-message",
          message
        );
      }
    );

    socket.on("disconnect", () => {
      console.log(" Socket disconnected:", socket.id);
    });
  });

  return io;
};

export const getIO = (): Server => {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }
  return io;
};
