import { TfiHelpAlt } from "react-icons/tfi";
import { TbCards, TbHandClick } from "react-icons/tb";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";

const baseUrl = "/docs";

export const navigation = [
  {
    icon: <AiOutlineFileSearch />,
    title: "Introduction",
    href: `${baseUrl}/introduction`,
  },
  {
    icon: <GrInstallOption />,
    title: "Installation",
    href: `${baseUrl}/installation`,
  },
  // {
  //   icon: <TbComponents />,
  //   title: "Components",
  //   href: `${baseUrl}/components`,
  // },
  {
    icon: <TbHandClick />,
    title: "Buttons",
    submenu: [
      { name: "Magnet", href: `${baseUrl}/magnet-button` },
      { name: "Gradient", href: `${baseUrl}/gradient-button` },
      { name: "Border Animation", href: `${baseUrl}/border-animation-button` },
      { name: "Hover Shadow", href: `${baseUrl}/hover-shadow-button` },
      { name: "Text Fall", href: `${baseUrl}/text-fall-button` },
    ],
  },
  {
    icon: <TbCards />,
    title: "Cards",
    submenu: [
      { name: "Playing", href: `${baseUrl}/playing-card` },
      { name: "Info", href: `${baseUrl}/info-card` },
    ],
  },
  {
    icon: <FaWpforms />,
    title: "Forms",
    submenu: [
      { name: "contact", href: `${baseUrl}/contact-form` },
      // { name: "login", href: `${baseUrl}/playing-card` },
    ],
  },
  // last item
  {
    icon: <TfiHelpAlt />,
    title: "Help",
    href: `/contact-us`,
  },
];
