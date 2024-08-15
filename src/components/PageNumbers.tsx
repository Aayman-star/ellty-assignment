"use client";
import React, { useState } from "react";
interface PageProps {
  id: number;
  title: string;
}
const PageNumbers = ({ id, title }: PageProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div
      key={id}
      className="w-full h-[2.6255rem] flex items-center justify-between p-8">
      <p className="text-sm">{title}</p>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={`appearence-none w-[1.440rem] h-[1.440rem] rounded-md shadow-inner border-[1px] border-[#807f7f]`}
      />
    </div>
  );
};

export default PageNumbers;
