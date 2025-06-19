import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/playground", label: "Playground" },
    { path: "/projects", label: "Projects" },
    { path: "/resume", label: "Resume" },
  ];
  return (
    <nav
      className={`w-full ${
        isOpen ? "bg-blue-500" : "bg-white"
      } p-4  fixed top-0 left-0 z-50`}
    >
      <button className="text-black" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "X" : "Menu"}
      </button>

      <ul
        className={`flex flex-col md:flex-row gap-4  ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-white hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
