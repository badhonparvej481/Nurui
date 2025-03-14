import LinearIcon from "@/components/logos/LinearIcon";
import MailChimpIcon from "@/components/logos/MailChimpIcon";
import MetaIcon from "@/components/logos/MetaIcon";
import NotionIcon from "@/components/logos/NotionIcon";
import SpotifyIcon from "@/components/logos/SpotifyIcon";
import UberIcon from "@/components/logos/UberIcon";
import Marquee from "react-fast-marquee";

const AboutUsHeroSection = () => {
  return (
    <section className="bg-white/5 backdrop-blur-lg py-6 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-3 md:gap-y-0 text-center md:text-left">
          <h2 className="uppercase text-3xl md:text-5xl font-bold max-w-sm leading-tight">
            So how did{" "}
            <span className="text-[var(--primary-color)]">About</span> come to
            be?
          </h2>
          <p className="max-w-2xl text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
            maxime quibusdam accusamus magnam laudantium deleniti, quidem eaque
            numquam voluptatibus illum recusandae aperiam fugiat blanditiis eos
            quo temporibus corrupti magni.
          </p>
        </div>
        <div className="pt-8 md:pt-20">
          <p className="uppercase text-lg pb-6 text-center md:text-left">
            Trusted by 30000 Leading gym team:
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
