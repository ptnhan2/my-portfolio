import React from "react";
import AvaImg from "../../assets/Avatar-withoutBG.png";
const Avatar = () => {
  return (
    <>
      <div className="relative">
        <div className="w-48 h-48 relative rounded-full overflow-hidden my-10">
          <div className="w-full h-full rounded-full flex items-end rotate-[-20deg]">
            <div className="w-full h-1/2 bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] rounded-b-full absolute bottom-[-20px]"></div>
          </div>
          <img
            src={AvaImg}
            alt="Avatar"
            className="absolute inset-0 w-full h-full object-cover rounded-b-full"
          />
        </div>
        <div className="w-full font-greatVibes font-bold text-4xl absolute top-[190px] left-[190px] transform -translate-x-1/2 -translate-y-1/2">
          Thien Nhan
        </div>
      </div>
    </>
  );
};

export default Avatar;
