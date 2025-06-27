import React from "react";

const SkillTag = ({ name }) => {
  return (
    <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow">
      {name}
    </div>
  );
};

export default SkillTag;
