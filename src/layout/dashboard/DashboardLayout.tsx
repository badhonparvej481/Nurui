import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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

export default DashboardLayout;
