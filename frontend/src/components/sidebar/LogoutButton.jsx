import React from "react";
import { IoExitOutline } from "react-icons/io5";

const LogoutButton = () => {
  return (
    <div className="w-full mt-1">
      <div className="flex items-center justify-start text-purple-100 ">
        <span className="p-2 text-2xl bg-red-500 rounded-full hover:bg-red-600 ">
          <IoExitOutline className="duration-300 hover:scale-125 hover:translate-x-2" />
        </span>
        
      </div>
    </div>
  );
};

export default LogoutButton;
