import React, { useEffect } from "react";
import Messages from "../messages/Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation}=useConversation()
  
  useEffect(()=>{
    // cleaning selectedConversation (unmount)
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <section className="overflow-hidden h-[100vh] bg-purple-200">
      {selectedConversation ? (
        <div>
          <div className="py-5 bg-purple-500">
            <p className="ml-5 text-xl md:text-2xl font-semibold text-purple-100 flex items-center">
             <span className=""><img src={selectedConversation.profilePic} alt="ProfilePic" className="h-10 md:h-14" /></span><span className="ml-2 ">{selectedConversation.userName}</span>
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
  const {authUser}=useAuthContext()
  return (
    <section className="bg-purple-200">
      <div className="flex justify-center h-[100vh]">
        <p className="my-auto px-3  md:text-4xl font-bold text-purple-950">Welcome {authUser.userName} 🖖 Select a chat to start messaging</p>
      </div>
    </section>
  );
};

export default MessageContainer;
