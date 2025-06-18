import React from "react";
import AnimatedTabs from "./AnimatedTabs";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Preview from "./Preview";
import { CodeBlockDemo } from "../ui/code-block/CodeBlockDemo";
import ComponentPreviewIntro from "./ComponentPreviewIntro";

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
      <ComponentPreviewIntro />
      <AnimatedTabs tabs={tabs} />
    </div>
  );
};

export default ComponentPreview;
