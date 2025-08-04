type _Message = {
    messageId: string;
    message: string;
    senderId: string;
    timeStamp: Date;
    messageStatus: _MessageStatus;
}

type _MessageStatus = "Sent" | "Read" | "Sending";

export default _Message;