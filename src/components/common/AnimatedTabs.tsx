"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  tabs: { id: string; icon?: ReactNode; label: string; content: ReactNode }[];
}

export default function AnimatedTabs({ tabs }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const uniqueId = uuidv4();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id
                ? ""
                : "hover:bg-white/10 border border-white/15 rounded-xl"
            } relative px-3 py-1.5 font-semibold flex items-center gap-x-1`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId={`bubble-${uniqueId}`}
                className="absolute inset-0 z-10 bg-white/15 border border-white/10 mix-blend-difference"
                style={{ borderRadius: 12 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab?.icon}
            {tab?.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
