import React from "react";
import FromPointer from "./FromPointer";
import _Message from "@/app/Models/Message";

type _ChatFrom = {
  message: _Message;
  showPopUp: (e: React.MouseEvent) => void;
};

export default function ChatFrom({ message, showPopUp }: _ChatFrom) {
  return (
    <div
      onContextMenu={showPopUp}
      className="self-start flex flex-row items-start group"
    >
      <FromPointer className="group-hover:text-headers size-3 text-chat-from" />
      <div className="group-hover:bg-headers p-2.5 bg-chat-from rounded-lg rounded-tl-none text-sm flex flex-col gap-2">
        {message.repliedMessage && (
          <div className="bg-background flex-col flex p-2 rounded-lg">
            <p className="font-bold text-xs">
              {message.repliedMessage.senderId}
            </p>
            <p className="text-xs">{message.repliedMessage.message}</p>
          </div>
        )}
        {message.message}
      </div>
      <p className="text-sm text-secondary-text pl-2 self-end">
        {message.timeStamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    </div>
  );
}
