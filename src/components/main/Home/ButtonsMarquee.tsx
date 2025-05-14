import BlinkButton from "@/bytenexia/button/BlinkButton";
import GetStartedButton from "@/bytenexia/button/GetStartedButton";
import GoBackButton from "@/bytenexia/button/GoBackButton";
import HoverShadowAnimationButton from "@/bytenexia/button/HoverShadowAnimationButton";
import UnapologeticButton from "@/bytenexia/button/UnapologeticButton";
import NewButton from "@/bytenexia/button/NewButton";
import PingPongAnimationButton from "@/bytenexia/button/PingPongAnimationButton";
import PixelArtButton from "@/bytenexia/button/PixelArtButton";
import { PulsatingButton } from "@/bytenexia/button/PulsatingButton";
import RoundedAnimationButton from "@/bytenexia/button/RoundedAnimationButton";
import ShinyAnimationButton from "@/bytenexia/button/ShinyAnimationButton";
import StatusButton from "@/bytenexia/button/StatusButton";
import SwipeButton from "@/bytenexia/button/SwipeButton";
import WorkButton from "@/bytenexia/button/WorkButton";
import { Marquee } from "@/components/ui/marquee/Marquee";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BorderMagicButton from "@/bytenexia/button/BorderMagicButton";
import { ColorChangingButton } from "@/bytenexia/button/ColorChangingButton";
import { SpotlightButton } from "@/bytenexia/button/SpotlightButton";
import BorderAnimationButton from "@/bytenexia/button/BorderAnimationButton";
import StarWarsButton from "@/bytenexia/button/StarWarsButton";
import GradientButton from "@/bytenexia/button/GradientButton";

const ButtonsMarquee = () => {
  return (
    <div className="border-y border-[var(--secondary-color)]">
      <div className="flex items-center justify-between bg-[var(--glass-color-2)] py-3.5 px-7">
        <p className="font-semibold">Buttons</p>
        <button className="flex items-center gap-2">
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
          <BlinkButton />
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