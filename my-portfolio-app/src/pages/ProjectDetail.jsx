import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/ProjectData";
import ProjectCard from "../components/Card/ProjectCard";
const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));
  return (
    <>
      <div className="w-full h-auto border-2 p-2 flex flex-col items-center gap-1 text-xs">
        <h1 className="font-bold text-2xl">{project.name}</h1>
        <div className="w-full h-auto flex justify-center">
          <img
            src={project.image}
            alt="Health Insurance Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <h2 className="font-bold text-xl">Decription</h2>
          <p className="text-justify">{project.description}</p>
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <h2 className="font-bold text-xl">Tech Stacks: </h2>
          <div className="flex flex-row gap-2">{project.techStack}</div>
        </div>
        <div className="flex flex-row gap-4">
          <div>Team size: {project.teamSize}</div>
          <div>Position: {project.position}</div>
        </div>
        <div className="w-full flex flex-col items-center gap-1">
          <h2 className="font-bold text-xl">My Responsibilities</h2>
          <p className="text-justify">{project.responsibilities}</p>
        </div>
        <div className="w-full h-auto p-4 flex flex-col items-center">
          <h2 className="font-bold text-xl">Video Demo</h2>
          <video width="100%" controls>
            <source src={project.videoList[0].videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-auto p-4 flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl">SCREEN LIST</h2>
          {project.imageList.map((image, index) => (
            <div>
              <h2>{index + 1 + ". " + image.imgName}</h2>
              <img
                key={index}
                src={image.imgSrc}
                alt={image.imgName}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
