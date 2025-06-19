import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Location = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="bg-slate-200 p-2 rounded-full">
          <AiOutlineHome />
        </div>
        <span>Ho Chi Minh City, Vietnam</span>
      </div>
    </>
  );
};

export default Location;
