import React from "react";
import PhoneNumber from "./Icons/PhoneNumber";
import Email from "./Icons/Email";
const ShortIntro = () => {
  return (
    <>
      <div className="md:flex md:flex-row md:items-center md:gap-4">
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
