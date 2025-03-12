"use client";
import React from "react";
import {
  TabDes,
  TabHeader,
  TabContent,
  TabContentContainer,
  TabItem,
  TabLists,
  TabsProvider,
} from "../../common/ImageTabs";
import SectionIntro from "@/components/common/SectionIntro";
import RadioTabs from "@/components/common/RadioTabs";

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

      <TabsProvider
        defaultValue="improve"
        className="md:grid md:grid-cols-12 gap-24 items-start "
      >
        <TabLists className="md:col-span-5">
          {tabs.map((tab, index) => (
            <TabItem key={index} value={tab.id} index={index}>
              <TabHeader value={tab.id}>{tab.title}</TabHeader>
              <TabDes value={tab.id}>
                <p>{tab.description}</p>
              </TabDes>
            </TabItem>
          ))}
        </TabLists>
        <TabContentContainer className="md:col-span-7">
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
                  Your critical business challenges{" "}
                  <span className="text-[var(--primary-color)]">
                    handled with care.
                  </span>
                </h1>
                <p className="text-lg max-w-2xl text-[var(--opacity-text-color)]">
                  Our approach is segmented into four defined phases, each
                  tailored to your project’s unique requirements, budget, and
                  schedule. The timeline for each phase is guided by past
                  similar projects’ average durations, yet we ensure every
                  project receives the necessary time and focus it requires.
                </p>
                <RadioTabs />
              </div>
            </TabContent>
          ))}
        </TabContentContainer>
      </TabsProvider>
    </section>
  );
};

export default ImageTabsSection;

const tabs = [
  {
    title: "How do UI components improve UX?",
    id: "improve",
    description:
      "UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.",
    imageUrl:
      "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  },
  {
    title: "Important of UI component.",
    id: "important",
    description:
      "Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.",
    imageUrl:
      "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  },
  {
    title: "Is UI and UX Same?",
    id: "same",
    description:
      "     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.",
    imageUrl:
      "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
  },
  {
    title: "Important of UI component.",
    id: "important2",
    description:
      "Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.",
    imageUrl:
      "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  },
];
