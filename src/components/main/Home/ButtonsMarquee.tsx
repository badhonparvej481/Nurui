import { MarqueeDemo } from "@/components/ui/marquee/MarqueeDemo";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ButtonsMarquee = () => {
  return (
    <div className="border-y border-[var(--secondary-color)]">
      <div className="flex items-center justify-between bg-[var(--glass-color-2)] py-3.5 px-7">
        <p className="font-semibold">Buttons</p>
        <button className="flex items-center gap-2">
          View <FaArrowRight />
        </button>
      </div>
      <div className="py-4">
        <MarqueeDemo />
      </div>
    </div>
  );
};

export default ButtonsMarquee;
