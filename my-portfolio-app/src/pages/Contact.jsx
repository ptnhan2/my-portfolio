import React from "react";
import ContactForm from "../components/Form/ContactForm";

import { Link } from "react-router-dom";
import socialLink from "../data/socialData";
import PhoneNumber from "../components/Icons/PhoneNumber";
import Email from "../components/Icons/Email";
const Contact = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-start lg:items-center gap-8 px-4 lg:px-20 py-8 lg:py-24">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-2 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <div className="font-bold italic">Contact</div>
            <h1 className="font-bold text-3xl lg:text-5xl">REACH OUT ME</h1>
            <div className="text-sm">Ho Chi Minh City, Vietnam</div>
          </div>
          <div className="lg:text-xl flex flex-col gap-2">
            <div>
              <PhoneNumber />
            </div>
            <div>
              <Email />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            {socialLink.map((item) => {
              return (
                <Link to={item.link} target="_blank">
                  <div className="text-4xl  text-black">{item.icon}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
