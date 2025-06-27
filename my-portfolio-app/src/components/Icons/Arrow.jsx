import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Arrow = () => {
  return (
    <>
      <div className="w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147] ">
        <AiOutlineArrowRight className="rotate-[-45deg]" />
      </div>
    </>
  );
};

export default Arrow;
