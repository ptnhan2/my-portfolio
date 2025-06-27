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

const About = () => {
  return (
    <section className="w-full h-screen grid md:grid-cols-5 gap-8 px-4 items-center pr-32">
      {/* Left Column */}
      <div className="flex flex-col items-center gap-6 col-span-2">
        <div className="text-left">
          <div className="font-medium">Nice to meet you!</div>
          <div className="font-bold text-4xl">WELCOME TO...</div>
        </div>
        <div className="w-64 aspect-square">
          <Avatar />
        </div>
        <Name />
        <JobTitle />
        <div className="mt-2 text-sm font-semibold underline">Download CV</div>
      </div>

      {/* Right Section */}

      <div className="col-span-3 flex flex-col gap-6">
        {/* Contact Info */}

        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
          <PhoneNumber />
          <Email />
          <Location />
          <Age />
        </div>

        {/* Skills Section */}
        <section>
          <div className="flex items-end gap-2 py-4">
            <h1 className="text-2xl font-bold">My Skills</h1>
            <div className="h-[1px] bg-gray-300 w-3/4 mx-auto my-2" />
          </div>

          <section className="grid md:grid-cols-2 gap-6 max-h-[430px] overflow-y-auto pr-2">
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
        {/* <div className="grid md:grid-cols-2 md:grid-rows-2 max-h-[430px] gap-2">
          {ExeperienceData.map((experience, id) => (
            <div key={id} className={id === 2 ? "md:row-span-2" : ""}>
              <TitleAndParagraphCard
                title={experience.title}
                content={experience.description}
              />
            </div>
          ))}
        </div> */}

        <div className="h-[100px]">
          <Link to="/projects">
            <CtaButton text="View my Projects" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
