export interface User {
  _id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
}

export interface Conversation {
  _id: string;
  participants: User[];
  lastMessage?: {
    text: string;
    timestamp: string;
  };
  unreadCount: number;
}

export interface Message {
  _id: string;
  senderId: string;
  text: string;
  createdAt: string;
}
