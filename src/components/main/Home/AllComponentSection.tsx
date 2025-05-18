import Gravity, { MatterBody } from "@/components/common/Gravity";
import SectionIntro from "@/components/common/SectionIntro";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import BulmaIcon from "@/components/icons/BulmaIcon";
import BootstrapIcon from "@/components/icons/BootstrapIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import SassIcon from "@/components/icons/SassIcon";
import HtmlIcon from "@/components/icons/HtmlIcon";
import NustIcon from "@/components/icons/NustIcon";
import SvelteIcon from "@/components/icons/SvelteIcon";
import VueIcon from "@/components/icons/VueIcon";
import NextJsIcon from "@/components/icons/NextJsIcon";
import AngularIcon from "@/components/icons/AngularIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import { CssIcon } from "@/components/icons/CssIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import FramerIcon from "@/components/icons/FramerIcon";

export default function AllComponentSection() {
  const icons = [
    {
      icon: (
        <AngularIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <SassIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <CssIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <TailwindIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <HtmlIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <JavaScriptIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <BootstrapIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <ReactIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <NextJsIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <TypescriptIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <VueIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <NustIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <BulmaIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <FramerIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
    {
      icon: (
        <SvelteIcon
          isAnimation={false}
          className="rounded-full size-12 md:size-16 lg:size-auto"
          reSize={true}
        />
      ),
    },
  ];

  return (
    <section className="max-w-5xl mx-[1.1rem] md:mx-[1.3rem] lg:mx-[1.5rem] xl:mx-auto h-[50vh] flex flex-col justify-between rounded-2xl border border-[var(--secondary-color)] bg-[var(--secondary-color-4)] pt-6 relative ">
      <div>
        <SectionIntro
          title={{
            highLiteWords: "One Place",
            normalWords: "Your Favorite Tools,",
            firstHighLightColor: "text-[var(--secondary-color)]",
          }}
          description="From TypeScript to Tailwind, discover a powerful collection of tools designed to supercharge your development workflow."
          sectionGap="pb-3 md:pb-7"
        />
        {/* <ShinyInput
          className="max-w-72 md:max-w-96 mx-auto"
          icon={
            <IoIosSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-2xl text-[var(--placeholder-color)]" />
          }
          placeholder="Search by social media platform"
          name="social-media"
          type="text"
          borderHoverAnimation="1px solid var(--secondary-color)"
          focus="focus:border-[var(--secondary-color)]"
        /> */}
      </div>
      <Gravity gravity={{ x: 0, y: 1 }}>
        {icons.map((IconData, index) => {
          const Icon = IconData.icon;
          const randomX = Math.random() * 60 + 20;
          const randomY = Math.random() * 20 + 5;

          return (
            <MatterBody
              key={index}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${randomX}%`}
              y={`${randomY}%`}
            >
              <div>{Icon}</div>
            </MatterBody>
          );
        })}
      </Gravity>
    </section>
  );
}
