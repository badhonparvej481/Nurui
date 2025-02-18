import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import Bytenexia from "../common/Bytenexia";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaApple, FaXTwitter } from "react-icons/fa6";
import NewsLetter from "../common/NewsLetter";
import MobileApplicationDownloadCard from "../common/MobileApplicationDownloadCard";
import Link from "next/link";
import PlayStore from "../icons/PlayStore";

const Footer = () => {
  return (
    <div className="border-t w-full text-[var(--white-color)] mt-auto rounded-tl-[110px]">
      <div className="container">
        <NewsLetter />
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 xl:flex flex-col md:flex-row 2xl:justify-between gap-10 xl:gap-24 py-7 xl:py-16 pl-5 xl:pl-0">
          <div className="space-y-6 max-w-80 col-span-full">
            <Bytenexia fontSize="text-3xl" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur culpa dolore iure nemo beatae in?
            </p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-2xl text-[#1877F2]" />
              <BsInstagram className="text-2xl text-[#FE0173]" />
              <BsYoutube className="text-2xl text-[#FF0033]" />
              <FaXTwitter className="text-2xl text-white" />
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

        <div className="border-t border-[var(--white1)] border-opacity-20 p-5 flex items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            {navigation.map((data, i) => (
              <Link
                key={data?.id + i}
                href={data?.url}
                className={`${
                  navigation?.length === i + 1 ? "" : "border-r"
                } pr-4`}
              >
                {data?.name}
              </Link>
            ))}
          </div>
          <p className="text-base text-[var(--black2)]">
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
