"use client";
import React, { useState } from "react";
import PageNumbers from "./PageNumbers";

const ChildComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const pages = [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
    { id: 4, title: "Page 4" },
  ];
  return (
    <div className="w-[370px]  mx-auto mt-[5.3125rem] rounded-md shadow-shadow-default flex flex-col items-center hover:shadow-shadow-hover">
      <div className="w-full h-[2.6255rem] flex items-center justify-between p-8">
        <p className="text-sm">All pages</p>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`appearence-none w-[1.440rem] h-[1.440rem] rounded-md border-[1px] border-[#CDCDCD] `}
        />
      </div>
      <hr className="border-t-[0.7px] border-[#CDCDCD] w-[85%]" />
      {pages.map((page, i) => (
        <PageNumbers {...page} />
      ))}

      <hr className="border-t-[0.7px] border-[#CDCDCD] w-[85%]" />
      {/* div for button */}
      <div className="w-[370px] h-[3.75rem] py-10 grid place-content-center">
        <button className="w-[340px] h-10 rounded bg-[#FFCE22] hover:bg-[#FFD84D]">
          Done
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
