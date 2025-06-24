"use client";
import React from "react";
import { IChildren } from "@/types/types";
import ComponentsRightSidebar from "@/layout/components-layout/ComponentsRightSidebar";
import { useAppContext } from "@/context/AppContext";
import ComponentsFooter from "@/layout/components-layout/ComponentsFooter";

const Layout = ({ children }: IChildren) => {
  const { sideBar } = useAppContext();
  return (
    <div className={`flex items-start pt-16 ${sideBar ? "xl:pl-72" : "pl-16"}`}>
      <div className="w-full xl:w-[calc(100%-18rem)] flex flex-col min-h-screen">
        <main className="px-6 md:px-12 py-8">{children}</main>
        <ComponentsFooter />
      </div>
      <ComponentsRightSidebar />
    </div>
  );
};

export default Layout;
