import BorderAnimationButton from "@/components/common/BorderAnimationButton";
import CenterIcon from "@/components/common/CenterIcon";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import Bytenexia from "../common/Bytenexia";

const Navbar = () => {
  return (
    <nav className="container flex flex-wrap items-center justify-between h-24">
      <Bytenexia fontSize="text-3xl" />

      <div className="flex items-center gap-16 py-4 px-8  border border-[var(--border-color)] rounded-full">
        {navigation.map((nav) => (
          <Link
            className="text-[var(--white-color)] capitalize"
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
          icon={<FiSearch className="text-[var(--white-color)] text-2xl" />}
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
    url: "/home",
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
