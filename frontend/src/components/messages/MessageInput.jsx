import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    await sendMessage(message);
    setMessage("");
  };

  return (
    <section>
      <form onSubmit={onHandleSubmit}>
        <div className="flex items-center justify-center mt-1">
          <div className="w-9/12">
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-r-none rounded-l-2xl input input-bordered "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="flex justify-start w-20 p-3 text-2xl text-white bg-purple-500 rounded-r-2xl hover:bg-purple-600">
            {!loading ? (
              <IoIosSend className="duration-300 scale-125 hover:scale-150 hover:translate-x-6" />
            ) : (
              <span className="loading loading-spinner"></span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default MessageInput;
