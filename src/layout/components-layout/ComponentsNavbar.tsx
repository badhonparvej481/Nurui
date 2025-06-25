"use client";
import RoundedButton from "@/components/common/RoundedButton";
// import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import VaulDrawer from "@/components/ui/drawer/VaulDrawer";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
// import { IoIosSearch } from "react-icons/io";

const ComponentsNavbar = () => {
  const { sideBar, setSideBar } = useAppContext();
  return (
    <div
      className={`fixed top-0 z-50 xl:right-0 ${
        sideBar
          ? "w-full xl:w-[calc(100%-18rem)]"
          : "'w-full xl:w-[calc(100vw-5rem)] "
      }`}
    >
      <nav className="w-full h-16 py-2 px-5 flex items-center justify-between border-b border-[var(--primary-color-1)] border-dashed bg-[var(--background-color)] lg:bg-transparent lg:backdrop-blur-md lg:overflow-hidden">
        <>
          {sideBar ? (
            <GoSidebarExpand
              className="text-2xl cursor-pointer  hidden xl:block"
              onClick={() => {
                setSideBar(false);
              }}
            />
          ) : (
            <GoSidebarCollapse
              className="text-2xl cursor-pointer  hidden xl:block"
              onClick={() => {
                setSideBar(true);
              }}
            />
          )}
        </>
        <VaulDrawer />
        <div className="flex items-center md:gap-5 *:text-2xl">
          {/* <RoundedButton
            icon={
              <IoIosSearch className="text-xl text-[var(--primary-color)]" />
            }
          /> */}
          <RoundedButton
            href="https://discord.gg/XzAh8V3S"
            icon={
              <FaDiscord className="text-2xl text-[var(--primary-color)]" />
            }
          />
          <RoundedButton
            href="https://github.com/Mdafsarx/Nurui"
            icon={<FaGithub className="text-2xl text-[var(--primary-color)]" />}
          />
          <RoundedButton
            href="https://x.com/md_afsar_mahmud"
            icon={
              <FaXTwitter className="text-2xl text-[var(--primary-color)]" />
            }
          />
          {/* <ThemeSwitcher /> */}
        </div>
      </nav>
    </div>
  );
};

export default ComponentsNavbar;
