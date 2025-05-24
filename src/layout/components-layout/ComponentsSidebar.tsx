"use client";
import Bytenexia from "@/components/common/Bytenexia";
import MenuItem from "@/components/common/MenuItem";
import React from "react";
import { LuBotMessageSquare } from "react-icons/lu";
import { TfiHelpAlt } from "react-icons/tfi";
import { useAppContext } from "@/context/AppContext";
import { TbComponents, TbHandClick } from "react-icons/tb";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";

const ComponentsSidebar = () => {
  const { sideBar } = useAppContext();

  return (
    <div
      className={`bg-[var(--purple-color)] border-r border-[var(--primary-color-1)] border-dashed min-h-screen flex flex-col justify-between pt-3 pb-6 ${
        sideBar ? "w-72" : "w-16 items-center"
      }`}
    >
      <div className="space-y-5">
        {sideBar ? (
          <div className="flex items-center justify-center gap-1">
            <Bytenexia className="text-xl" />
            <p className="bg-[var(--primary-color-2)] text-[var(--primary-color)] rounded-full font-semibold px-1.5 text-[0.65rem]">
              Basic
            </p>
          </div>
        ) : (
          <LuBotMessageSquare className="text-[var(--primary-color)] text-2xl rotate-180 w-fit mx-auto" />
        )}

        <div className="text-sm px-2 space-y-1">
          {navigation?.slice(0, navigation?.length - 1).map((nav, index) => (
            <MenuItem
              key={nav?.title + index}
              icon={nav.icon}
              title={nav.title}
              submenu={nav?.submenu}
              parentHover={false}
              subMenuHover={true}
              sideBar={sideBar}
            />
          ))}
        </div>
      </div>

      <div className="text-sm px-2 space-y-1">
        <p className="text-[var(--black-color-4)] pl-2.5 uppercase">
          {sideBar && "others"}
        </p>
        {navigation?.slice(navigation?.length - 1).map((nav, index) => (
          <MenuItem
            key={nav?.title + index}
            icon={nav.icon}
            title={nav.title}
            submenu={nav?.submenu}
            parentHover={false}
            subMenuHover={true}
            sideBar={sideBar}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentsSidebar;

const navigation = [
  {
    icon: <AiOutlineFileSearch />,
    title: "Overview",
  },
  {
    icon: <GrInstallOption />,
    title: "Installation",
  },
  {
    icon: <TbComponents />,
    title: "Components",
  },
  {
    icon: <TbHandClick />,
    title: "Buttons",
    submenu: [{ name: "overview", href: "/" }],
  },
  {
    icon: <TfiHelpAlt />,
    title: "Help",
  },
];
