import React from "react";
import CtaButton from "../Button/CtaButton";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = ({ id, name, techStack, image }) => {
  return (
    <Link to={`${id}`}>
      <div className="text-black w-full h-auto overflow-hidden flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-center bg-white ">
        {/* Left: Text Content */}
        <div className="@container w-full md:w-1/3 pr-4 flex flex-col items-center min-w-0 md:items-start justify-between order-1">
          <div className="  font-bold text-[10px] @[100px]:text-xl  mb-2 order-1 md:order-2">
            {name}
          </div>

          <div className=" text-[10px] @[100px]:text-sm text-gray-600 mb-4 order-2 md:order-1 ">
            {techStack}
          </div>

          <div className="hidden md:block md:order-3">
            <AiOutlineArrowRight className="text-4xl text-black rotate-[-45deg] " />
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full border-2 p-2 order-2">
          <img
            src={image}
            alt={`${name} preview`}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
