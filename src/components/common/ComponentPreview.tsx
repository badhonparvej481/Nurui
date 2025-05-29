import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Preview from "./Preview";
import { CodeBlockDemo } from "../ui/code-block/CodeBlockDemo";

const ComponentPreview = () => {
  const tabs = [
    {
      id: "Preview",
      icon: <IoEyeOutline />,
      label: "Preview",
      content: <Preview />,
    },
    {
      id: "Code",
      icon: <FaCode />,
      label: "Code",
      content: <CodeBlockDemo />,
    },
  ];
  return (
    <div>
      <h2 className="text-4xl font-bold pb-4">Button</h2>
      <AnimatedTabs tabs={tabs} />
    </div>
  );
};

export default ComponentPreview;
