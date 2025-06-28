import React from "react";
import { AiOutlinePhone, AiOutlineCopy } from "react-icons/ai";

const PhoneNumber = () => {
  return (
    <>
      <div className="flex flex-row items-center  bg-transparent border border-gray-300 text-sm shadow-sm hover:shadow-md transition">
        <div className=" p-2 border-r-[1px] border-gray-300">
          <AiOutlinePhone />
        </div>
        <div className="px-2">0344193909</div>
      </div>
    </>
  );
};

export default PhoneNumber;
