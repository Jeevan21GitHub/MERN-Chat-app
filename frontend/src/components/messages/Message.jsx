import React from "react";
import {useAuthContext} from '../../context/AuthContext'
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser}=useAuthContext()
  const {selectedConversation}=useConversation()
  const formatTime=extractTime(message.createdAt)
  const fromMe=message.senderId===authUser._id;
  const chatClassName=fromMe?"chat-end":"chat-start";
  const profilePic=fromMe?authUser.profilePic:selectedConversation?.profilePic;
  const bubbleColor=fromMe?"bg-blue-500":"bg-grey-500"
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={profilePic}
            />
          </div>
        </div>
        {/* <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div> */}
        <div className={`chat-bubble  ${bubbleColor}`}>{message.message}</div>
        <div className="opacity-50 chat-footer">{formatTime}</div>
      </div>
      
    </div>
  );
};

export default Message;
