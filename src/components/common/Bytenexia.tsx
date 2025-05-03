"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import nProgress from "nprogress";
import React from "react";
type ClassType = { className?: string };

const Bytenexia = ({ className }: ClassType) => {
  return (
    <Link
      href="/"
      className={cn(
        `text-[var(--primary-color)] font-creepster text-3xl`,
        className,
      )}
      onClick={() => nProgress.start()}
    >
      Bytenexia
    </Link>
  );
};

export default Bytenexia;
