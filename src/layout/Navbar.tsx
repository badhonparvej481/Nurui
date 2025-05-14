"use client";
import Link from "next/link";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Bytenexia from "@/components/common/Bytenexia";
import nProgress from "nprogress";
import { RxCross2 } from "react-icons/rx";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import { NavigationDrawer } from "@/components/ui/drawer/NavigationDrawer";
import RoundedButton from "@/components/common/RoundedButton";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  if (
    pathName.includes("sing-in") ||
    pathName.includes("sing-up") ||
    pathName.includes("components")
  )
    return null;

  return (
    <div className="sticky top-0 z-50 bg-[var(--background-color)] lg:bg-transparent lg:backdrop-blur-lg lg:overflow-hidden w-full border-dashed border-b border-white/20 ">
      <nav className="container flex flex-wrap items-center justify-between h-16 lg:h-24">
        {open ? (
          <RxCross2 className="text-[var(--primary-color)] text-3xl bg-[var(--primary-color-3)] rounded p-0.5 block lg:hidden" />
        ) : (
          <Bytenexia className="text-2xl lg:text-3xl" />
        )}

        <div
          className="hidden lg:flex items-center  py-2.5 px-3.5 bg-[var(--glass-color)] dark:bg-[white]/5 border 
         border-[var(--border-color)] dark:border-white/15 rounded-full font-semibold"
        >
          {navigation.map((nav) => (
            <Link
              className={
                navigationActive(nav.url, pathName)
                  ? `navigation-active text-[--text-primary-color] bg-[var(--primary-color)] dark:bg-white/10 hover:dark:bg-[var(--glass-color-4)]`
                  : `navigation-unactive`
              }
              key={nav.id}
              href={nav.url}
              onClick={() => nProgress.start()}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <RoundedButton
            icon={
              <IoIosSearch className="text-2xl text-[var(--primary-color)]" />
            }
          />
          <RoundedButton
            href="https://github.com/Mdafsarx?tab=repositories"
            icon={
              <FaDiscord className="text-2xl text-[var(--primary-color)]" />
            }
          />
          <RoundedButton
            href="https://github.com/Mdafsarx?tab=repositories"
            icon={<FaGithub className="text-2xl text-[var(--primary-color)]" />}
          />
          <ThemeSwitcher />
          {/* <BorderAnimationButton title="sing in" navigation="/auth/sing-in" /> */}
        </div>
        {/* drawer */}
        <>
          <button
            type="button"
            onClick={handleOpen}
            className="bg-[var(--primary-color-3)] hover:bg-[var(--primary-color-2)] rounded p-0.5 block lg:hidden"
          >
            <CgMenuRight className="text-[var(--primary-color)] text-3xl" />
          </button>
          <NavigationDrawer anchor="right" open={open} onClose={handleClose} />
        </>
      </nav>
    </div>
  );
};

export default Navbar;

const navigation = [
  {
    id: 1,
    name: "pricing",
    url: "/pricing",
  },
  {
    id: 2,
    name: "component",
    url: "/components",
  },
  {
    id: 3,
    name: "About",
    url: "/about-us",
  },
  {
    id: 4,
    name: "contact",
    url: "/contact-us",
  },
  {
    id: 5,
    name: "Blog",
    url: "/blog",
  },
];