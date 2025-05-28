import React from "react";
import ComponentsLeftSidebar from "./ComponentsLeftSidebar";
import ComponentsNavbar from "./ComponentsNavbar";
import { IChildren } from "@/types/type";

const ComponentsLayout = ({ children }: IChildren) => {
  return (
    <>
      <ComponentsLeftSidebar />
      <ComponentsNavbar />
      <main>{children}</main>
    </>
  );
};

export default ComponentsLayout;
