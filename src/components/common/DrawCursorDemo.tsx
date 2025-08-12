"use client";
import React from "react";
import { usePathname } from "next/navigation";
import DrawCursor from "../nurui/draw-cursor";

const DrawCursorDemo = () => {
  const pathName = usePathname();
  if (pathName.includes("docs") || pathName.includes("preview")) return null;
  return (
    <DrawCursor
      type="drawAlways"
      strokeColor="#3ca2fa"
      strokeWidth={10}
      followEffect={true}
    />
  );
};

export default DrawCursorDemo;
