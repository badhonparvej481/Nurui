"use client";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import Nurui from "@/components/common/Nurui";
import RocketScrollToTop from "@/components/common/RocketScrollToTop";
import LinkWithProgress from "@/components/common/LinkWithProgress";

const Footer = () => {
  const pathName = usePathname();

  if (
    pathName.includes("sing-in") ||
    pathName.includes("sing-up") ||
    pathName.includes("docs")
  )
    return null;

  return (
    <div className="bg-[var(--white-color)] dark:bg-[var(--background-color)] border-t border-[var(--border-color)] w-full text-[var(--text-primary-color)] mt-auto rounded-tl-[50px] lg:rounded-tl-[80px] xl:rounded-tl-[110px] rocket-animation">
      <RocketScrollToTop className=" bg-[var(--background-color)] max-w-24 mx-auto  rounded-full -mt-16 hidden md:block" />
      <div className="container">
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 xl:flex flex-col md:flex-row 2xl:justify-between gap-10 xl:gap-14 2xl:gap-24 py-7 xl:py-16 pl-1 xl:pl-0">
          <div className="space-y-3 lg:space-y-4 xl:space-y-6 max-w-80 col-span-full">
            <Nurui textSize="text-2xl lg:text-3xl" />
            <p>
              Beautifully crafted, accessible components built with Tailwind CSS
              — perfect for modern developers and creative teams.
            </p>
            <div className="flex items-center gap-5 *:cursor-pointer">
              <FaFacebook className="text-2xl text-[#1877F2]" />
              <BsInstagram className="text-2xl text-[#FE0173]" />
              <BsYoutube className="text-2xl text-[#FF0033]" />
              <FaXTwitter className="text-2xl text-[var(--black-color)] dark:text-[var(--white-color)]" />
              <FaLinkedin className="text-2xl text-[#0073B2]" />
            </div>
          </div>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Products</h6>
            <a className="cursor-pointer">Nurui</a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Legal</h6>
            <a className="cursor-pointer">Privacy Policy</a>
            <a className="cursor-pointer">Terms of Service</a>
            <a className="cursor-pointer">License</a>
            <a className="cursor-pointer">Cookies Settings</a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Resources</h6>
            <a className="cursor-pointer">Free Templates</a>
            <a className="cursor-pointer">Components</a>
            <a className="cursor-pointer">Blocks</a>
            <a className="cursor-pointer">Custom Hooks</a>
            <a className="cursor-pointer">Semantic TagMaster</a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Contact</h6>
            <a className="flex items-start gap-2.5 max-w-48">
              <IoLocationOutline className="flex-shrink-0" />
              Sylhet, Bangladesh
            </a>
            <a className="flex gap-2.5 items-center cursor-pointer">
              <MdOutlinePhone className="flex-shrink-0" /> +8801722877040
            </a>
            <a className="flex gap-2.5 items-center cursor-pointer">
              <MdOutlineMail className="flex-shrink-0" /> contact@Nurui.com
            </a>
          </nav>
        </div>

        <div className="border-t border-[var(--border-color)] border-opacity-20 p-5 flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-4">
            {navigation.map((data, i) => (
              <LinkWithProgress
                key={data?.id + i}
                href={data?.url}
                className={`${
                  navigation?.length === i + 1
                    ? ""
                    : "border-r border-[var(--black-color-2)]"
                } pr-4 font-semibold ${
                  navigationActive(data?.url, pathName)
                    ? "text-[var(--primary-color)] font-bold"
                    : "text-[--copy-right-color]"
                }`}
              >
                {data?.name}
              </LinkWithProgress>
            ))}
          </div>
          <p className="text-[--copy-right-color]">
            &#169;2024 Uniengage all right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const navigation = [
  {
    id: 1,
    name: "home",
    url: "/",
  },
  {
    id: 2,
    name: "components",
    url: "/docs/gradient-button",
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
    url: "/playground",
  },
];
