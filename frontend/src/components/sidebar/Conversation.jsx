import React, { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const [isMobile,setIsMobile]=useState(true)
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers}=useSocketContext()
  // console.log(onlineU sers);
  const isOnline=onlineUsers.includes(conversation._id)



  // calculate window
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div className="mt-10">
      <div
        className={`flex items-center justify-between rounded hover:bg-purple-500 cursor-pointer ${
          isSelected ? "bg-purple-500" : ""
        }`}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="flex flex-col md:flow-row items-center">
          <div className={`avatar ${isOnline?"online":""}`}>
            <div className="w-12 md:w-20 rounded-full">
              <img src={conversation.profilePic} />
            </div>
          </div>
          <div className="">
            <span className=" md:ml-3 md:text-xl font-semibold">
              {isMobile?(
                conversation.userName.length<6?conversation.userName:conversation.userName.substring(0,5)+"..."
              ):conversation.userName}
            </span>
          </div>
        </div>

        <div className="hidden md:block">
          <p className="text-2xl">{emoji}</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
