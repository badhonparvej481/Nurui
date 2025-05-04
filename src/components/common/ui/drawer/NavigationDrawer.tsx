import React from "react";
import classes from "./drawer.module.scss";
import Image from "next/image";
import {
  FaCogs,
  FaEnvelope,
  FaExchangeAlt,
  FaInfoCircle,
  FaTag,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { changeAnchor } from "@/utils/changeAnchor";
import MenuItem from "../../MenuItem";

interface IProps {
  open: boolean;
  anchor: string;
  onClose: () => void;
}

export const NavigationDrawer: React.FC<IProps> = (props) => {
  const { open, anchor, onClose } = props;
  const { drawer, animate, hidden, overlay, overlayOpen, overlayHidden } =
    classes;

  return (
    <React.Fragment>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        tabIndex={-1}
        className={`${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor({
          anchor: anchor,
          classes,
        })} flex flex-col min-h-screen`}
      >
        <header
          className={`flex flex-col items-center justify-center gap-3 min-h-16 border-b border-[var(--primary-color)] p-4`}
        >
          <Image
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co.com/fqm4vHw/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
            alt="Rounded avatar"
            width={0}
            height={0}
            unoptimized
          />
          <div className="text-center">
            <h5 className="font-semibold text-lg">Md Afsar Mahmud</h5>
            <p className="text-[var(--black-color-3)]">mdafsar.dev@gmail.com</p>
          </div>
        </header>
        <main className="flex flex-col gap-y-3 py-8 overflow-y-auto">
          {navigation.slice(0, navigation.length - 2).map((nav, index) => (
            <MenuItem
              key={nav?.title + index}
              icon={nav.icon}
              title={nav.title}
              submenu={nav?.submenu}
            />
          ))}
        </main>
        <footer className="flex flex-col gap-y-3 min-h-16 border-t border-[var(--primary-color)] py-8 mt-auto">
          {navigation.slice(navigation.length - 2).map((nav, index) => (
            <MenuItem
              key={nav?.title + index}
              icon={nav.icon}
              title={nav.title}
            />
          ))}
        </footer>
      </div>
    </React.Fragment>
  );
};

const navigation = [
  {
    icon: <IoHome />,
    title: "Home",
  },
  {
    icon: <FaCogs />,
    title: "Services",
    submenu: [
      { name: "order-summary", href: "/order-summary" },
      { name: "free-trial", href: "free-trial" },
      { name: "change-password", href: "/sing-in/change-password" },
    ],
  },
  {
    icon: <FaTag />,
    title: "Prices",
  },
  {
    icon: <FaEnvelope />,
    title: "Contact",
  },
  {
    icon: <FaInfoCircle />,
    title: "About",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Change account",
  },
  {
    icon: <GrLogout className="-mr-1" />,
    title: "Logout",
  },
];
