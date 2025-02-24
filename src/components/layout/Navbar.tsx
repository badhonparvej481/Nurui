"use client";
import BorderAnimationButton from "@/components/common/BorderAnimationButton";
import Link from "next/link";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Bytenexia from "@/components/common/Bytenexia";
import { NavigationDrawer } from "@/components/common/drawer/NavigationDrawer";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <nav className="container flex flex-wrap items-center justify-between h-16 lg:h-24">
      <Bytenexia fontSize="text-2xl lg:text-3xl" />

      <div className="hidden lg:flex items-center  py-2.5 px-3.5 bg-[var(--glass-color)] border dark:border-0 border-[var(--border-color)] rounded-full font-semibold">
        {navigation.map((nav) => (
          <Link
            className={
              navigationActive(nav.url, pathName)
                ? `navigation-active bg-[var(--primary-color)] dark:bg-[var(--glass-color-3)] hover:dark:bg-[var(--glass-color-4)]`
                : `navigation-unactive`
            }
            key={nav.id}
            href={nav.url}
          >
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <ThemeSwitcher />
        <BorderAnimationButton title="sing in" />
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
  );
};

export default Navbar;

const navigation = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "services",
    url: "/services",
  },
  {
    id: 3,
    name: "works",
    url: "/works",
  },
  {
    id: 4,
    name: "pages",
    url: "/pages",
  },
  {
    id: 5,
    name: "blog",
    url: "/blog",
  },
];
