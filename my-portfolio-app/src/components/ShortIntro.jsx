import React from "react";
import PhoneNumber from "./Icons/PhoneNumber";
import Email from "./Icons/Email";
const ShortIntro = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-[10px] gap-1 md:gap-4 items-center md:text-base">
        <div>
          <PhoneNumber />
        </div>
        <div>
          <Email />
        </div>
      </div>
    </>
  );
};

export default ShortIntro;
