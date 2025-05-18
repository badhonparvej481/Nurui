"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import nProgress from "nprogress";
import React from "react";
import { LuBotMessageSquare } from "react-icons/lu";
type ClassType = { className?: string };

const Bytenexia = ({ className }: ClassType) => {
  return (
    <Link
      href="/"
      className={cn(
        `text-[var(--primary-color)] font-creepster text-3xl flex items-center`,
        className,
      )}
      onClick={() => nProgress.start()}
    >
      <LuBotMessageSquare className="text-2xl rotate-180" /> Bytenexia
    </Link>
  );
};

export default Bytenexia;
