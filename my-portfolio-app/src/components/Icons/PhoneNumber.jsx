import React from "react";
import { AiOutlinePhone } from "react-icons/ai";

const PhoneNumber = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-slate-200 p-2 rounded-full">
          <AiOutlinePhone />
        </div>
        +84 344 193 909
      </div>
    </>
  );
};

export default PhoneNumber;
