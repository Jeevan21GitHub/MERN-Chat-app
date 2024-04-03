import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
  return (
    <section>
      <div className="flex items-center mt-10 ">
        <div className="w-full">
          <input
            type="text"
            placeholder="Type here"
            className="w-full rounded-r-none rounded-l-2xl input "
          />
        </div>
        <div className="p-3 text-2xl text-white bg-purple-500 rounded-r-2xl hover:bg-purple-600">
          <CiSearch className="duration-300 scale-125 hover:scale-150" />
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
