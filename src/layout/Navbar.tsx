"use client";
import Link from "next/link";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import Bytenexia from "@/components/common/Bytenexia";
import nProgress from "nprogress";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import RoundedButton from "@/components/common/RoundedButton";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import VaulDrawer from "@/components/ui/drawer/VaulDrawer";

const Navbar = () => {
  const pathName = usePathname();

  if (
    pathName.includes("sing-in") ||
    pathName.includes("sing-up") ||
    pathName.includes("docs")
  )
    return null;

  return (
    <div className="sticky top-0 z-50 bg-[var(--background-color)] lg:bg-transparent lg:backdrop-blur-lg lg:overflow-hidden w-full border-dashed border-b border-white/20 ">
      <nav className="container flex flex-wrap items-center justify-between h-16 lg:h-24">
        <Bytenexia textSize="text-2xl lg:text-3xl" />

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
        <VaulDrawer />
      </nav>
    </div>
  );
};

export default Navbar;

const navigation = [
  {
    id: 1,
    name: "component",
    url: "/docs/components",
  },
  {
    id: 2,
    name: "About",
    url: "/about-us",
  },
  {
    id: 3,
    name: "contact",
    url: "/contact-us",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
];
