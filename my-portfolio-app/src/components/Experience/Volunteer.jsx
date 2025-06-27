import React from "react";
import TextGradient from "../Text/TextGradient";
const Volunteer = () => {
  return (
    <>
      <div className="w-[90%] h-auto px-4">
        <div className="flex flex-row justify-center">
          <TextGradient
            text="Student's Volunteer Team"
            from="#FFB147"
            to="#B86ADF"
            via="#FF6C63"
          />
        </div>
        <div>
          <p className="text-xs text-justify indent-4 ">
            Served as Deputy Team Leader (2022–2023) and Member of the Board of
            Directing (2021–2022) at the Student Volunteer Team, Faculty of
            Information Technology, VNUHCM - University of Science, where I led
            and organized large-scale campaigns (30–150 volunteers) such as
            Green University Village, Back to Rural Areas (2022, 2023), and
            Sharing Spring, while also planning internal activities to enhance
            team cohesion and collaboration.
          </p>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
