import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "../components/Card/ProjectCard";
import ProjectData from "../data/ProjectData";
import SortButton from "../components/Button/SortButton";
import FilterButton from "../components/Button/FilterButton";
import sorting from "../utils/sorting";
import filterByTechStack from "../utils/filterByTechStack";

import TextGradient from "../components/Text/TextGradient";

const Projects = () => {
  const projects = ProjectData;
  const [sortType, setSortType] = useState("asc");
  const [sortedProjects, setSortedProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterChoice, setFilterChoice] = useState("");
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    setDisplayedProjects(sorting(displayedProjects, sortType));
  }, [sortType]);

  useEffect(() => {
    setDisplayedProjects(filterByTechStack(projects, filterChoice));
  }, [filterChoice]);
  const toggleSort = () => {
    setSortType((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <h1>
          <TextGradient
            text="My Projects"
            from="#FFB147"
            to="#B86ADF"
            className="text-4xl font-bold"
          />
        </h1>
        <div className="w-full flex flex-row justify-around gap-4">
          <div>
            <SortButton sortType={sortType} onToggle={toggleSort} />
          </div>
          <div>
            <FilterButton
              isOpen={isFilterOpen}
              onToggle={toggleFilter}
              onChoice={setFilterChoice}
            />
          </div>
        </div>
        {displayedProjects.map((project) => (
          <div className="w-[80vw] h-auto">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
