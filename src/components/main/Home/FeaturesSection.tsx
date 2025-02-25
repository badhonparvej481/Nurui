import React from "react";
import FeatureCard from "@/components/common/FeatureCard";
import SectionIntro from "@/components/common/SectionIntro";
import { FaHeadset, FaLock, FaRocket } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="feature-section container ">
      <SectionIntro
        sectionName="Features"
        sectionNameColor="text-[var(--primary-color)]"
        title={{
          highLiteWords: "Explore Our ",
          normalWords: "Key Features ",
          highlightColor: "text-[var(--primary-color)]",
        }}
        description="Discover the powerful features designed to make your experience seamless, efficient, and enjoyable. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      <div className="grid grid-cols-4 gap-10">
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
      "Efficient resource usage",
    ],
    icon: <FaRocket />,
  },
  {
    featureName: "Secure Transactions",
    featureItems: [
      "End-to-end encryption",
      "Fraud detection",
      "Secure payment gateways",
      "Efficient resource usage",
    ],
    icon: <FaLock />,
  },
  {
    featureName: "User-Friendly Interface",
    featureItems: [
      "Intuitive design",
      "Easy navigation",
      "Customizable themes",
    ],
    icon: <FaPaintBrush />, // From react-icons/fa
  },
  {
    featureName: "24/7 Support",
    featureItems: [
      "Live chat support",
      "Dedicated help center",
      "Quick response times",
    ],
    icon: <FaHeadset />, // From react-icons/fa
  },
  // {
  //   featureName: "Cross-Platform Compatibility",
  //   featureItems: [
  //     "Works on all devices",
  //     "Seamless sync",
  //     "Responsive design",
  //   ],
  //   icon: <FaSync />, // From react-icons/fa
  // },
  // {
  //   featureName: "Advanced Analytics",
  //   featureItems: [
  //     "Real-time data insights",
  //     "Custom reports",
  //     "Trend analysis",
  //   ],
  //   icon: <FaChartLine />, // From react-icons/fa
  // },
  // {
  //   featureName: "Scalable Solutions",
  //   featureItems: [
  //     "Grows with your business",
  //     "Flexible pricing",
  //     "Modular architecture",
  //   ],
  //   icon: <FaExpand />, // From react-icons/fa
  // },
  // {
  //   featureName: "Eco-Friendly",
  //   featureItems: [
  //     "Reduced carbon footprint",
  //     "Energy-efficient servers",
  //     "Sustainable practices",
  //   ],
  //   icon: <FaLeaf />, // From react-icons/fa
  // },
];
