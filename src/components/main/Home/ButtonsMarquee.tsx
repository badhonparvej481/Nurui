import GetStartedButton from "@/bytenexia/components/ts/button/get-started/GetStartedButton";
import GoBackButton from "@/bytenexia/components/ts/button/go-back/GoBackButton";
import HoverShadowAnimationButton from "@/bytenexia/components/ts/button/hover-shadow/HoverShadowButton";
import UnapologeticButton from "@/bytenexia/components/ts/button/unapologetic/UnapologeticButton";
import NewButton from "@/bytenexia/components/ts/button/new/NewButton";
import PingPongAnimationButton from "@/bytenexia/components/ts/button/ping-pong/PingPongButton";
import PixelArtButton from "@/bytenexia/components/ts/button/pixel/PixelButton";
import { PulsatingButton } from "@/bytenexia/components/ts/button/pulsating/PulsatingButton";
import RoundedAnimationButton from "@/bytenexia/components/ts/button/rounded/RoundedButton";
import ShinyAnimationButton from "@/bytenexia/components/ts/button/shiny/ShinyButton";
import StatusButton from "@/bytenexia/components/ts/button/status/StatusButton";
import SwipeButton from "@/bytenexia/components/ts/button/swiper/SwipeButton";
import WorkButton from "@/bytenexia/components/ts/button/work/WorkButton";
import { Marquee } from "@/components/ui/marquee/Marquee";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BorderMagicButton from "@/bytenexia/components/ts/button/border-magic/BorderMagicButton";
import { ColorChangingButton } from "@/bytenexia/components/ts/button/color-changing/ColorChangingButton";
import { SpotlightButton } from "@/bytenexia/components/ts/button/spotlight/SpotlightButton";
import BorderAnimationButton from "@/bytenexia/components/ts/button/border-animation/BorderAnimationButton";
import StarWarsButton from "@/bytenexia/components/ts/button/star-wars/StarWarsButton";
import GradientButton from "@/bytenexia/components/ts/button/gradient/GradientButton";

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