import React from "react";
import TextGradient from "../Text/TextGradient";
const University = () => {
  return (
    <>
      <div className="w-[90vw] h-auto px-4">
        <div className="flex flex-row justify-center">
          <TextGradient
            text="VNUHCM - University of Science"
            from="#FFB147"
            to="#B86ADF"
            via="#FF6C63"
          />
        </div>
        <div>
          <p className="text-xs text-justify indent-4 ">
            Hello there! My name is{" "}
            <span className="font-bold text-[#FFB147]">Phan Thien Nhan</span>. I
            am a recent graduate majoring in Information Systems at VNUHCM -
            University of Science, with strong foundational knowledge in
            software development, programming languages, and system analysis
          </p>
        </div>
      </div>
    </>
  );
};

export default University;
