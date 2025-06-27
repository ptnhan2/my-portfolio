// src/data/SkillsData.js
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaComments,
  FaPuzzlePiece,
  FaClock,
  FaCode,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiFlask } from "react-icons/si";

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  backend: [
    // { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Flask", icon: <SiFlask className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "MS SQL Server", icon: <FaDatabase className="text-blue-600" /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-400" /> },
  ],
  soft: [
    { name: "Communication", icon: <FaComments className="text-purple-500" /> },
    {
      name: "Problem Solving",
      icon: <FaPuzzlePiece className="text-indigo-500" />,
    },
    { name: "Time Management", icon: <FaClock className="text-gray-600" /> },
  ],
};

export default skills;
