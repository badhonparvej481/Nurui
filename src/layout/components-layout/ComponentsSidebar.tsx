import Bytenexia from "@/components/common/Bytenexia";
import ImageComponent from "@/components/common/Image";
import MenuItem from "@/components/common/MenuItem";
import React from "react";
import { LuBotMessageSquare, LuLayoutDashboard } from "react-icons/lu";
import { TfiHelpAlt } from "react-icons/tfi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineManageAccounts,
  MdOutlineSettings,
} from "react-icons/md";

const ComponentsSidebar = () => {
  return (
    <div className="bg-[var(--purple-color)] border-r border-[var(--primary-color-1)] w-[17rem] min-h-screen flex flex-col justify-between pt-3 pb-6">
      <div>
        <div className="flex items-center justify-center gap-1 mb-4">
          <Bytenexia className="text-xl" />
          <p className="bg-[var(--primary-color-2)] text-[var(--primary-color)] rounded-full font-semibold px-1.5 text-[0.65rem]">
            Basic
          </p>
        </div>

        {/* profile */}
        <div className="bg-[var(--glass-color-2)] w-52 mx-auto h-14 rounded-md flex items-center gap-1.5 px-2.5 mb-6">
          <ImageComponent
            src="https://res.cloudinary.com/dbrceqag4/image/upload/v1744361162/vbfacdl9cxhpehyfhwiw.svg"
            className="rounded-full size-10  object-cover"
          />
          <div>
            <p className="text-sm">Md Afsar Mahmud</p>
            <p className="text-xs">
              {"mdafsar.dev@gmail.com".split("").slice(0, 18).join("")}...
            </p>
          </div>
          <div className="flex flex-col">
            <MdOutlineKeyboardArrowUp className="-mb-2" />
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        <div className="text-sm px-2 space-y-1">
          {navigation?.slice(0, 4).map((nav, index) => (
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

      <div className="text-sm px-2 space-y-1">
        <p className="text-[var(--black-color-4)] pl-2.5 uppercase">Others</p>
        {navigation?.slice(4).map((nav, index) => (
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
  );
};

export default ComponentsSidebar;

const navigation = [
  {
    icon: <LuLayoutDashboard />,
    title: "Dashboard",
    submenu: [{ name: "overview", href: "/" }],
  },
  {
    icon: <LuBotMessageSquare />,
    title: "Messages",
    submenu: [
      { name: "All messages", href: "/" },
      { name: "Unread messages", href: "/" },
    ],
  },
  {
    icon: <MdOutlineManageAccounts />,
    title: "Accounts",
    submenu: [{ name: "Add accounts", href: "/" }],
  },
  {
    icon: <MdOutlineSettings />,
    title: "Settings",
    submenu: [{ name: "privacy", href: "/" }],
  },
  {
    icon: <TfiHelpAlt />,
    title: "Help",
  },
];
