import LinkWithProgress from "./LinkWithProgress";
import NuruiLogo from "./NuruiLogo";
type ClassType = { textSize?: string };

const Nurui = ({ textSize }: ClassType) => {
  return (
    <LinkWithProgress
      href="/"
      className={`text-[var(--primary-color)] uppercase font-black ${
        textSize || "text-3xl"
      } flex items-center gap-0.5`}
    >
      <NuruiLogo />
      <span>Nurui</span>
    </LinkWithProgress>
  );
};

export default Nurui;
