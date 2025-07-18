"use client";
import { navigationActive } from "@/utils/navigationActive";
import { usePathname } from "next/navigation";
import Nurui from "@/components/common/Nurui";
import RoundedButton from "@/components/common/RoundedButton";
import { FaDiscord, FaGithub } from "react-icons/fa";
import VaulDrawer from "@/components/ui/drawer/VaulDrawer";
import LinkWithProgress from "@/components/common/LinkWithProgress";
import GithubStar from "@/components/nurui/github-button";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const pathName = usePathname();
  if (pathName.includes("docs")) return null;

  return (
    <div className="sticky top-0 z-50 bg-[var(--background-color)] lg:bg-transparent lg:backdrop-blur-lg lg:overflow-hidden w-full border-dashed border-b border-white/20 ">
      <nav className="container flex flex-wrap items-center justify-between h-16 lg:h-20">
        <div className="flex flex-wrap items-center gap-8">
          <Nurui textSize="text-2xl lg:text-3xl" />

          <div className="hidden xl:flex items-center py-2 px-3 rounded-full font-semibold">
            {navigation.map((nav) => (
              <LinkWithProgress
                className={
                  navigationActive(nav.url, pathName)
                    ? `navigation-active text-[#FCFCFC] bg-[var(--primary-color)] dark:bg-white/10 hover:dark:bg-[var(--glass-color-4)]`
                    : `navigation-unactive`
                }
                key={nav.id}
                href={nav.url}
              >
                {nav.name}
              </LinkWithProgress>
            ))}
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-5">
          <GithubStar />
          <RoundedButton
            href="https://discord.gg/XzAh8V3S"
            icon={
              <FaDiscord className="text-2xl text-[var(--primary-color)]" />
            }
          />
          <RoundedButton
            href="https://github.com/afsar-dev/Nurui"
            icon={<FaGithub className="text-2xl text-[var(--primary-color)]" />}
          />

          <RoundedButton
            href="https://x.com/md_afsar_mahmud"
            icon={
              <FaXTwitter className="text-2xl text-[var(--primary-color)]" />
            }
          />

          {/* <ThemeSwitcher /> */}
        </div>
        <VaulDrawer />
      </nav>
    </div>
  );
};

export default Navbar;

const navigation = [
  {
    id: 1,
    name: "docs",
    url: "/docs/installation",
  },
  {
    id: 2,
    name: "component",
    url: "/docs/wave-card",
  },
  {
    id: 3,
    name: "About",
    url: "/about-us",
  },
  {
    id: 4,
    name: "playground",
    url: "/playground",
  },
];
