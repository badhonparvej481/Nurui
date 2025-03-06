"use client";
import AnimatedTabs from "@/components/common/AnimatedTabs";
import React from "react";
import PlanTable from "./PlanTable";
import SectionIntro from "@/components/common/SectionIntro";
import useStore from "@/store/useStore";

const FeatureComparison = () => {
  const { activeTab, setActiveTab } = useStore();
  return (
    <div>
      <SectionIntro
        title={{
          highLiteWords: "FeatureComparison",
          highlightColor: "text-[var(--secondary-color)]",
        }}
      />
      <button onClick={() => setActiveTab("abcd")}>{activeTab}</button>
      <AnimatedTabs tabs={tabs} />
    </div>
  );
};

export default FeatureComparison;

const tabs = [
  {
    id: "monthly",
    label: "Monthly",
    content: <PlanTable />,
  },
  {
    id: "yearly",
    label: "Yearly",
    content: <div></div>,
  },
];
