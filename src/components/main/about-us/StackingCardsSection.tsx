"use client";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/common/StackingCards";
import SectionIntro from "@/components/common/SectionIntro";
import designAnimationData from "../../../../public/json/design-animation-lottie.json";
import developerAnimationData from "../../../../public/json/developer-lottie.json";
import communityAnimationData from "../../../../public/json/community-lottie.json";
import visionAnimationData from "../../../../public/json/vision-lottie.json";
import missionAnimationData from "../../../../public/json/mission-lottie.json";
import Lottie from "lottie-react";
import ImageComponent from "@/components/common/Image";

export default function StackingCardsSection() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <section
      className="container pb-14 xl:pb-0"
      ref={(node) => setContainer(node)}
    >
      <SectionIntro
        title={{
          highLiteWords: "Stands Out",
          normalWords: "Why Bytenexia",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionGap="pb-2.5 xl:pb-3"
        description="Bytenexia delivers elegant, modular UI components built for speed and scalability.
        Bytenexia focuses on minimalist design, intuitive use, and developer experience.
        Bytenexia is powered by an open-source community with a future-ready vision."
      />
      <StackingCards
        totalCards={cards.length}
        scrollOptons={{ container: { current: container } }}
      >
        {cards.map(({ description, icon, title, image }, index) => {
          return (
            <StackingCardItem
              key={index}
              index={index}
              className="h-96 xl:h-[700px]"
            >
              <div
                className="h-96 xl:h-[600px] aspect-video py-10 w-full  mx-auto relative rounded-2xl bg-gradient-to-t from-white/5 via-white/5 to-[var(--secondary-color-4)] border 
              border-[white]/20 backdrop-blur-2xl flex items-center justify-between px-6 xl:px-16 text-center xl:text-left"
              >
                <div className="xl:w-1/2 space-y-4 lg:space-y-5">
                  <Lottie
                    animationData={icon}
                    loop={true}
                    className="size-28 hidden xl:block bg-[var(--secondary-color-3)] hover:bg-[var(--secondary-color-2)] border border-[var(--secondary-color)] rounded-full p-2"
                  />
                  <h2 className="text-3xl xl:text-5xl font-semibold">
                    {title}
                  </h2>
                  <p className="text-xl text-balance xl:text-pretty">
                    {description}
                  </p>
                </div>
                <ImageComponent
                  src={image}
                  className="size-[520px] hidden xl:block"
                />
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </section>
  );
}

const cards = [
  {
    title: "Our Mission",
    description:
      "To simplify UI development by providing developers with elegant, modular components that promote speed, consistency, and scalability across every project.",
    icon: missionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Design Philosophy",
    description:
      "Bytenexia blends minimalism with functionality—each component is crafted with care, focusing on clean aesthetics and purposeful interactions.",
    icon: designAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Developer Experience",
    description:
      "We obsess over DX. That means clear docs, predictable APIs, smart defaults, and zero unnecessary friction—from install to production.",
    icon: developerAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Community & Open Source",
    description:
      "Bytenexia is built with and for the community. We're open-source, transparent, and always eager to learn and grow with developers worldwide.",
    icon: communityAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
  {
    title: "Future Vision",
    description:
      "We're not just building components—we're creating an ecosystem. Expect design systems, headless UI, plugin support, and more in our future roadmap.",
    icon: visionAnimationData,
    image:
      "https://res.cloudinary.com/dz1fy2tof/image/upload/v1741872282/mail_jrgkjh.png",
  },
];