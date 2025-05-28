"use client";
import RoundedButton from "@/components/common/RoundedButton";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

const ComponentsNavbar = () => {
  const { sideBar, setSideBar } = useAppContext();
  return (
    <div
      className={`fixed top-0 z-50 md:right-0 ${
        sideBar
          ? "w-full md:w-[calc(100%-18rem)]"
          : "'w-full md:w-[calc(100vw-5rem)] "
      }`}
    >
      <nav className="w-full h-16 py-2 px-5 flex items-center justify-between border-b border-[var(--primary-color-1)] border-dashed bg-[var(--background-color)] lg:bg-transparent lg:backdrop-blur-md lg:overflow-hidden">
        <>
          {sideBar ? (
            <GoSidebarExpand
              className="text-2xl cursor-pointer  hidden md:block"
              onClick={() => {
                setSideBar(false);
              }}
            />
          ) : (
            <GoSidebarCollapse
              className="text-2xl cursor-pointer  hidden md:block"
              onClick={() => {
                setSideBar(true);
              }}
            />
          )}
        </>
        <div className="hidden lg:flex items-center gap-5 *:text-2xl">
          <RoundedButton
            icon={
              <IoIosSearch className="text-xl text-[var(--primary-color)]" />
            }
          />
          <RoundedButton
            href="https://github.com/Mdafsarx?tab=repositories"
            icon={<FaDiscord className="text-xl text-[var(--primary-color)]" />}
          />
          <RoundedButton
            href="https://github.com/Mdafsarx?tab=repositories"
            icon={<FaGithub className="text-xl text-[var(--primary-color)]" />}
          />
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default ComponentsNavbar;
