import GetStartedButton from "@/bytenexia/button/get-started/GetStartedButton";
import GoBackButton from "@/bytenexia/button/go-back/GoBackButton";
import HoverShadowAnimationButton from "@/bytenexia/button/hover-shadow/HoverShadowButton";
import UnapologeticButton from "@/bytenexia/button/unapologetic/UnapologeticButton";
import NewButton from "@/bytenexia/button/new/NewButton";
import PingPongAnimationButton from "@/bytenexia/button/ping-pong/PingPongButton";
import PixelArtButton from "@/bytenexia/button/pixel/PixelButton";
import { PulsatingButton } from "@/bytenexia/button/pulsating/PulsatingButton";
import RoundedAnimationButton from "@/bytenexia/button/rounded/RoundedButton";
import ShinyAnimationButton from "@/bytenexia/button/shiny/ShinyButton";
import StatusButton from "@/bytenexia/button/status/StatusButton";
import SwipeButton from "@/bytenexia/button/swiper/SwipeButton";
import WorkButton from "@/bytenexia/button/work/WorkButton";
import { Marquee } from "@/components/ui/marquee/Marquee";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BorderMagicButton from "@/bytenexia/button/border-magic/BorderMagicButton";
import { ColorChangingButton } from "@/bytenexia/button/color-changing/ColorChangingButton";
import { SpotlightButton } from "@/bytenexia/button/spotlight/SpotlightButton";
import BorderAnimationButton from "@/bytenexia/button/border-animation/BorderAnimationButton";
import StarWarsButton from "@/bytenexia/button/star-wars/StarWarsButton";
import GradientButton from "@/bytenexia/button/gradient/GradientButton";

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
