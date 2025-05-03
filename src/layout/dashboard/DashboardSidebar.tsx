import Bytenexia from "@/components/common/Bytenexia";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="bg-[var(--purple-color)] border-r border-[var(--primary-color-1)] w-60 min-h-screen">
      <div className="flex justify-center">
        <Bytenexia className="text-2xl py-2.5" />
      </div>
    </div>
  );
};

export default DashboardSidebar;
