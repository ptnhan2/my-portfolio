import React from "react";
import TextGradient from "../Text/TextGradient";
const TitleAndParagraphCard = ({ title, content }) => {
  return (
    <section className="p-4 bg-gray-50 shadow">
      <TextGradient
        text={title}
        from="#FFB147"
        to="#B86ADF"
        via="#FF6C63"
        className={"text-xl"}
      />
      <p class="text-sm leading-relaxed break-words text-gray-700">{content}</p>
    </section>
  );
};

export default TitleAndParagraphCard;
