import React from "react";
import FeatureCard from "@/components/common/FeatureCard";
import SectionIntro from "@/components/common/SectionIntro";
import { FaRocket } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

export default function FeaturesSection() {
  return (
    <section className="feature-section container ">
      <SectionIntro
        sectionName="Features"
        sectionNameColor="text-[var(--primary-color)]"
        title={{
          highLiteWords: "Choose Us",
          normalWords: "Why Developers",
          highlightColor: "text-[var(--primary-color)]",
        }}
        description="Explore cutting-edge tools designed to boost your workflow and UI development experience—across multiple frameworks, with unmatched speed, flexibility, and customization."
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-5 2xl:gap-10">
        {data.map((feature, index) => (
          <FeatureCard
            key={index}
            featureName={feature.featureName}
            featureItems={feature.featureItems}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
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
    featureName: "User Friendly Interface",
    featureItems: [
      "Intuitive and clean design",
      "Easy to customize",
      "Smooth navigation",
      "Responsive layout",
    ],
    icon: <FaPaintBrush />,
  },
  {
    featureName: "Full Customization",
    featureItems: [
      "Theme support",
      "Dark/light mode ready",
      "Easily override styles",
    ],
    icon: <BiCustomize />,
  },
  {
    featureName: "Tech Stack Agnostic",
    featureItems: [
      "React, Angular, Next.js and more.",
      "JS and TS support",
      "Works anywhere",
    ],
    icon: <GrTechnology />,
  },
];