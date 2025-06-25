import LinearIcon from "@/components/icons/LinearIcon";
import MailChimpIcon from "@/components/icons/MailChimpIcon";
import MetaIcon from "@/components/icons/MetaIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import UberIcon from "@/components/icons/UberIcon";
import Marquee from "react-fast-marquee";

const AboutUsHeroSection = () => {
  return (
    <section className="bg-white/5 backdrop-blur-xl py-6 md:py-10 xl:py-20">
      <div className="container">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-y-3 xl:gap-y-0 text-center xl:text-left">
          <h2 className="uppercase text-3xl xl:text-5xl font-bold max-w-sm leading-tight">
            So how did{" "}
            <span className="text-[var(--primary-color)]">nurui</span> come to
            be?
          </h2>
          <p className="max-w-2xl text-xl">
            Nurui was born from the vision of simplifying UI development for
            modern web applications. Our goal is to empower developers with
            high-quality, reusable components that speed up workflow, reduce
            repetitive tasks, and ensure consistency across projects.
          </p>
        </div>
        <div className="pt-8 xl:pt-20">
          <p className="uppercase text-xl pb-6 text-center xl:text-left">
            Trusted by Many Developer & Company:
          </p>
          <Marquee>
            <div className="flex items-center gap-x-20">
              <UberIcon className="ml-20" />
              <SpotifyIcon />
              <MetaIcon />
              <NotionIcon />
              <MailChimpIcon />
              <LinearIcon />
              <UberIcon />
              <SpotifyIcon />
              <MetaIcon />
              <NotionIcon />
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="flex items-center gap-x-20">
              <UberIcon className="ml-20" />
              <SpotifyIcon />
              <MetaIcon />
              <NotionIcon />
              <MailChimpIcon />
              <LinearIcon />
              <UberIcon />
              <SpotifyIcon />
              <MetaIcon />
              <NotionIcon />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
