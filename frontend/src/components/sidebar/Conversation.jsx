import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers}=useSocketContext()
  // console.log(onlineU sers);
  const isOnline=onlineUsers.includes(conversation._id)
  return (
    <div className="mt-10">
      <div
        className={`flex items-center justify-between rounded hover:bg-purple-500 cursor-pointer ${
          isSelected ? "bg-purple-500" : ""
        }`}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="flex items-center">
          <div className={`avatar ${isOnline?"online":""}`}>
            <div className="w-20 rounded-full">
              <img src={conversation.profilePic} />
            </div>
          </div>
          <div>
            <span className="ml-3 text-xl font-semibold">
              {conversation.userName}
            </span>
          </div>
        </div>

        <div>
          <p className="text-2xl">{emoji}</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
