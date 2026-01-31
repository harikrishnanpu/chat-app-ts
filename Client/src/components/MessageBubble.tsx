import { Message } from "../types/chat.types";

interface Props {
  message: Message;
  isOwn: boolean;
}

export const MessageBubble = ({ message, isOwn }: Props) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-md px-4 py-2 rounded-2xl ${
          isOwn
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-800 shadow"
        }`}
      >
        <p>{message.text}</p>
        <span className="block text-xs mt-1 opacity-70">
          {new Date(message.createdAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};
