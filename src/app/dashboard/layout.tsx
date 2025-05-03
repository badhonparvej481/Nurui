import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
