import Marquee from "react-fast-marquee";

const AboutUsHeroSection = () => {
  return (
    <section className="bg-[var(--glass-color)] py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="uppercase text-5xl font-semibold">
            <span className="text-[var(--primary-color)]">About</span> us
          </h2>
          <p className="max-w-2xl text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
            maxime quibusdam accusamus magnam laudantium deleniti, quidem eaque
            numquam voluptatibus illum recusandae aperiam fugiat blanditiis eos
            quo temporibus corrupti magni.
          </p>
        </div>
        <div className="pt-20 space-y-8">
          <p className="uppercase text-lg">
            Trusted by 30000 Leading gym team:
          </p>
          <Marquee>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
          <Marquee direction="right">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
