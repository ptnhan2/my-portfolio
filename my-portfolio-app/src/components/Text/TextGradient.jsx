import React from "react";

const TextGradient = ({ text, from, to, via, className }) => {
  return (
    <>
      <div
        className={`bg-gradient-to-r from-[${from}] via-[${via}] to-[${to}] text-transparent bg-clip-text ${className}`}
      >
        {text}
      </div>
    </>
  );
};

export default TextGradient;
