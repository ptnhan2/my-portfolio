import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Location = () => {
  return (
    <>
      <div className="flex flex-row items-center bg-transparent border border-gray-300 text-sm shadow-sm hover:shadow-md  bg-gray-100 border border-gray-300 text-sm shadow-sm hover:shadow-md transition">
        <div className="p-2 border-r-[1px] border-gray-300">
          <AiOutlineHome />
        </div>
        <div className="px-2">Ho Chi Minh City, Vietnam</div>
      </div>
    </>
  );
};

export default Location;
