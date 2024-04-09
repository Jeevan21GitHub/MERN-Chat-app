import React from "react";
import Conversation from "../sidebar/Conversation"
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
const Conversations = () => {
  const {loading,conversations}=useGetConversations()
  // console.log(conversations);
  return (
    <section>
      <div className="">
       {
        conversations.map((conversation,index)=>(
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={index===conversations.length-1}
          />
        ))
       }
       {loading?<span className="loading loading-spinner"></span>:null}
        
      </div>
    </section>
  );
};

export default Conversations;
