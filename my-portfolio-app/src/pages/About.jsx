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

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <div>
            <div className="font-bold">Nice to meet you!</div>
            <div className="font-bold text-3xl">WELCOME TO...</div>
          </div>
          <div>
            <Avatar />
          </div>
          <div>
            <Name />
          </div>
          <div>
            <JobTitle />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 text-sm">
          <div>
            <PhoneNumber />
          </div>
          <div>
            <Email />
          </div>
          <div>
            <Location />
          </div>
          <div>
            <Age />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div>
            <University />
          </div>
          <div>
            <Volunteer />
          </div>
          <div>
            <Link to="/projects">
              <CtaButton text="View my Projects" />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default About;
