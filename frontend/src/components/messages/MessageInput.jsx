import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <section>
      <div className="flex items-center justify-center mt-1">
        <div className="w-9/12">
          <input
            type="text"
            placeholder="Type here"
            className="w-full rounded-r-none rounded-l-2xl input input-bordered "
          />
        </div>
        <div className="flex justify-start w-20 p-3 text-2xl text-white bg-purple-500 rounded-r-2xl hover:bg-purple-600">
          <IoIosSend className='duration-300 scale-125 hover:scale-150 hover:translate-x-6' />
        </div>
      </div>
    </section>
  )
}

export default MessageInput