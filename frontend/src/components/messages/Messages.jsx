import React, { useEffect, useRef } from 'react'
import Message from '../messages/Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeleton/MessageSkeleton'
import useListenMessage from '../../hooks/useListenMessage'
const Messages = () => {
  const {messages,loading}=useGetMessages()
  // console.log(messages);
  useListenMessage()
  const lastMessageRef=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({'behavior':'smooth'})
    },100) 
  },[messages])
  return (
    <div className='px-32 mt-2'>
      {
        messages&&messages.length>0&&messages.map((message)=>(
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      }
      {
        loading&&[...Array(3)].map((_,inx) => <MessageSkeleton key={inx} />)
      }
      {
        !loading&&messages.length===0&&(
          <p className='text-center'>Send a message to start the conversation</p>
        )
      }
      
    </div>
  )
}

export default Messages