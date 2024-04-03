import React from 'react'
import SearchInput from "../sidebar/SearchInput"
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <section className='pl-4 pr-10 min-h-[100vh] bg-purple-100 '>
      <div className=''>
        <h3 className='pt-5 text-3xl font-bold text-purple-950'>Chats</h3>
      </div>
      <div>
        <SearchInput/>
      </div>
      <div className="overflow-auto scrollbar-hide h-[72vh] ">
        <Conversations/>
      </div>
      <div>
        <LogoutButton/>
      </div>
    </section>
  )
}

export default Sidebar