import React from "react";
import DashboardSidebar from "./ComponentsSidebar";
import DashboardNavbar from "./ComponentsNavbar";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex items-start">
        <DashboardSidebar />
        <DashboardNavbar />
      </div>
      {children}
    </div>
  );
};

export default ComponentsLayout;
