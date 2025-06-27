import React from "react";
import ContactForm from "../components/Form/ContactForm";

import { Link } from "react-router-dom";
import socialLink from "../data/socialData";
const Contact = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-row justify-start items-center gap-8 px-20">
        <div className="w-1/2 flex flex-col gap-16">
          <div>
            <div className="font-bold italic">Contact</div>
            <h1 className="font-bold text-5xl">REACH OUT ME</h1>
            <div className="text-sm">Di An, Binh Duong, Vietnam</div>
          </div>
          <div className="text-xl font-bold">
            <div>Phone: 0344193909</div>
            <div>Email: phanthiennhan248@gmail.com</div>
          </div>
          <div className="flex flex-row gap-2">
            {socialLink.map((item) => {
              return (
                <Link to={item.link} target="_blank">
                  <div className="text-2xl text-black">{item.icon}</div>
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
