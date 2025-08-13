"use client";
import React from "react";
import { usePathname } from "next/navigation";
import SplashCursor from "../nurui/splash-cursor";

const SplashCursorDemo = () => {
  const pathName = usePathname();
  if (pathName.includes("docs") || pathName.includes("preview")) return null;
  return <SplashCursor />;
};

export default SplashCursorDemo;
