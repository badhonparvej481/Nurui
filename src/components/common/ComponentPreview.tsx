import React from "react";
import { Index } from "@/registry";
import AnimatedTabs from "./AnimatedTabs";
import { IoEyeOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import Preview from "./Preview";
import ComponentPreviewIntro from "./ComponentPreviewIntro";
import { CodeBlock } from "../ui/code-block/CodeBlock";

interface ComponentPreviewProps {
  name: keyof typeof Index;
}

const ComponentPreview = ({ name }: ComponentPreviewProps) => {
  const DemoComponent = Index[name]?.component;
  const sourceCode = Index[name]?.code ?? "";

  if (!DemoComponent) {
    return (
      <p className="text-sm text-red-500">
        Component {name} not found in registry.
      </p>
    );
  }

  const tabs = [
    {
      id: "Preview",
      icon: <IoEyeOutline />,
      label: "Preview",
      content: <Preview component={<DemoComponent />} />,
    },
    {
      id: "Code",
      icon: <FaCode />,
      label: "Code",
      content: <CodeBlock code={sourceCode} />,
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
