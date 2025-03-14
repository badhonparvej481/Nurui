"use client";
import React from "react";
import {
  TabContents,
  TabContent,
  TabLists,
  TabList,
  TabsProvider,
} from "../../common/ImageTabs";
import SectionIntro from "@/components/common/SectionIntro";
import RadioTabs from "@/components/common/RadioTabs";
import Lottie from "lottie-react";
import missionAnimationData from "../../../../public/json/mission-animation-lottie.json";

const ImageTabsSection = () => {
  return (
    <section className="container h-full">
      <SectionIntro
        title={{
          highLiteWords: "Why Choose Us",
          normalWords: "At Kompose",
          highlightColor: "text-[var(--primary-color)]",
        }}
        sectionNameColor="text-[var(--primary-color)]"
        description="lorem Ips incorrectly spelled incorrectly  because of incorrect formatting rules in the description section of the document document type definition  definition definition definition"
      />

      <TabsProvider defaultValue="1" className="md:grid md:grid-cols-12 gap-24">
        <TabLists className="md:col-span-5">
          {tabs.map((tab, index) => (
            <TabList key={index} value={tab.id} index={index}>
              <div className="flex items-center gap-x-5">
                <Lottie
                  animationData={tab?.tabList?.icon}
                  loop={true}
                  className="size-24"
                />
                <div className="space-y-1.5">
                  <p className="text-2xl capitalize font-semibold">
                    {tab?.tabList?.title}
                  </p>
                  <p className="text-[var(--opacity-text-color)]">
                    {tab?.tabList?.description}
                  </p>
                </div>
              </div>
            </TabList>
          ))}
        </TabLists>

        <TabContents className="md:col-span-7">
          {tabs.map((tab, index) => (
            <TabContent key={index} value={tab.id} index={index}>
              <div className="space-y-4">
                <h2 className="text-lg capitalize">
                  <span className="border-b-2 border-white/35 pb-0.5">
                    What We o
                  </span>
                  fers
                </h2>
                <h1 className="text-5xl font-semibold max-w-xl">
                  {tab?.Content?.heading
                    .split(" ")
                    .slice(0, tab?.Content?.heading?.split(" ")?.length - 3)
                    .join(" ")}{" "}
                  <span className="text-[var(--primary-color)]">
                    {tab?.Content?.heading
                      .split(" ")
                      .slice(tab?.Content?.heading?.split(" ")?.length - 3)
                      .join(" ")}
                  </span>
                </h1>
                <p className="text-lg max-w-3xl text-[var(--opacity-text-color)]">
                  {tab?.Content?.description}
                </p>
                <RadioTabs data={tab?.Content?.tabs} />
              </div>
            </TabContent>
          ))}
        </TabContents>
      </TabsProvider>
    </section>
  );
};

export default ImageTabsSection;

const tabs = [
  {
    id: "1",
    tabList: {
      icon: missionAnimationData,
      title: "Custom Software Development",
      description:
        "UI components can improve UX by providing familiar consistent interactions",
    },
    Content: {
      title: "What We Provide",
      heading: "Your business obstacles solved with precision.",
      description:
        "We follow a structured approach with four key phases, each customized to fit your project's scope, budget, and timeline. Our process is influenced by past successful projects, ensuring each step is given the right amount of attention and refinement.",
      tabs: [
        {
          id: "alpha",
          title: "Alpha",
          content:
            "We focus on delivering modern, sleek designs integrated with a robust backend architecture, guaranteeing high-performance and scalable solutions for our clients.",
        },
        {
          id: "beta",
          title: "Beta",
          content:
            "Our expertise lies in creating seamless user experiences combined with a fast and secure infrastructure, ensuring top-tier reliability and efficiency.",
        },
        {
          id: "gamma",
          title: "Gamma",
          content:
            "With a customer-first mindset, we build solutions that prioritize both aesthetics and performance, ensuring long-term sustainability and success.",
        },
      ],
    },
  },
  {
    id: "2",
    tabList: {
      icon: missionAnimationData,
      title: "Custom Software Development",
      description:
        "UI components can improve UX by providing familiar consistent interactions",
    },
    Content: {
      title: "What We Provide",
      heading: "Your business obstacles solved with precision.",
      description:
        "We follow a structured approach with four key phases, each customized to fit your project's scope, budget, and timeline. Our process is influenced by past successful projects, ensuring each step is given the right amount of attention and refinement.",
      tabs: [
        {
          id: "alpha",
          title: "Alpha",
          content:
            "We focus on delivering modern, sleek designs integrated with a robust backend architecture, guaranteeing high-performance and scalable solutions for our clients.",
        },
        {
          id: "beta",
          title: "Beta",
          content:
            "Our expertise lies in creating seamless user experiences combined with a fast and secure infrastructure, ensuring top-tier reliability and efficiency.",
        },
        {
          id: "gamma",
          title: "Gamma",
          content:
            "With a customer-first mindset, we build solutions that prioritize both aesthetics and performance, ensuring long-term sustainability and success.",
        },
      ],
    },
  },
];
