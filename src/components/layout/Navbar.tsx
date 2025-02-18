"use client";
import BorderAnimationButton from "@/components/common/BorderAnimationButton";
import CenterIcon from "@/components/common/CenterIcon";
import Link from "next/link";
import Bytenexia from "../common/Bytenexia";
import { NavigationActive } from "@/utils/NavigationActive";
import { usePathname } from "next/navigation";
import { ImSearch } from "react-icons/im";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="container flex flex-wrap items-center justify-between h-24">
      <Bytenexia fontSize="text-3xl" />

      <div className="flex items-center  py-2.5 px-3.5 bg-[var(--glass-color)] rounded-full">
        {navigation.map((nav) => (
          <Link
            className={
              NavigationActive(nav.url, pathName)
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

      <div className="flex items-center gap-5">
        <CenterIcon
          backgroundColor="bg-[var(--glass-color-2)]"
          icon={<ImSearch className="text-[var(--white-color)] text-2xl" />}
        />
        <BorderAnimationButton title="sing in" />
      </div>
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
