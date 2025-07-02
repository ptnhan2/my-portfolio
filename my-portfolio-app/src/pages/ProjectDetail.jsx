import React from "react";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import projectData from "../data/ProjectData";
import {
  FaClipboard,
  FaLaptopCode,
  FaUserFriends,
  FaTasks,
  FaUserTag,
  FaImages,
} from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));
  const sectionIcons = {
    description: <FaClipboard />,
    position: <FaUserTag />,
    tech: <FaLaptopCode />,
    team: <FaUserFriends />,
    responsibility: <FaTasks />,
    screen: <FaImages />,
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" }); // hoặc smooth
  }, []);

  return (
    <div className="w-full min-h-screen py-8 px-4 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col gap-8 bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center">{project.name}</h1>

        {/* Main Image */}
        <div className="w-full aspect-video overflow-hidden rounded-md">
          <img
            src={project.image}
            alt={`${project.name} Main`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <section>
          <h2 className="text-xl font-semibold mb-2 inline-flex items-center gap-2">
            {sectionIcons.description} Description
          </h2>
          <p className="text-justify leading-relaxed text-gray-700 ">
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-semibold mb-2 inline-flex items-center gap-2">
            {sectionIcons.tech} Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {project.techStack}
          </div>
        </section>

        {/* Team Info */}
        <section className="flex gap-8">
          <div>
            <span className="font-semibold inline-flex items-center gap-2">
              {sectionIcons.team} Team size:
            </span>{" "}
            {project.teamSize}
          </div>
          <div>
            <span className="font-semibold inline-flex items-center gap-2">
              {sectionIcons.position} Position:
            </span>{" "}
            {project.position}
          </div>
        </section>

        {/* Responsibilities */}
        <section>
          <h2 className="text-xl font-semibold mb-2 inline-flex items-center gap-2">
            {sectionIcons.responsibility} My Responsibilities
          </h2>
          {project.responsibilities.map((responsibility, index) => (
            <p className="text-justify leading-relaxed text-gray-700">
              - {responsibility}
            </p>
          ))}
        </section>

        {/* Video Demo (optional) */}
        {/* {project.videoList && project.videoList.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-2 inline-flex items-center gap-2">{sectionIcons.video} Video Demo</h2>
            <video className="w-full rounded-md" controls>
              <source src={project.videoList[0].videoSrc} type="video/mp4" />
            </video>
          </section>
        )} */}

        {/* Screens */}
        <section>
          <h2 className="text-xl font-semibold mb-4 inline-flex items-center gap-2">
            {sectionIcons.screen} Screen List
          </h2>
          <div className="flex flex-col gap-6">
            {project.imageList.map((image, index) => (
              <div key={index}>
                <h3 className="font-medium mb-1">
                  {index + 1}. {image.imgName}
                </h3>
                <img
                  src={image.imgSrc}
                  alt={image.imgName}
                  className="w-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
