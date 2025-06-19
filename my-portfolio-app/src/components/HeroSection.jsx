import { Link } from "react-router-dom";
import Avatar from "../assets/Avatar-withoutBG.png";
import Avatar2 from "../assets/Avatar2.png";
import Overlay01 from "../assets/Overlay01.png";
import Overlay02 from "../assets/Overlay02.png";

import ContactButton from "./Button/ContactButton";
import ShortIntro from "./ShortIntro";

const HeroSection = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="font-ibm">
            MY NAME IS <span className="font-bold">PHAN THIEN NHAN</span>
          </h1>
        </div>
        <div>
          <h2>
            I'm a <strong> Frontend Developer </strong>based in Vietnam
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="relative w-72 h-72 mt-10">
          <img
            src={Overlay01}
            alt="Avatar Overlay"
            className=" w-full h-full "
          />
          <img
            src={Avatar2}
            alt="Avatar"
            className="absolute inset-0 w-full h-full object-cover top-[-20px]"
          />
          <img
            src={Overlay02}
            alt="Avatar Overlay"
            className="absolute inset-0 w-full h-full "
          />
        </div>
        <div className="w-42 h-24">
          <ContactButton />
        </div>
      </section>
      <section>
        <ShortIntro />
      </section>
    </>
  );
};

export default HeroSection;
