"use client";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface IProps {
  tabs: { id: string; label: string; content: ReactNode }[];
}

export default function AnimatedTabs({ tabs }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="space-y-8">
      <div className="w-60 mx-auto rounded-full py-3 flex justify-center items-center bg-[var(--glass-color-2)] gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-6 py-3 font-semibold text-[var(--white-color)] transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[var(--white-color)] mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
}
