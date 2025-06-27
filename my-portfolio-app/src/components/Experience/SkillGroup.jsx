// src/components/Skills/SkillGroup.js
import React from "react";

const SkillGroup = ({ title, skills }) => (
  <div>
    <h3 className="text-base font-semibold text-gray-700 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm shadow-sm hover:shadow-md transition"
        >
          <span>{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillGroup;
