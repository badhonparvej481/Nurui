import ShadowAnimationButton from "../common/ShadowAnimationButton";
import {
  MdMessage,
  MdOutlineHistoryToggleOff,
  MdOutlineMessage,
} from "react-icons/md";
import LabelWithIcon from "../common/LabelWithIcon";
import { FiPhoneCall } from "react-icons/fi";
import RatingIcon from "../icons/RatingIcon";
import ImageComponent from "../common/Image";
import BackgroundGridBeam from "../common/background-grid-beam/BackgroundGridBeam";
import AnimatedGradientText from "../common/animated-gradient-button/AnimatedGradientText";
import MessengerIcon from "../icons/MessangerIcon";
import { WhatsappIcon } from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";
import DiscordIcon from "../icons/DiscordIcon";
import FacebookIcon from "../icons/FacebookIcon";
import SnapChatIcon from "../icons/SnapChatIcon";
import ViberIcon from "../icons/ViberIcon";
import SlackIcon from "../icons/SlackIcon";
import SkypeIcon from "../icons/SkypeIcon";
import TelegramIcon from "../icons/TelegramIcon";
import LineIcon from "../icons/LineIcon";
import EmailIcon from "../icons/EmailIcon";
import YahooIcon from "../icons/YahooIcon";
import OutlookIcon from "../icons/OutlookIcon";

const HeroSection = () => {
  const AvatarList = ({ count = 5 }) => (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {Array.from({ length: count }).map((_, i) => (
        <ImageComponent
          key={i}
          className="w-12 h-12 rounded-full"
          src={
            "https://i.ibb.co/fqm4vHw/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
          }
          alt="User avatar"
        />
      ))}
    </div>
  );
  const RatingStars = ({ count = 5 }) => (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <RatingIcon key={i} rate={i < 4} />
      ))}
    </div>
  );

  return (
    <BackgroundGridBeam>
      <section className="flex justify-evenly min-h-[calc(100vh-6rem)] p-20">
        {/* left side icons */}
        <div className="hidden xl:flex gap-x-4 h-96 w-60 icon-animation">
          <div className="flex flex-col justify-around relative right-4">
            <TelegramIcon className="relative left-6 icon-animation5" />
            <LineIcon className="icon-animation6" />
            <EmailIcon className="relative left-6 icon-animation7" />
          </div>
          <div className="flex flex-col justify-center gap-12 relative left-3">
            <WhatsappIcon className="icon-animation3" />
            <InstagramIcon className="icon-animation4" />
          </div>
          <div className="flex flex-col justify-between">
            <MessengerIcon className="icon-animation1" />
            <DiscordIcon className="icon-animation2" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-7 text-center text-[var(--white-color)]">
          <AnimatedGradientText
            title={"Introducing Magic UI"}
            textGradient="bg-gradient-to-r from-[var(--secondary-color)] via-[var(--primary-color)] to-[var(--secondary-color)]"
            borderGradient="bg-gradient-to-r from-[#80EEB4]/60 via-[#3CA2FA]/60 to-[#80EEB4]/60"
          />
          {/* title */}
          <h1 className="text-7xl max-w-[62rem] font-bold uppercase leading-[1.1]">
            All of Your social apps in One{" "}
            <span className="text-[var(--primary-color)]">Place!</span>
          </h1>
          {/* description */}
          <p className="text-xl max-w-2xl text-[var(--opacity-text-color)]">
            Built on the CSS grid foundation, the Advanced Columns plugin is the
            most powerful and flexible layout builder block for WordPress.
          </p>

          {/* features */}
          <div className="bg-[var(--glass-color)] px-6 py-3 rounded-2xl flex items-center gap-7">
            {[
              { icon: <MdOutlineMessage />, label: "All message" },
              { icon: <FiPhoneCall />, label: "All call" },
              { icon: <MdMessage />, label: "All status" },
              { icon: <MdOutlineHistoryToggleOff />, label: "All post" },
            ].map(({ icon, label }, i) => (
              <LabelWithIcon key={i} icon={icon} label={label} />
            ))}
          </div>

          {/* action & offer & avatar & rating */}
          <div className="flex flex-col items-center gap-3">
            <ShadowAnimationButton />

            <p className="flex items-center gap-1 font-bold text-[var(--primary-color)]">
              Hurry!! $39 OFF{" "}
              <span className="text-[var(--white-color)]">for 10 users</span>
            </p>

            <div className="flex items-center gap-2 pt-6">
              <AvatarList />
              <div className="flex flex-col gap-1">
                <RatingStars />
                <p className="ml-3 text-[var(--opacity-text-color)] font-semibold">
                  Join <span className="text-[var(--white-color)]">2,183</span>{" "}
                  Users worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side icons */}
        <div className="hidden xl:flex gap-x-4 h-96 w-60 icon-animation mr-10">
          <div className="flex flex-col justify-between">
            <FacebookIcon className="icon-animation1" />
            <YahooIcon className="icon-animation2" />
          </div>
          <div className="flex flex-col justify-center gap-12 relative right-3">
            <SnapChatIcon className="icon-animation3" />
            <ViberIcon className="icon-animation4" />
          </div>
          <div className="flex flex-col justify-around relative right-2">
            <SlackIcon className="icon-animation5" />
            <OutlookIcon className="icon-animation6 relative left-7" />
            <SkypeIcon className="icon-animation7" />
          </div>
        </div>
      </section>
    </BackgroundGridBeam>
  );
};

export default HeroSection;
