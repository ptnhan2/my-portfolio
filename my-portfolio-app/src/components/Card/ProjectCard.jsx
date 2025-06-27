import React from "react";
import CtaButton from "../Button/CtaButton";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = ({ id, name, techStack, image }) => {
  return (
    <div className="w-full h-48 overflow-hidden flex flex-row items-center justify-between p-4 bg-white ">
      {/* Left: Text Content */}
      <div className="w-1/3 pr-4 flex flex-col justify-between h-full">
        <div className="text-sm text-gray-600 mb-4">{techStack}</div>

        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <div>
          <Link to={`/projects/${id}`}>
            <AiOutlineArrowRight className="text-4xl text-black rotate-[-45deg] " />
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-72 h-full border-2 p-2">
        <img
          src={image}
          alt={`${name} preview`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
