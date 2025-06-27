import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "projects", label: "Projects" },

    { path: "contact", label: "Contact" },
    // { path: "playground", label: "Playground" },
    // { path: "resume", label: "Resume" },
  ];

  const socialLinks = [
    { path: "https://github.com/abdulrahman-m", label: "Github" },
    { path: "https://www.linkedin.com/in/abdulrahman-m/", label: "Linkedin" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full md:w-[15%] md:box-border h-screen md:bg-black uppercase ${
        isOpen ? "bg-blue-500" : "bg-white"
      } p-4 fixed top-0 left-0 z-50 `}
    >
      <button className="bg-black text-white text-4xl md:block hidden">
        TN
      </button>
      <button
        className="text-black md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "X" : "Menu"}
      </button>

      <ul
        className={`flex flex-col md:block md:bg-black  ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <li key={link.path} className="md:py-4">
            <button
              className="text-white bg-black text-sm font-light hover:underline"
              onClick={() => handleScroll(link.path)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
