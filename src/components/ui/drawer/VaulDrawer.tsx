"use client";
import { Drawer } from "vaul";
import React from "react";
import { CgMenuRight } from "react-icons/cg";
import MenuItem from "@/components/common/MenuItem";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrInstallOption } from "react-icons/gr";
import { TbComponents, TbHandClick } from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";

export default function VaulDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger className="bg-[var(--primary-color-3)] hover:bg-[var(--primary-color-2)] rounded p-0.5 block lg:hidden">
        <CgMenuRight className="text-[var(--primary-color)] text-2xl md:text-3xl" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60" />
        <Drawer.Content className="bg-[var(--background-color)] flex flex-col rounded-t-3xl border-t border-[var(--primary-color-1)] h-[80%] lg:h-80 fixed bottom-0 left-0 right-0 outline-none z-50 p-5">
          <div className="overflow-y-auto">
            <div className="w-24 h-[1px] mx-auto bg-[var(--primary-color-2)]" />
            <div className="text-sm px-2 space-y-1 py-6">
              {navigation?.slice(0).map((nav, index) => (
                <MenuItem
                  key={nav?.title + index}
                  icon={nav.icon}
                  title={nav.title}
                  submenu={nav?.submenu}
                  parentHover={false}
                  subMenuHover={true}
                />
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

const navigation = [
  {
    icon: <AiOutlineFileSearch />,
    title: "component",
  },
  {
    icon: <GrInstallOption />,
    title: "About",
  },
  {
    icon: <TbComponents />,
    title: "contact",
  },
  {
    icon: <TbHandClick />,
    title: "Blog",
  },
  {
    icon: <AiOutlineFileSearch />,
    title: "Introduction",
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
