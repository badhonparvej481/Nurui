import LinkWithProgress from "./LinkWithProgress";
import NuruiLogo from "./NuruiLogo";
type ClassType = { textSize?: string };

const Nurui = ({ textSize }: ClassType) => {
  return (
    <LinkWithProgress
      href="/"
      className={`text-[var(--primary-color)] uppercase font-bold font-creepste ${
        textSize || "text-3xl"
      } flex items-center`}
    >
      <NuruiLogo />NurUI
    </LinkWithProgress>
  );
};

export default Nurui;
