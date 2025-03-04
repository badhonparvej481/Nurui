"use client";
import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";
import { IoIosSearch } from "react-icons/io";

const ShinyInput = ({ className }: { className?: string }) => {
  const divRef = useRef<HTMLInputElement | null>(null);
  const [, setIsFocused] = useState(false);
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      positionX.set(e.clientX - rect.left);
      positionY.set(e.clientY - rect.top);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const shineBorder = useTransform(
    [positionX, positionY],
    ([x, y]) =>
      `radial-gradient(30% 30px at ${x}px ${y}px, black 45%, transparent)`
  );

  return (
    <div className={cn("relative z-50", className)}>
      <input
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        autoComplete="off"
        placeholder="Enter Name Here"
        type="text"
        name="name"
        className="h-12 w-full cursor-default rounded-md border border-[var(--glass-color)] bg-[var(--glass-color)] p-3.5 
        text-[var(--black-color)] dark:text-[var(--white-color)] transition-colors duration-500 placeholder:select-none placeholder:text-[var(--placeholder-color)] focus:border-[var(--secondary-color)] focus:outline-none"
      />

      <motion.input
        type="text"
        ref={divRef}
        disabled
        style={{
          border: "1px solid var(--secondary-color)",
          opacity,
          WebkitMaskImage: shineBorder,
          maskImage: shineBorder,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[var(--secondary-color)] bg-transparent p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
      />

      <IoIosSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-2xl text-[var(--placeholder-color)]" />
    </div>
  );
};

export default ShinyInput;
