"use client";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaApple, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import Bytenexia from "@/components/common/Bytenexia";
import MobileApplicationDownloadCard from "@/components/common/MobileApplicationDownloadCard";
import PlayStore from "@/components/icons/PlayStore";
import nProgress from "nprogress";
import RocketScrollToTop from "@/components/common/RocketScrollToTop";

const Footer = () => {
  const pathName = usePathname();

  if (
    pathName.includes("sing-in") ||
    pathName.includes("sing-up") ||
    pathName.includes("dashboard")
  )
    return null;

  return (
    <div className="bg-[var(--white-color)] dark:bg-[var(--background-color)] border-t border-[var(--border-color)] w-full text-[var(--text-primary-color)] mt-auto rounded-tl-[50px] lg:rounded-tl-[80px] xl:rounded-tl-[110px] rocket-animation">
      <RocketScrollToTop className=" bg-[var(--background-color)] max-w-24 mx-auto  rounded-full -mt-16 hidden md:block" />
      <div className="container">
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 xl:flex flex-col md:flex-row 2xl:justify-between gap-10 xl:gap-14 2xl:gap-24 py-7 xl:py-16 pl-1 xl:pl-0">
          <div className="space-y-3 lg:space-y-4 xl:space-y-6 max-w-80 col-span-full">
            <Bytenexia fontSize="text-2xl lg:text-3xl" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur culpa dolore iure nemo beatae in?
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
            <h6 className="font-semibold text-lg">Features</h6>
            <a className="cursor-pointer">Omnichannel Messaging</a>
            <a className="cursor-pointer">Conversational Marketing</a>
            <a className="cursor-pointer">Marketing Automation</a>
            <a className="cursor-pointer">Omnichannel CRM</a>
            <a className="cursor-pointer">Whatsapp Business API</a>
            <a className="cursor-pointer">Pricing</a>
            <a className="cursor-pointer">14-day free trial</a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Integration</h6>
            <a className="cursor-pointer">E-Commerce</a>
            <a className="cursor-pointer">Facebook Messenger</a>
            <a className="cursor-pointer">LINE</a>
            <a className="cursor-pointer">Whatsapp</a>
          </nav>

          <nav className="space-y-4 max-w-80 flex flex-col">
            <h6 className="font-semibold text-lg">Contact</h6>
            <a className="flex items-start gap-2.5 max-w-48">
              <IoLocationOutline className="flex-shrink-0" /> 268 Eastern Road,{" "}
              south Carolina, USA
            </a>
            <a className="flex gap-2.5 items-center cursor-pointer">
              <MdOutlinePhone className="flex-shrink-0" /> (+880) 1785236805
            </a>
            <a className="flex gap-2.5 items-center cursor-pointer">
              <MdOutlineMail className="flex-shrink-0" /> example@gmail.com
            </a>
          </nav>

          <div className="space-y-4 flex flex-col gap-2">
            <MobileApplicationDownloadCard
              icon={<PlayStore className="size-7" />}
              title="Get it on"
              storeName="Google Play"
            />
            <MobileApplicationDownloadCard
              icon={<FaApple className="text-4xl" />}
              title="get it on"
              storeName="App Store"
            />
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] border-opacity-20 p-5 flex items-center justify-center lg:justify-between">
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-4">
            {navigation.map((data, i) => (
              <Link
                key={data?.id + i}
                href={data?.url}
                onClick={() => nProgress.start()}
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
              </Link>
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
    name: "pricing",
    url: "/pricing",
  },
  {
    id: 3,
    name: "Features",
    url: "/features",
  },
  {
    id: 4,
    name: "About",
    url: "/about-us",
  },
  {
    id: 5,
    name: "contact",
    url: "/contact-us",
  },
];
