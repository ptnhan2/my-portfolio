import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Email = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-slate-200 p-2 rounded-full">
          <AiOutlineMail />
        </div>
        <span> phanthiennhan248@gmail.com</span>
      </div>
    </>
  );
};

export default Email;
