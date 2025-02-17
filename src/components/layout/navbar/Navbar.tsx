import BorderAnimationButton from "@/components/common/BorderAnimationButton";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between py-6 mx-24 h-12">
      <Link
        href="/"
        className="text-[var(--primary-color)] font-[family-name:var(--font-creepster)] text-3xl "
      >
        Bytenexia
      </Link>

      <div className="flex items-center gap-16 py-4 px-8  border border-[var(--gray-color)] rounded-full">
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
        <button className="bg-[var(--lite-gray-color)] size-11 p-2 rounded-full flex items-center justify-center">
          <FiSearch className="text-[var(--white-color)] text-2xl" />
        </button>
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
