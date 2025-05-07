import { cn } from "@/utils/cn";
import React from "react";

const BulmaIcon = ({
  className,
  isAnimation = true,
  reSize,
}: {
  className?: string;
  isAnimation?: boolean;
  reSize?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={reSize ? "80px" : "75px"}
      height={reSize ? "80px" : "75px"}
      viewBox="0 0 48 48"
      className={cn(isAnimation && "social-icon-animation", className)}
    >
      <path
        fill="#4db6ac"
        d="M40.001,35.001l-16,11l-14-14l3-19l11-11l13.5,13.5l-8.5,8.5	L40.001,35.001z"
      />
    </svg>
  );
};

export default BulmaIcon;
