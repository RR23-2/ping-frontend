import { FaCircle } from "react-icons/fa";
import ChatSelect from "./Components/ChatSelect";
import NavigationBar from "./Components/NavigationBar";
import { BsSortDownAlt } from "react-icons/bs";
import { BiSolidSend } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import FromPointer from "./Components/Icons/FromPointer";
import ToPointer from "./Components/Icons/ToPointer";

export default function Home() {
  return (
    <div className="flex flex-row size-full rounded-2xl overflow-hidden gap-[0.2rem]">
      <div className="flex flex-col w-[35%] max-w-[35%] bg-overlay h-full max-h-full">
        <div className="p-4 flex flex-row gap-2 bg-active-chat">
          <input
            className="p-2 bg-background w-full text-sm rounded-lg"
            placeholder="Search..."
            type="text"
          />
          <button className="aspect-square p-2 bg-background rounded-lg">
            <BsSortDownAlt className="size-6 text-dark-blue" />
          </button>
        </div>
        <div className="flex flex-col w-full h-full max-w-full max-h-full overflow-auto">
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
          <ChatSelect />
        </div>
      </div>
      <div className="flex flex-col max-w-full w-full bg-chat-background">
        <div className="w-full flex flex-col p-6 py-4 bg-active-chat">
          <p className="font-bold">A130733</p>
          <span className="text-xs flex flex-row gap-1 items-center">
            <FaCircle className="size-2 text-success" /> Online
          </span>
        </div>
        <div className="flex flex-col gap-2 p-4 min-h-0 flex-1 w-full bg-chat">
          <div className="flex flex-row items-start">
            <FromPointer className="size-5 text-background" />
            <div className="p-2.5 bg-background rounded-lg rounded-tl-none text-sm">
              Dear Ko/Ci NA request internet untuk ruangan A1307
            </div>
          </div>
          <div className="flex flex-row items-end self-end">
            <div className="p-2.5 bg-active-chat rounded-lg rounded-br-none text-sm">
              Oke Wait
            </div>
            <ToPointer className="size-5 text-active-chat" />
          </div>
        </div>
        <div className="p-4 flex flex-row gap-2 bg-active-chat">
          <input
            className="p-2 bg-background w-full rounded-lg text-sm"
            placeholder="Message..."
            type="text"
          />
          <button className="aspect-square p-2 bg-background rounded-lg">
            <RiSendPlane2Fill className="size-6 text-dark-blue" />
          </button>
        </div>
      </div>
    </div>
  );
}
