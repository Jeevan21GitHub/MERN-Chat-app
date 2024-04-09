import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from 'react-hot-toast'
const SearchInput = () => {
  const [search,setSearch]=useState("")
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations()
  const onHandleSubmit=(e)=>{
    e.preventDefault()
    if(!search) return;
    if(search.length<3){
      return toast.error("Search term must be at least 3 characters long")
    }
    const conversation=conversations.find((c)=>c.userName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else{
      toast.error("No such user found")
    }
  }
  return (
    <section>
      <form onSubmit={onHandleSubmit}>
        <div className="flex items-center mt-10 ">
          <div className="w-full">
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-r-none rounded-l-2xl input "
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </div>
          <button type="submit" className="p-3 text-2xl text-white bg-purple-500 rounded-r-2xl hover:bg-purple-600">
            <CiSearch className="duration-300 scale-125 hover:scale-150" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
