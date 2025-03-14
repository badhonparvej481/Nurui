"use client";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/common/StackingCards";
import SectionIntro from "@/components/common/SectionIntro";
import missionAnimationData from "../../../../public/json/mission-animation-lottie.json";
import Lottie from "lottie-react";
import ImageComponent from "@/components/common/Image";

const cards = [
  {
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
];

export default function StackingCardsSection() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <div className="container" ref={(node) => setContainer(node)}>
      <SectionIntro
        title={{
          highLiteWords: "Why Choose Us",
          normalWords: "At Kompose lorem dolor sit amet inter",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionGap="pb-4"
      />
      <StackingCards
        totalCards={cards.length}
        scrollOptons={{ container: { current: container } }}
      >
        {cards.map(({ description, icon, title, image }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[700px] ">
              <div
                className="h-[50%] md:h-[85%] aspect-video py-10 w-full  mx-auto relative rounded-2xl bg-gradient-to-t from-white/5 via-white/5 to-[var(--secondary-color-4)] border 
              border-[white]/20 backdrop-blur-2xl flex items-center justify-between px-6 md:px-16 text-center md:text-left"
              >
                <div className="md:w-1/2 space-y-4 md:space-y-5">
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="size-24 hidden md:block"
                  />
                  <h2 className="text-3xl md:text-5xl font-semibold">
                    {title}
                  </h2>
                  <p className="text-lg">{description}</p>
                  <button className="bg-[var(--secondary-color)] text-[var(--black-color)] font-semibold px-4 py-2 text-lg rounded-full">
                    Get started
                  </button>
                </div>
                <ImageComponent
                  src={image}
                  className="size-[520px] hidden md:block"
                />
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </div>
  );
}
