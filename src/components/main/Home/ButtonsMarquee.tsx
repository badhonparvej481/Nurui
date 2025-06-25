import GetStartedButton from "@/components/nurui/GetStartedButton";
import GoBackButton from "@/components/nurui/GoBackButton";
import HoverShadowAnimationButton from "@/components/nurui/HoverShadowButton";
import UnapologeticButton from "@/components/nurui/UnapologeticButton";
import NewButton from "@/components/nurui/NewButton";
import PingPongAnimationButton from "@/components/nurui/PingPongButton";
import PixelArtButton from "@/components/nurui/PixelButton";
import { PulsatingButton } from "@/components/nurui/PulsatingButton";
import RoundedAnimationButton from "@/components/nurui/RoundedButton";
import ShinyAnimationButton from "@/components/nurui/ShinyButton";
import StatusButton from "@/components/nurui/StatusButton";
import SwipeButton from "@/components/nurui/SwipeButton";
import WorkButton from "@/components/nurui/WorkButton";
import { Marquee } from "@/components/ui/marquee/Marquee";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BorderMagicButton from "@/components/nurui/BorderMagicButton";
import { ColorChangingButton } from "@/components/nurui/ColorChangingButton";
import { SpotlightButton } from "@/components/nurui/SpotlightButton";
import BorderAnimationButton from "@/components/nurui/BorderAnimationButton";
import StarWarsButton from "@/components/nurui/StarWarsButton";
import GradientButton from "@/components/nurui/gradient-button";

const ButtonsMarquee = () => {
  return (
    <div className="border-y border-[var(--secondary-color)]">
      <div className="flex items-center justify-between bg-[var(--glass-color-2)] py-3.5 px-7">
        <p className="font-semibold">Buttons</p>
        <button className="flex items-center gap-2 hover:text-[var(--primary-color)] hover:underline">
          View <FaArrowRight />
        </button>
      </div>

      <div className="py-4 space-y-2">
        <Marquee
          itemsCenter="items-center"
          pauseOnHover
          className="[--duration:20s] flex items-center"
        >
          <GetStartedButton />
          <StatusButton />
          <GoBackButton />
          <WorkButton />
          <GradientButton />
          <SwipeButton />
          <BorderAnimationButton />
          <PixelArtButton />
          <NewButton />
          <RoundedAnimationButton />
        </Marquee>
        <Marquee
          itemsCenter="items-center"
          reverse
          pauseOnHover
          className="[--duration:20s]"
        >
          <StarWarsButton />
          <PingPongAnimationButton />
          <ShinyAnimationButton />
          <HoverShadowAnimationButton />
          <PulsatingButton>Join Affiliate Program</PulsatingButton>
          <UnapologeticButton />
          <BorderMagicButton />
          <ColorChangingButton />
          <SpotlightButton />
        </Marquee>
      </div>
    </div>
  );
};

export default ButtonsMarquee;
