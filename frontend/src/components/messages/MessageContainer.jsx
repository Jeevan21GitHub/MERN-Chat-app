import React from "react";
import Messages from "../messages/Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <section className="overflow-hidden h-[100vh] bg-purple-200">
      {noChatSelected ? (
        <div>
          <div className="py-5 bg-purple-500">
            <p className="ml-5 text-2xl font-semibold text-purple-100">
              To:<span className="ml-2 ">Jeevan</span>
            </p>
          </div>
          <div className=" overflow-auto scrollbar-hide h-[80vh]">
            <Messages />
          </div>
          <div>
            <MessageInput />
          </div>
        </div>
      ) : (
        <div>
          <NoChatSelected />
        </div>
      )}
    </section>
  );
};

const NoChatSelected = () => {
  return (
    <section className="bg-purple-200">
      <div className="flex justify-center h-[100vh]">
        <p className="my-auto text-4xl font-bold text-purple-950">Welcome Zoe Jones 🖖 Select a chat to start messaging</p>
      </div>
    </section>
  );
};

export default MessageContainer;