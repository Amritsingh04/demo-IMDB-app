import React from "react";

const Pagination = ({ pageNo, handlePrev, handleNext }) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-left" onClick={handlePrev}></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-right" onClick={handleNext}></i>
      </div>
    </div>
  );
};

export default Pagination;
