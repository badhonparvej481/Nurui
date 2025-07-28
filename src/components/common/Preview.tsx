import React from "react";
import OpenInV0Button from "./OpenInV0Button";

const Preview = ({
  component,
  v0ComponentName,
}: {
  component: React.ReactNode;
  v0ComponentName?: string;
}) => {
  return (
    <div className="border border-[var(--primary-color)] dark:border-[var(--primary-color-3)] rounded-2xl min-h-[30rem] py3.5 flex items-center justify-center relative">
      <OpenInV0Button
        className="absolute right-2 top-2"
        v0ComponentName={v0ComponentName}
      />
      {component}
    </div>
  );
};

export default Preview;
