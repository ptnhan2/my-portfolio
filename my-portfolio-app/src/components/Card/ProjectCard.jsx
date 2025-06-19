import React from "react";
import CtaButton from "../Button/CtaButton";
import { Link } from "react-router-dom";
const ProjectCard = ({ id, name, techStack, image }) => {
  return (
    <>
      <div className="w-full h-auto border-2 p-2 flex flex-col items-center gap-1">
        <h1 className="font-bold text-2xl">{name}</h1>
        <div>{techStack} </div>
        <div className="w-full h-auto flex justify-center">
          <img
            src={image}
            alt="Health Insurance Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[50%]">
          <Link to={`/projects/${id}`}>
            <CtaButton text="View Project" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
