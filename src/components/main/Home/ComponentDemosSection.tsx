import SectionIntro from "@/components/common/SectionIntro";
import { BentoDemo } from "@/components/ui/bento-grid/BentoGrid";
import React from "react";

const ComponentDemosSection = () => {
  return (
    <section>
      <SectionIntro
        title={{
          fullHighLightColor: "text-[var(--secondary-color)]",
          normalWords: "Component",
          highLiteWords: "Demos",
        }}
        description="Here are some of the components that you can use to build your landing pages."
      />
      <BentoDemo />
    </section>
  );
};

export default ComponentDemosSection;
