import React from "react";
import sorting from "../../utils/sorting";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";

const SortButton = ({ sortType, onToggle }) => {
  console.log(sortType);
  return (
    <>
      <div className="flex flex-row items-center bg-black text-white pr-4 py-1">
        <button onClick={onToggle} id="sort" className="bg-black text-white">
          {sortType == "asc" ? (
            <AiOutlineSortAscending />
          ) : (
            <AiOutlineSortDescending />
          )}
        </button>
        <label htmlFor="sort">
          {sortType == "asc" ? (
            <span>Oldest to Newest</span>
          ) : (
            <span>Newest to Oldest</span>
          )}
        </label>
      </div>
    </>
  );
};

export default SortButton;
