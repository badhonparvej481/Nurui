import React from "react";
import { FaRocket } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import ShinyCard from "@/components/nurui/shiny-card";

export default function ShinyCardDemo() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 xl:gap-5 2xl:gap-10">
      {data.map((feature, index) => (
        <ShinyCard
          key={index}
          featureName={feature.featureName}
          featureItems={feature.featureItems}
          icon={feature.icon}
        />
      ))}
    </div>
  );
}

const data = [
  {
    featureName: "Fast Performance",
    featureItems: [
      "Optimized for speed",
      "Low latency",
      "Lightweight and efficient",
    ],
    icon: <FaRocket />,
  },
  {
    featureName: "Tech Stack Agnostic",
    featureItems: ["React, Next.js.", "JS and TS support", "Works anywhere"],
    icon: <GrTechnology />,
  },
];
