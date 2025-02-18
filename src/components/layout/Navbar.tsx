"use client";
import BorderAnimationButton from "@/components/common/BorderAnimationButton";
import CenterIcon from "@/components/common/CenterIcon";
import Link from "next/link";
import Bytenexia from "../common/Bytenexia";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import { ImSearch } from "react-icons/im";
import { NavigationDrawer } from "../common/drawer/NavigationDrawer";
import { useCallback, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
// import NavigationDrawer from "../common/drawer/NavigationDrawer";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <nav className="container flex flex-wrap items-center justify-between h-16 lg:h-24">
      <Bytenexia fontSize="text-2xl lg:text-3xl" />

      <div className="hidden lg:flex items-center  py-2.5 px-3.5 bg-[var(--glass-color)] rounded-full">
        {navigation.map((nav) => (
          <Link
            className={
              navigationActive(nav.url, pathName)
                ? `navigation-active`
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
        <CenterIcon
          backgroundColor="bg-[var(--glass-color-2)] hover:bg-[var(--glass-color-3)]"
          icon={<ImSearch className="text-[var(--white-color)] text-2xl" />}
        />
        <BorderAnimationButton title="sing in" />
      </div>
      {/* <NavigationDrawer /> */}
      <button
        type="button"
        onClick={handleOpen}
        className="bg-[#3CA2FA33] hover:bg-[#3CA2FA66] rounded p-0.5 block lg:hidden"
      >
        <CgMenuRight className="text-[var(--primary-color)] text-3xl" />
      </button>
      <NavigationDrawer anchor="right" open={open} onClose={handleClose} />
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
