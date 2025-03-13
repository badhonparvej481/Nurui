/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/common/StackingCards";
import SectionIntro from "@/components/common/SectionIntro";

const cards = [
  {
    title: "The Guiding Light",
    description:
      "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
    image:
      "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    title: "Life Beneath the Waves",
    description:
      "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
    image:
      "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    title: "Alone on the Open Sea",
    description:
      "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
    image:
      "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
  },
  {
    title: "The Art of Sailing",
    description:
      "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Era of Whaling",
    description:
      "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
    image:
      "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
  },
];

export default function StackingCardsSection() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <div className="container" ref={(node) => setContainer(node)}>
      <SectionIntro
        title={{
          highLiteWords: "Why Choose Us",
          normalWords: "At Kompose",
          highlightColor: "text-[var(--secondary-color)]",
        }}
      />
      <StackingCards
        totalCards={cards.length}
        scrollOptons={{ container: { current: container } }}
      >
        {cards.map(({ description, image, title }, index) => {
          return (
            <StackingCardItem key={index} index={index} className="h-[700px]">
              <div
                className="h-[80%] sm:h-[85%] flex-col sm:flex-row aspect-video px-8 py-10 flex w-full  mx-auto relative rounded-2xl bg-gradient-to-t from-[white]/5 via-[white]/5 to-[var(--primary-color-4)] border 
              border-[white]/15 backdrop-blur-xl "
              >
                <div className="flex-1 flex flex-col justify-center"></div>

                <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden"></div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </div>
  );
}
