import React from "react";

type _ChatSelect = {
  name: string;
  latestMessage: string;
  latestMessageTime: string;
};

export default function ChatSelect({ name, latestMessage, latestMessageTime }: _ChatSelect) {
  return (
    <button className="flex flex-col w-full p-4 items-start hover:bg-chat-hover hover:cursor-pointer">
      <div className="flex flex-row justify-between w-full">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm text-secondary-text">{latestMessageTime}</p>
      </div>
      <p className="text-xs">{latestMessage}</p>
    </button>
  );
}
