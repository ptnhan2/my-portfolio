import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../components/Avatar/Avatar";
import Name from "../components/Avatar/Name";
import JobTitle from "../components/Avatar/JobTitle";
import Location from "../components/Icons/Location";
import Age from "../components/Icons/Age";
import PhoneNumber from "../components/Icons/PhoneNumber";
import Email from "../components/Icons/Email";
import University from "../components/Experience/University";
import Volunteer from "../components/Experience/Volunteer";
import CtaButton from "../components/Button/CtaButton";
import TitleAndParagraphCard from "../components/Card/TitleAndParagraphCard";
import ExeperienceData from "../data/ExperienceData";
import SkillTag from "../components/Experience/SkillTag";
import skills from "../data/SkillData";
import SkillGroup from "../components/Experience/SkillGroup";
import handleScroll from "../utils/handleScroll";
import { useNavigate } from "react-router-dom";
import { useTab } from "../utils/TabContext";
import Resume from "../assets/ptn-resume.pdf";
const About = () => {
  const { setActiveTab } = useTab();
  const navigate = useNavigate();
  const handleOnClick = () => {
    setActiveTab("projects");
    // navigate("/home");
    setTimeout(() => {
      handleScroll("projects");
    }, 200);
  };
  return (
    <section className="flex flex-col justify-center px-4 py-16 lg:py-24 lg:px-24 gap-8 lg:w-full lg:grid lg:grid-cols-5 lg:gap-8 lg:px-4 lg:items-center lg:pr-32">
      <div className="flex flex-col items-center gap-4 col-span-2">
        <div className="text-left">
          <div className="font-medium">Nice to meet you!</div>
          <div className="font-bold text-4xl">WELCOME TO...</div>
        </div>
        <div className="w-48 lg:w-64 aspect-square">
          <Avatar />
        </div>
        <Name />
        <JobTitle />
        <a href={Resume} target="_blank">
          <div className="mt-2 text-sm font-semibold underline text-black">
            Download CV
          </div>
        </a>
      </div>

      <div className="col-span-3 flex flex-col gap-6">
        {/* Contact Info */}

        <div className="flex flex-col gap-2 px-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4 lg:text-sm lg:px-0">
          <PhoneNumber />
          <Email />
          <Location />
          <Age />
        </div>

        {/* Skills Section */}
        <section>
          <div className="flex items-center lg:items-end py-4">
            <div className=" h-[1px] bg-gray-300 w-1/4 lg:hidden" />

            <h1 className="w-1/2 lg:w-1/4 text-2xl font-bold text-center lg:text-start">
              My Skills
            </h1>
            <div className="h-[1px] bg-gray-300 w-1/4 lg:w-full mx-auto my-2" />
          </div>

          <section className="flex flex-col justify-center gap-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:max-h-[430px] lg:overflow-y-auto lg:pr-2">
            {/* Frontend Skills */}
            <SkillGroup title="💻 Frontend" skills={skills.frontend} />

            {/* Backend Skills */}
            <SkillGroup title="🖥 Backend" skills={skills.backend} />

            {/* Tools */}
            <SkillGroup title="🛠 Tools" skills={skills.tools} />

            {/* Soft Skills */}
            <SkillGroup title="💬 Soft Skills" skills={skills.soft} />
          </section>
        </section>

        {/* Experience Cards */}
        {/* <div className="grid lg:grid-cols-2 lg:grid-rows-2 max-h-[430px] gap-2">
          {ExeperienceData.map((experience, id) => (
            <div key={id} className={id === 2 ? "lg:row-span-2" : ""}>
              <TitleAndParagraphCard
                title={experience.title}
                content={experience.description}
              />
            </div>
          ))}
        </div> */}

        <div
          onClick={() => handleOnClick()}
          className="h-[100px] mx-8 lg:mx-0 hidden lg:block"
        >
          <CtaButton text="View my Projects" />
        </div>
      </div>
    </section>
  );
};

export default About;
