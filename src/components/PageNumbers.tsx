"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import checkmark from "../../public/assets/checkmark1.png";
interface PageProps {
  id: number;
  title: string;
  AllChecked?: boolean;
}
const PageNumbers = ({ id, title, AllChecked }: PageProps) => {
  useEffect(() => {
    setIsChecked(AllChecked ?? false);
  }, [AllChecked]);
  const [isChecked, setIsChecked] = useState(AllChecked ?? false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div
      key={id}
      className="w-full h-[2.6255rem] flex items-center justify-between p-8">
      <p className="text-sm text-text-color">{title}</p>
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className={`appearance-none w-[1.440rem] h-[1.440rem] rounded-md shadow-inner border-[1px] border-border-color checked:bg-color-checked checked:border-none `}
        />
        <div className="absolute inset-0 grid place-content-center p-[0.125rem]  pointer-events-none">
          <Image
            src={checkmark}
            alt="checkmark"
            className={` ${isChecked ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PageNumbers;
