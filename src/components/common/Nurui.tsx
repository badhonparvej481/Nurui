import LinkWithProgress from "./LinkWithProgress";
import NuruiLogo from "./NuruiLogo";
type ClassType = { textSize?: string };

const Nurui = ({ textSize }: ClassType) => {
  return (
    <LinkWithProgress
      href="/"
      className={`text-[var(--primary-color)] font-black ${
        textSize || "text-3xl"
      } flex items-center gap-1`}
    >
      <NuruiLogo />
      <span>Nur/ui</span>
      {/* <span>Nur.ui</span> */}
    </LinkWithProgress>
  );
};

export default Nurui;
