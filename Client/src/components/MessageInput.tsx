import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export const MessageInput = ({ onSend }: Props) => {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="p-4 border-t flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        className="flex-1 px-4 py-2 bg-gray-100 rounded-lg"
        placeholder="Type a message..."
      />
      <button
        onClick={send}
        className="bg-blue-500 text-white px-4 rounded-lg"
      >
        Send
      </button>
    </div>
  );
};
