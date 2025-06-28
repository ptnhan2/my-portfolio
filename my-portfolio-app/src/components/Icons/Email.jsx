import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

const Email = () => {
  return (
    <>
      <div className="flex flex-row items-center bg-transparent border border-gray-300 text-sm  hover:shadow-md transition">
        <div className="p-2 border-r-[1px] border-gray-300">
          <AiOutlineMail />
        </div>
        <div className="px-2 text-center"> phanthiennhan248@gmail.com</div>
      </div>
    </>
  );
};

export default Email;
