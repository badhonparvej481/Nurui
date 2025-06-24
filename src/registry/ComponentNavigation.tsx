import { TfiHelpAlt } from "react-icons/tfi";
import { TbComponents, TbHandClick } from "react-icons/tb";
import { GrInstallOption } from "react-icons/gr";
import { AiOutlineFileSearch } from "react-icons/ai";

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
  {
    icon: <TbComponents />,
    title: "Components",
    href: `${baseUrl}/components`,
  },
  {
    icon: <TbHandClick />,
    title: "Buttons",
    submenu: [{ name: "Gradient", href: `${baseUrl}/gradient-button` }],
  },
  // last item
  {
    icon: <TfiHelpAlt />,
    title: "Help",
    href: `${baseUrl}/help`,
  },
];
