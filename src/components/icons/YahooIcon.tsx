import { cn } from "@/utils/cn";
import React from "react";

const YahooIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill="#fff"
      aria-label="Yahoo!"
      viewBox="0 0 512 512"
      id="yahoo"
      className={cn("social-icon-animation", className)}
    >
      <rect width={512} height={512} fill="#5f01d1" rx="15%" />
      <path d="M203 404h-62l25-59-69-165h63l37 95 37-95h62m58 76h-69l62-148h69" />
      <circle cx={303} cy={308} r={38} />
    </svg>
  );
};

export default YahooIcon;
