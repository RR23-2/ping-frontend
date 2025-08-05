import { FaCircle } from "react-icons/fa";
import ChatSelect from "./Components/ChatMenu/ChatSelect";
import NavigationBar from "./Components/NavigationBar";
import { BsSortDownAlt } from "react-icons/bs";
import { BiSolidSend } from "react-icons/bi";
import { RiSendPlane2Fill } from "react-icons/ri";
import FromPointer from "./Components/ChatMenu/FromPointer";
import ToPointer from "./Components/ChatMenu/ToPointer";
import ChatHeader from "./Components/ChatMenu/ChatHeader";
import ChatFrom from "./Components/ChatMenu/ChatFrom";
import ChatTo from "./Components/ChatMenu/ChatTo";
import ChatContainer from "./Components/ChatMenu/ChatContainer";
import _Message from "./Models/Message";

export default function Home() {
  const messages: _Message[] = [
    {
      message: "Copy ko 🙏",
      timeStamp: new Date("2025-07-30T09:16:45"),
      senderId: "A130733",
      messageId: "msg20",
      messageStatus: "Sent",
      repliedMessage: {
        message: "Bisa jadi, ntar aku remote dari RCOMP buat scan.",
        timeStamp: new Date("2025-07-30T09:16:30"),
        senderId: "RR23-2",
        messageId: "msg19",
        messageStatus: "Read",
      },
    },
    {
      message: "Bisa jadi, ntar aku remote dari RCOMP buat scan.",
      timeStamp: new Date("2025-07-30T09:16:30"),
      senderId: "RR23-2",
      messageId: "msg19",
      messageStatus: "Read",
      repliedMessage: {
        message: "Udah dicoba tapi masih, kemungkinan virus?",
        timeStamp: new Date("2025-07-30T09:16:12"),
        senderId: "A130733",
        messageId: "msg18",
        messageStatus: "Read",
      },
    },
    {
      message: "Udah dicoba tapi masih, kemungkinan virus?",
      timeStamp: new Date("2025-07-30T09:16:12"),
      senderId: "A130733",
      messageId: "msg18",
      messageStatus: "Read",
    },
    {
      message: "Coba ganti port USB-nya dulu ya.",
      timeStamp: new Date("2025-07-30T09:15:45"),
      senderId: "RR23-2",
      messageId: "msg17",
      messageStatus: "Read",
    },
    {
      message: "Ko NA, mouse di PC 8 gerak sendiri.",
      timeStamp: new Date("2025-07-30T09:15:12"),
      senderId: "A130733",
      messageId: "msg16",
      messageStatus: "Read",
    },
    {
      message: "Thank you ko 🙏🙏",
      timeStamp: new Date("2025-07-30T09:09:00"),
      senderId: "A130733",
      messageId: "msg15",
      messageStatus: "Read",
    },
    {
      message: "Noted, aku deploy dari RCOMP.",
      timeStamp: new Date("2025-07-30T09:08:45"),
      senderId: "RR23-2",
      messageId: "msg14",
      messageStatus: "Read",
    },
    {
      message: "Office dan VLC, katanya sering nge-lag.",
      timeStamp: new Date("2025-07-30T09:08:22"),
      senderId: "A130733",
      messageId: "msg13",
      messageStatus: "Read",
    },
    {
      message: "Update apa? OS atau app?",
      timeStamp: new Date("2025-07-30T09:08:01"),
      senderId: "RR23-2",
      messageId: "msg12",
      messageStatus: "Read",
    },
    {
      message: "Ko NA, saya juga perlu update software di PC 6.",
      timeStamp: new Date("2025-07-30T09:07:30"),
      senderId: "A130733",
      messageId: "msg11",
      messageStatus: "Read",
    },
    {
      message: "👍",
      timeStamp: new Date("2025-07-30T09:06:10"),
      senderId: "RR23-2",
      messageId: "msg10",
      messageStatus: "Read",
    },
    {
      message: "Makasih banyak ko 🙏",
      timeStamp: new Date("2025-07-30T09:06:00"),
      senderId: "A130733",
      messageId: "msg9",
      messageStatus: "Read",
    },
    {
      message: "Siap, akan diaktifkan sebentar lagi.",
      timeStamp: new Date("2025-07-30T09:05:42"),
      senderId: "RR23-2",
      messageId: "msg8",
      messageStatus: "Read",
    },
    {
      message: "Ko NA, lab A1307 minta request internet.",
      timeStamp: new Date("2025-07-30T09:05:00"),
      senderId: "A130733",
      messageId: "msg7",
      messageStatus: "Read",
    },
    {
      message: "Noted.",
      timeStamp: new Date("2025-07-30T08:15:01"),
      senderId: "RR23-2",
      messageId: "msg6",
      messageStatus: "Read",
    },
    {
      message: "Sekalian ko cek PC 5, keyboardnya gak kebaca.",
      timeStamp: new Date("2025-07-30T08:14:42"),
      senderId: "A130733",
      messageId: "msg5",
      messageStatus: "Read",
    },
    {
      message: "Oke, aku OTW ke lab.",
      timeStamp: new Date("2025-07-30T08:14:10"),
      senderId: "RR23-2",
      messageId: "msg4",
      messageStatus: "Read",
    },
    {
      message: "Iya, kabel udah oke semua.",
      timeStamp: new Date("2025-07-30T08:13:45"),
      senderId: "A130733",
      messageId: "msg3",
      messageStatus: "Read",
    },
    {
      message: "Sudah dicek kabel power-nya?",
      timeStamp: new Date("2025-07-30T08:13:12"),
      senderId: "RR23-2",
      messageId: "msg2",
      messageStatus: "Read",
    },
    {
      message: "Ko NA, PC 12 gak bisa nyala.",
      timeStamp: new Date("2025-07-30T08:12:00"),
      senderId: "A130733",
      messageId: "msg1",
      messageStatus: "Read",
    },
  ];

  return (
    <div className="flex flex-row size-full rounded-2xl overflow-hidden gap-[0.2rem] shadow-2xl">
      <div className="flex flex-col w-[35%] max-w-[35%] bg-chat-background h-full max-h-full">
        <div className="p-4 flex flex-row gap-2 bg-headers">
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
          <ChatSelect
            name="A130733"
            latestMessage="Oke Wait"
            latestMessageTime="10:00 AM"
          />
        </div>
      </div>
      <div className="flex flex-col max-w-full w-full bg-chat-background">
        <ChatHeader />
        <ChatContainer messages={messages} />
        <div className="p-4 flex flex-row gap-2 bg-headers">
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
