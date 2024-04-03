import React from "react";

const Conversation = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <div className="avatar online">
          <div className="w-20 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div><span className="ml-3 text-xl font-semibold">Maria Mehan</span></div>
        </div>
        
        <div>
          <p className="text-2xl">🖖</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
