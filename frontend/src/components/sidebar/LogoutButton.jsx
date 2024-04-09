import React from "react";
import { IoExitOutline } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="w-full mt-1">
      <div className="flex items-center justify-start text-purple-100 ">
        {!loading ? (
          <span
            className="p-2 text-2xl bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
            onClick={logout}
          >
            <IoExitOutline className="duration-300 hover:scale-125 hover:translate-x-2" />
          </span>
        ) : (
          <div>
            <span className="loading loading-spinner"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoutButton;
