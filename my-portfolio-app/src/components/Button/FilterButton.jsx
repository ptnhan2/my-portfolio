import React, { useEffect, useRef } from "react";
import { AiOutlineFilter } from "react-icons/ai";

const FilterButton = ({ isOpen, onToggle, onChoice }) => {
  const filterArr = [
    "All",
    "ReactJS",
    "Tailwind CSS",
    "MongoDB",
    "Java",
    "MySQL",
    "Flask",
    "C#",
    "WinForms",
    "Microsoft SQL Server",
  ];

  const dropDownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        onToggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);
  return (
    <>
      <div className="relative">
        <button
          onClick={onToggle}
          id="filter"
          className="flex flex-row items-center gap-2 bg-black text-white"
        >
          <label htmlFor="filter">Filter</label>

          <AiOutlineFilter />
        </button>
        {isOpen ? (
          <div className="absolute top-10 right-0 w-[200px] h-[200px] bg-white border-2 overflow-auto">
            <ul ref={dropDownRef} className="p-2">
              {filterArr.map((filter) => {
                return (
                  <li className="p-1">
                    <button
                      className="w-full h-auto bg-black text-white p-2"
                      key={filter}
                      onClick={() => {
                        onChoice(filter);
                        onToggle();
                      }}
                    >
                      {filter}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FilterButton;
