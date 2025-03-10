import LinearIcon from "@/components/logo/LinearIcon";
import MailChimpIcon from "@/components/logo/MailChimpIcon";
import MetaIcon from "@/components/logo/MetaIcon";
import NotionIcon from "@/components/logo/NotionIcon";
import SpotifyIcon from "@/components/logo/SpotifyIcon";
import UberIcon from "@/components/logo/UberIcon";
import Marquee from "react-fast-marquee";

const AboutUsHeroSection = () => {
  return (
    <section className="bg-white/5 backdrop-blur-lg py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="uppercase text-5xl font-bold max-w-sm leading-tight">
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
        <div className="pt-20">
          <p className="uppercase text-lg pb-6">
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
