import { Conversation } from "../types/chat.types";

interface Props {
  conversation: Conversation;
  selected: boolean;
  onClick: () => void;
}

export const UserListItem = ({
  conversation,
  selected,
  onClick,
}: Props) => {
  const otherUser = conversation.participants[0];

  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer ${
        selected ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex gap-3 items-center">
        <img
          src={otherUser.avatar}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold">{otherUser.name}</h3>
          <p className="text-sm text-gray-500 truncate">
            {conversation.lastMessage?.text}
          </p>
        </div>
        {conversation.unreadCount > 0 && (
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            {conversation.unreadCount}
          </span>
        )}
      </div>
    </div>
  );
};
