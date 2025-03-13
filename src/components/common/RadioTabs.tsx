"use client";
import React from "react";
interface IProps {
  tabs: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const RadioTabs: React.FC<IProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState("one");
  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(e.target.id);
  };

  return (
    <div className="space-y-3.5 pt-3">
      <div className="flex gap-2 w-fit border-b border-[var(--primary-color)]">
        {tabs?.map((tab) => (
          <label
            key={tab?.id}
            className="flex flex-grow items-center justify-center cursor-pointer"
          >
            <input
              type="radio"
              name="radio"
              id={tab?.id}
              className="peer hidden"
              onChange={handleTabChange}
              defaultChecked={tab?.id === tabs[0]?.id}
            />
            <span className="tracking-widest uppercase peer-checked:bg-[var(--primary-color-3)] peer-checked:border peer-checked:border-b-0 border-[var(--primary-color)] peer-checked:text-[var(--primary-color)] text-[var(--white-color)] font-semibold rounded-t-lg p-2 transition duration-150 ease-in-out">
              {tab?.title}
            </span>
          </label>
        ))}
      </div>
      <div> {tabs?.find((tab) => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default RadioTabs;
