import { Link } from "react-router-dom";
import Avatar from "../assets/Avatar-withoutBG.png";
import Avatar2 from "../assets/ava.png";
import Overlay01 from "../assets/Overlay01.png";
import Overlay02 from "../assets/Overlay02.png";
import Arrow from "../components/Icons/Arrow";
import ContactButton from "./Button/ContactButton";
import ShortIntro from "./ShortIntro";
import socialLink from "../data/socialData";
import handleScroll from "../utils/handleScroll";
import { useNavigate } from "react-router-dom";
import { useTab } from "../utils/TabContext";
const HeroSection = () => {
  const { setActiveTab } = useTab();
  const navigate = useNavigate();
  const handleOnClick = () => {
    setActiveTab("contact");
    // navigate("/home");
    setTimeout(() => {
      handleScroll("contact");
    }, 200);
  };
  return (
    <>
      <section className="flex flex-col justify-center px-4 py-16 md:py-24 gap-8 md:grid md:grid-cols-4 md:grid-rows-1 md:items-center md:gap-8 md:px-20">
        <section className="flex flex-col gap-2 items-center text-center md:col-span-2 md:w-full md:flex md:flex-col md:items-start md:text-left md:gap-8">
          <div className="md:w-full">
            <h1 className="font-ibm text-4xl md:text-7xl">
              MY NAME IS <span className="font-bold">PHAN THIEN NHAN...</span>
            </h1>
          </div>
          <div>
            <h2>
              I'm a <strong> Frontend Developer </strong>based in Vietnam
            </h2>
          </div>
          <div>
            <button
              onClick={() => handleOnClick()}
              type="submit"
              className="hidden md:flex text-white text-sm px-6 py-2 bg-black flex  md:items-center gap-2"
            >
              Let's talk with me
              <Arrow />
            </button>
          </div>
          <div>
            <ShortIntro />
          </div>
        </section>
        <section className="flex flex-col items-center md:col-span-2 md:flex md:flex-row md:items-center md:justify-between">
          <section className="flex flex-col items-center">
            <div className="relative w-2/3 aspect-square md:w-full md:h-auto md:mt-10">
              <img
                src={Overlay01}
                alt="Avatar Overlay"
                className=" w-full h-full rotate-[2deg] top-[100px]"
              />
              <img
                src={Avatar2}
                alt="Avatar"
                className="absolute inset-0 w-full h-full object-cover top-[-30px] md:top-[-80px] md:left-[-20px]"
              />
              <img
                src={Overlay02}
                alt="Avatar Overlay"
                className="absolute inset-0 w-full h-full top-[4px]  md:top-[7px]"
              />
            </div>
          </section>

          <section>
            <button
              onClick={() => handleOnClick()}
              type="submit"
              className="text-white text-sm px-6 py-2 bg-black flex  md:hidden gap-2"
            >
              Let's talk with me
              <Arrow />
            </button>
          </section>
          <section className="md:justify-self-end">
            <div className="flex flex-row md:flex-col gap-2 md:gap-6 justify-self-center ">
              {socialLink.map((item) => {
                return (
                  <button
                    to={item.link}
                    target="_blank"
                    className="bg-transparent"
                  >
                    <div className="text-4xl text-black">{item.icon}</div>
                  </button>
                );
              })}
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
