"use client";
import React, { useEffect, useRef, useState } from "react";
import ChatFrom from "./ChatFrom";
import ChatTo from "./ChatTo";
import _Message from "../../Models/Message";
import { BiSolidArrowToBottom } from "react-icons/bi";
import _Position from "@/app/Models/Position";
import PopUpAtCursor from "../PopUpAtCursor";

type _ChatContainer = {
  messages?: _Message[];
};

type _MenuItems = {
  title?: string;
  action?: (e: React.MouseEvent) => void;
};

export default function ChatContainer({ messages }: _ChatContainer) {
  // Temp
  const senderId = "RR23-2";

  // Fixed
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldReverse, setShouldReverse] = useState(true);
  const [popUpPos, setPopUpPos] = useState<_Position | null>(null);
  const [actionMenu, setActionMenu] = useState<_MenuItems[] | null>(null);
  const RecipientActions: _MenuItems[] = [
    {
      title: "Reply",
      action: () => {},
    },
    {
      title: "Copy",
      action: () => {},
    },
    {
      title: "Delete",
      action: () => {},
    },
  ];

  const SenderActions: _MenuItems[] = [
    {
      title: "Reply",
      action: () => {},
    },
    {
      title: "Copy",
      action: () => {},
    },
    {
      title: "Unsend",
      action: () => {},
    },
    {
      title: "Delete",
      action: () => {},
    },
  ];

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const isAtBottom = el.scrollTop === 0;
    setIsScrolled(!isAtBottom);
  };

  const scrollToBottom = () => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showPopUpTo = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopUpPos({ x: e.clientX, y: e.clientY });
    setActionMenu(SenderActions);
  };

  const showPopUpFrom = (e: React.MouseEvent) => {
    e.preventDefault();
    setPopUpPos({ x: e.clientX, y: e.clientY });
    setActionMenu(RecipientActions);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const isOverflowing = el.scrollHeight > el.clientHeight;
    if (!isOverflowing) {
      messages?.reverse();
    }
    setShouldReverse(isOverflowing);
  }, [messages]);

  return (
    <div className="relative flex-1 w-full min-h-0">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`flex ${
          shouldReverse ? "flex-col-reverse" : "flex-col"
        } gap-2 p-4 size-full overflow-auto`}
      >
        {messages?.map((c) =>
          c.senderId === senderId ? (
            <ChatTo showPopUp={showPopUpTo} message={c} />
          ) : (
            <ChatFrom showPopUp={showPopUpFrom} message={c} />
          )
        )}
      </div>
      <button
        onClick={scrollToBottom}
        className={`p-2 bg-background rounded-full drop-shadow-xl absolute left-1/2 -translate-x-1/2 bottom-4 hover:cursor-pointer hover:bg-chat-hover ${
          isScrolled ? "inline" : "hidden"
        }`}
      >
        <BiSolidArrowToBottom className="size-6" />
      </button>
      {popUpPos && (
        <PopUpAtCursor
          position={popUpPos}
          onClose={() => {
            setPopUpPos(null);
          }}
        >
          <div className="flex flex-col">
            {actionMenu?.map((a) => (
              <button className="text-start text-xs p-2 w-full hover:cursor-pointer hover:bg-chat-active">
                {a.title}
              </button>
            ))}
          </div>
        </PopUpAtCursor>
      )}
    </div>
  );
}
