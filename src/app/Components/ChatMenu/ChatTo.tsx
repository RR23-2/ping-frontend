import React from "react";
import ToPointer from "./ToPointer";
import _Message from "@/app/Models/Message";

type _ChatTo = {
  message: _Message;
  showPopUp: (e: React.MouseEvent) => void;
};

export default function ChatTo({ message, showPopUp }: _ChatTo) {
  return (
    <div onContextMenu={showPopUp} className="flex flex-row items-end self-end group">
      <div className="flex flex-col pr-2 items-end">
        <p className="text-sm text-secondary-text ">{message.messageStatus}</p>
        <p className="text-sm text-secondary-text">
          {message.timeStamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
      <div className="p-2.5 bg-chat-to rounded-lg rounded-br-none text-sm group-hover:bg-headers">
        {message.message}
      </div>
      <ToPointer className="size-3 text-chat-to group-hover:text-headers" />
    </div>
  );
}
