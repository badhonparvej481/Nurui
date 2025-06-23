import React from "react";

const Preview = ({ component }: { component: React.ReactNode }) => {
  return (
    <div className="border border-[var(--primary-color-3)] rounded-2xl min-h-[30rem] flex items-center justify-center">
      {component}
    </div>
  );
};

export default Preview;
