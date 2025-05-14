import BlinkButton from "@/bytenexia/button/BlinkButton";
import GetStartedButton from "@/bytenexia/button/GetStartedButton";
import GoBackButton from "@/bytenexia/button/GoBackButton";
import HoverShadowAnimationButton from "@/bytenexia/button/HoverShadowAnimationButton";
import NewButton from "@/bytenexia/button/NewButton";
import PingPongAnimationButton from "@/bytenexia/button/PingPongAnimationButton";
import PixelArtButton from "@/bytenexia/button/PixelArtButton";
import RoundedAnimationButton from "@/bytenexia/button/RoundedAnimationButton";
import ShinyAnimationButton from "@/bytenexia/button/ShinyAnimationButton";
import StarButton from "@/bytenexia/button/StarButton";
import StatusButton from "@/bytenexia/button/StatusButton";
import SwipeButton from "@/bytenexia/button/SwipeButton";
import WorkButton from "@/bytenexia/button/WorkButton";
import { Marquee } from "@/components/ui/marquee/Marquee";
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
        <Marquee pauseOnHover className="[--duration:20s] flex items-center">
          <GetStartedButton />
          <StatusButton />
          <GoBackButton />
          <WorkButton />
          <SwipeButton />
          <StarButton />
          <PixelArtButton />
          <NewButton />
          <RoundedAnimationButton />
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          <GoBackButton />
          <PingPongAnimationButton />
          <BlinkButton />
          <ShinyAnimationButton />
          <HoverShadowAnimationButton />
        </Marquee>
      </div>
    </div>
  );
};

export default ButtonsMarquee;
