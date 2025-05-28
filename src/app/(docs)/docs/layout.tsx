"use client";
import React from "react";
import { IChildren } from "@/types/type";
import ComponentsRightSidebar from "@/layout/components-layout/ComponentsRightSidebar";
import { useAppContext } from "@/context/AppContext";
import ComponentsFooter from "@/layout/components-layout/ComponentsFooter";

const Layout = ({ children }: IChildren) => {
  const { sideBar } = useAppContext();
  return (
    <div className={`flex items-start pt-16 ${sideBar ? "pl-72" : "pl-16"}`}>
      <div className="w-[calc(100%-18rem)] flex flex-col min-h-screen">
        <main className="p-5">{children}</main>
        <ComponentsFooter />
      </div>
      <ComponentsRightSidebar />
    </div>
  );
};

export default Layout;
