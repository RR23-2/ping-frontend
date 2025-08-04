import React from "react";
import { FaCircle } from "react-icons/fa";

export default function ChatHeader() {
  return (
    <div className="w-full flex flex-col p-6 py-4 bg-headers">
      <p className="font-bold">A130733</p>
      <span className="text-xs flex flex-row gap-1 items-center">
        <FaCircle className="size-2 text-online" /> Online
      </span>
    </div>
  );
}
