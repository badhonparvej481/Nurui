import ShadowAnimationButton from "../common/ShadowAnimationButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 min-h-[calc(100vh-6rem)] py-20 text-center text-[var(--white-color)]">
      <h5 className="uppercase font-semibold border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-0.5 rounded-full">
        All-in-One Messaging
      </h5>
      <h1 className="text-7xl font-bold max-w-4xl uppercase">
        The most <span className="text-[]">accurate</span> and reliable API for
        blockchain data
      </h1>
      <p className="text-2xl max-w-xl">
        Built on the CSS grid foundation, the Advanced Columns plugin is the
        most powerful and flexible layout builder block for WordPress.
      </p>
      <div>
        <ShadowAnimationButton />
      </div>
    </div>
  );
};

export default HeroSection;
