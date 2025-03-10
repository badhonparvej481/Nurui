"use client";
import React, { ReactNode, useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
  isDesktop: boolean;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};

export function TabsProvider({
  children,
  defaultValue,
  className,
}: {
  children: ReactNode;
  defaultValue: string;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isDesktop }}>
      <div className={cn("w-full h-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl h-fit space-y-3", className)}>
      {children}
    </div>
  );
}

export function TabItem({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
  index: number;
}) {
  const { activeTab, setActiveTab } = useTabs();

  return (
    <motion.div
      className={`rounded-xl overflow-hidden ${
        activeTab === value ? "active " : ""
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </motion.div>
  );
}

export function TabHeader({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const { activeTab } = useTabs();
  return (
    <h3
      className={`p-4 cursor-pointer transition-all capitalize text-lg font-bold  ${
        activeTab === value
          ? "active bg-[var(--primary-color-2)] text-[var(--primary-color)]"
          : "bg-[var(--primary-color-3)] hover:bg-[var(--primary-color-2)] hover:text-[var(--primary-color)]"
      }`}
    >
      {children}
    </h3>
  );
}

export function TabDes({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  const { activeTab } = useTabs();
  return (
    <AnimatePresence mode="sync">
      {activeTab === value && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.14,
          }}
        >
          <p className={`bg-[var(--glass-color-2)] p-3`}>{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TabContentContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("", className)}>
      <AnimatePresence mode="popLayout">{children}</AnimatePresence>
    </div>
  );
}

export function TabContent({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
  index: number;
}) {
  const { activeTab, isDesktop } = useTabs();

  if (activeTab !== value || !isDesktop) return null;

  return (
    <motion.div className="p-4 h-[400px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, overflow: "hidden" }}
        animate={{ opacity: 1, overflow: "hidden" }}
        exit={{ opacity: 0, overflow: "hidden" }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
