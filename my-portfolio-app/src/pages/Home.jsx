import React from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Contact from "./Contact";
import Playground from "./Playground";
import Projects from "./Projects";
import GiftPopup from "../components/Popup/GiftPopup";
import GiftModal from "../components/Popup/GiftModal";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import handleScroll from "../utils/handleScroll";
import { useTab } from "../utils/TabContext";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const Home = () => {
  const [didAlert, setDidAlert] = useState(false);
  const [isGiftBottomPopupOpen, setIsGiftBottomPopupOpen] = useState(false);
  const [isGiftTopPopupOpen, setIsGiftTopPopupOpen] = useState(false);
  const contactRef = useRef(null); // ref cho phần cuối cùng
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [topPopupPosition, setTopPopupPosition] = useState({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const location = useLocation();

  const { setActiveTab } = useTab();
  useEffect(() => {
    const handleMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        //showPopup();
        // alert("run handleMouseLeave");
        // setDidAlert(!didAlert);
        console.log("show at", lastMousePos.current);

        setTopPopupPosition(lastMousePos.current);
        setIsGiftTopPopupOpen(true);
        localStorage.setItem("popupShown", true);
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        //showPopup();
        // alert("run handleVisibility");
        setDidAlert(!didAlert);
        localStorage.setItem("popupShown", true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const dismissed = localStorage.getItem("popupDismissed") === "true";

        if (entry.isIntersecting && !dismissed) {
          setIsGiftBottomPopupOpen(true);
          localStorage.setItem("popupShown", true);
        }
      },
      {
        threshold: 0.9, // 50% của phần tử phải hiển thị mới tính là "đến nơi"
      }
    );
    if (sectionsRef.contact.current) {
      observer.observe(sectionsRef.contact.current);
    }
    document.addEventListener("mouseout", handleMouseLeave);
    // document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
      // document.removeEventListener("visibilitychange", handleVisibility);
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  // const handleSelectLanguage = (lang) => {
  //   setIsGiftOpen(false);
  //   setSelectedLanguage(lang);
  // };

  const handleGiftPopupClose = () => {
    setIsGiftBottomPopupOpen(false);
    setIsGiftTopPopupOpen(false);
    setSelectedLanguage(null);
    // localStorage.setItem("popupDismissed", "true"); // use to show popup only once
  };

  const sectionsRef = {
    home: useRef(),
    about: useRef(),
    projects: useRef(),
    contact: useRef(),
  };
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          console.log("inside observer: ", visible.target);
          // if (location.pathname !== `/${id}`) {
          //   navigate(`/${id}`, { replace: true });
          // }
          navigate(`/${id}`, { replace: true });

          setActiveTab(id);
          // const newPath = `/${id}`;

          // if (location.pathname !== newPath) {
          //   navigate(newPath, { replace: true });
          // }
        }
      },
      {
        threshold: 0.5,
      }
    );
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionsRef).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="scroll-smooth flex flex-col h-auto gap-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="home"
        ref={sectionsRef.home}
      >
        <HeroSection />
      </motion.div>
      <div className="h-[1px] bg-gray-300 w-3/4 mx-auto my-2" />{" "}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="about"
        ref={sectionsRef.about}
      >
        <About />
      </motion.div>
      <div className="h-[1px] bg-gray-300 w-3/4 mx-auto my-2" />{" "}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="projects"
        ref={sectionsRef.projects}
      >
        <Projects />
      </motion.div>
      <div className="h-[1px] bg-gray-300 w-3/4 mx-auto my-2" />{" "}
      <motion.div
        // ref={contactRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="contact"
        ref={sectionsRef.contact}
      >
        <Contact />
      </motion.div>
      <GiftPopup
        isBottomOpen={isGiftBottomPopupOpen}
        isTopOpen={isGiftTopPopupOpen}
        isGiftOpen={isGiftOpen}
        onClose={handleGiftPopupClose}
        onSetModalOpen={setIsModalOpen}
        topPopupPosition={topPopupPosition}
      />
      <GiftModal
        isModalOpen={isModalOpen}
        setIsGiftOpen={setIsGiftOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Home;
