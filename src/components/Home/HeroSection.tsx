import GradientBorderAnimatedButton from "../common/GradientBorderAnimatedButton";
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
      <section className="flex flex-col items-center gap-y-8 min-h-[calc(100vh-6rem)] py-20 text-center text-[var(--white-color)]">
        <GradientBorderAnimatedButton />
        {/* title */}
        <h1 className="text-7xl font-bold max-w-[62rem] uppercase leading-[1.1]">
          All of your messages In one{" "}
          <span className="text-[var(--primary-color)]">inbox</span>
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
      </section>
    </BackgroundGridBeam>
  );
};

export default HeroSection;
