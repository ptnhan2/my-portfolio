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
      <section className="md:grid md:grid-cols-4 md:grid-rows-1 md:items-center 4 md:h-screen gap-8 px-20">
        <section className="md:col-span-2 md:w-full md:h-[60%] md:flex md:flex-col md:items-start md:gap-8">
          <div className="md:w-full">
            <h1 className="font-ibm md:text-7xl">
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
              className="text-white text-sm px-6 py-2 bg-black flex items-center gap-2"
            >
              Let's talk with me
              <Arrow />
            </button>
          </div>
          <div>
            <ShortIntro />
          </div>
        </section>
        <section className="md:col-span-2 flex flex-row items-center justify-between">
          <section>
            <div className="relative w-full h-auto mt-10">
              <img
                src={Overlay01}
                alt="Avatar Overlay"
                className=" w-full h-full rotate-[2deg] top-[100px]"
              />
              <img
                src={Avatar2}
                alt="Avatar"
                className="absolute inset-0 w-full h-full object-cover top-[-80px] left-[-20px]"
              />
              <img
                src={Overlay02}
                alt="Avatar Overlay"
                className="absolute inset-0 w-full h-full  top-[7px]"
              />
            </div>
          </section>

          <section className="justify-self-end">
            <div className="flex flex-col gap-6 justify-self-center">
              {socialLink.map((item) => {
                return (
                  <button to={item.link} target="_blank">
                    <div className="text-2xl text-black">{item.icon}</div>
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
