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
              {tab?.tabList}
            </TabList>
          ))}
        </TabLists>

        <TabContents className="md:col-span-7">
          {tabs.map((tab, index) => (
            <TabContent key={index} value={tab.id} index={index}>
              {tab?.tabContent}
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
    tabList: (
      <div className="flex items-center gap-x-5">
        <Lottie
          animationData={missionAnimationData}
          loop={true}
          className="size-24"
        />
        <div className="space-y-1.5">
          <p className="text-2xl capitalize font-semibold">
            Custom Software Development
          </p>
          <p className="text-[var(--opacity-text-color)]">
            UI components can improve UX by providing familiar, consistent
            interactions
          </p>
        </div>
      </div>
    ),
    tabContent: (
      <div className="space-y-4">
        <h2 className="text-lg capitalize">
          <span className="border-b-2 border-white/35 pb-0.5">What We o</span>
          fers
        </h2>
        <h1 className="text-5xl font-semibold max-w-xl">
          Your critical business challenges{" "}
          <span className="text-[var(--primary-color)]">
            handled with care.
          </span>
        </h1>
        <p className="text-lg max-w-2xl text-[var(--opacity-text-color)]">
          Our approach is segmented into four defined phases, each tailored to
          your project’s unique requirements, budget, and schedule. The timeline
          for each phase is guided by past similar projects’ average durations,
          yet we ensure every project receives the necessary time and focus it
          requires.
        </p>
        <RadioTabs
          tabs={[
            {
              id: "one",
              title: "one",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
            {
              id: "two",
              title: "two",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
            {
              id: "three",
              title: "three",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: "2",
    tabList: (
      <div className="flex items-center gap-x-5">
        <Lottie
          animationData={missionAnimationData}
          loop={true}
          className="size-24"
        />
        <div className="space-y-1.5">
          <p className="text-2xl capitalize font-semibold">
            Custom Software Development
          </p>
          <p className="text-[var(--opacity-text-color)]">
            UI components can improve UX by providing familiar, consistent
            interactions
          </p>
        </div>
      </div>
    ),
    tabContent: (
      <div className="space-y-4">
        <h2 className="text-lg capitalize">
          <span className="border-b-2 border-white/35 pb-0.5">What We o</span>
          fers
        </h2>
        <h1 className="text-5xl font-semibold max-w-xl">
          Your critical business challenges{" "}
          <span className="text-[var(--primary-color)]">
            handled with care.
          </span>
        </h1>
        <p className="text-lg max-w-2xl text-[var(--opacity-text-color)]">
          Our approach is segmented into four defined phases, each tailored to
          your project’s unique requirements, budget, and schedule. The timeline
          for each phase is guided by past similar projects’ average durations,
          yet we ensure every project receives the necessary time and focus it
          requires.
        </p>
        <RadioTabs
          tabs={[
            {
              id: "one",
              title: "one",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
            {
              id: "two",
              title: "two",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
            {
              id: "three",
              title: "three",
              content: (
                <div>
                  <p>
                    Our team is committed to prioritizing modern and
                    sophisticated design alongside a high-speed backend
                    infrastructure, ensuring the delivery of scalable and
                    trustworthy solutions to our customers.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>
    ),
  },
];
