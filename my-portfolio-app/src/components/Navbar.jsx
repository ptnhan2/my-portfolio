import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";
import handleScroll from "../utils/handleScroll";
import { useTab } from "../utils/TabContext";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeTab, setActiveTab } = useTab();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "HOME", to: "/home", section: "home" },
    { label: "ABOUT", to: "/about", section: "about" },
    { label: "PROJECTS", to: "/projects", section: "projects" },
    { label: "CONTACT", to: "/contact", section: "contact" },

    // { to: "/playground", label: "PLAYGROUND", section: "playground" },
    // { to: "/resume", label: "RESUME", section: "resume" },
  ];
  // const handleNavigation = (link) => {
  //   if (
  //     location.pathname !== "/" &&
  //     !location.pathname.includes(link.section)
  //   ) {
  //     // Nếu đang ở trang chi tiết như /projects/1
  //     navigate("/");

  //     // Đợi 100ms để các section mount xong, rồi scroll
  //     setTimeout(() => {
  //       handleScroll(link.section);
  //     }, 100);
  //   } else {
  //     // Nếu đang ở trang chính thì chỉ scroll
  //     handleScroll(link.section);
  //   }
  //   setActiveTab(link.section);
  // };

  const handleClick = (link) => {
    setActiveTab(link.section);
    if (location.pathname !== link.to) {
      navigate(link.to);
    }
    setTimeout(() => {
      handleScroll(link.section);
    }, 200);
  };

  // useLayoutEffect(() => {
  //   setActiveTab(location.pathname);
  // }, []);
  // useEffect(() => {
  //   if (location.pathname === "/home") {
  //     setActiveTab("home");
  //   }
  // }, [location.pathname]);

  return (
    <>
      {" "}
      <button
        className={`text-black bg-transparent md:hidden py-2 px-4  fixed  top-1 left-1 z-50 ${
          isOpen ? "text-white border-2 border-white" : ""
        } md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <AiOutlineMenuFold className="text-2xl" />
        ) : (
          <AiOutlineMenuUnfold className="text-2xl" />
        )}
      </button>
      <nav
        className={`w-1/2 md:w-[15%] md:box-border h-screen md:bg-black uppercase ${
          isOpen ? "bg-black" : "hidden md:block"
        } p-4 fixed top-0 left-0 z-10 `}
      >
        <button
          onClick={() => handleClick({ section: "home" })}
          className="w-full text-left justify-start p-4 bg-black text-white mt-8 text-4xl md:block"
        >
          TN
        </button>

        <ul className={` md:block md:bg-black  ${isOpen ? "block" : "hidden"}`}>
          {navLinks.map((link) => (
            <li key={link.section}>
              <button
                className="text-white bg-transparent w-full hover:text-[#B86ADF] hover:text-[#FF6C63] font-medium flex items-start md:py-6 md:px-4 border-box"
                onClick={() => handleClick(link)}
              >
                {activeTab === link.section ? (
                  <div className="relative inline-block grid grid-cols-1 grid-rows-1 place-items-center ">
                    <div className=" col-start-1 row-start-1 h-1 w-full  bg-gradient-to-r from-[#B86ADF] via-[#FF6C63] to-[#FFB147]" />
                    <div className="col-start-1 row-start-1 text-white">
                      {link.label}
                    </div>
                  </div>
                ) : (
                  <div className="col-start-1 row-start-1">{link.label}</div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
