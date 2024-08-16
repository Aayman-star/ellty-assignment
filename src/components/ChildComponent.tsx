"use client";
import React, { useState } from "react";
import PageNumbers from "./PageNumbers";
import Image from "next/image";
import checkmark from "../../public/assets/checkmark.png";

const ChildComponent = () => {
  /**State Variable to check if the checkbox is checked or unchecked */
  const [isChecked, setIsChecked] = useState(false);
  /**Function to change the checkbo state */
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  /**Array of page numbers,this makes the rendering and styling easy using the map function */
  const pages = [
    { id: 1, title: "Page 1" },
    { id: 2, title: "Page 2" },
    { id: 3, title: "Page 3" },
    { id: 4, title: "Page 4" },
  ];
  return (
    <div className="w-[370px]  mx-auto mt-[5.3125rem] rounded-md shadow-shadow-default flex flex-col items-center border-[1px] border-[#EEEEEE] hover:shadow-shadow-hover">
      <div className="w-full h-[2.6255rem] flex items-center justify-between p-8">
        <p className="text-sm text-text-color">All pages</p>
        {/* This div is created to style the checkbox */}
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={`appearance-none w-[1.440rem] h-[1.440rem] rounded-md border-[1px] border-border-color checked:bg-color-checked checked:border-none`}
          />
          {/* This div is created to style the checkmark after the checkbox is checked */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={checkmark}
              alt="checkmark"
              className={` ${isChecked ? "block" : "hidden"}`}
            />
          </div>
        </div>
      </div>
      <hr className="border-t-[0.7px] border-border-color w-[21.25rem]" />
      {/*  Mapping over the pages array to render reach item,this helps maintain the individual state of the component*/}
      {pages.map((page, i) => (
        <PageNumbers key={page.id} {...page} />
      ))}

      <hr className="border-t-[0.7px] border-[#CDCDCD] w-[21.25rem]" />
      {/* div for button */}
      <div className="w-[370px] h-[3.75rem] py-10 grid place-content-center">
        <button className="w-[340px] h-10 rounded text-sm bg-btn-default hover:bg-btn-hover text-text-color">
          Done
        </button>
      </div>
    </div>
  );
};

export default ChildComponent;
