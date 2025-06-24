import React from "react";
import { BsStars } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";

const GoPro = ({ sideBar }: { sideBar: boolean }) => {
  return (
    <button className="flex items-center justify-center gap-1.5 w-full capitalize font-medium text-sm text-[var(--primary-color)] border border-[var(--primary-color-2)] hover:bg-[var(--primary-color-4)] rounded-md p-1">
      <BsStars className="text-amber-500" />
      {sideBar && <span>Go Pro</span>}
      {sideBar && <IoArrowForward />}
    </button>
  );
};

export default GoPro;
