import { LuBotMessageSquare } from "react-icons/lu";
import LinkWithProgress from "./LinkWithProgress";
type ClassType = { textSize?: string };

const Bytenexia = ({ textSize }: ClassType) => {
  return (
    <LinkWithProgress
      href="/"
      className={`text-[var(--primary-color)] font-creepster ${
        textSize || "text-3xl"
      } flex items-center`}
    >
      <LuBotMessageSquare className="text-2xl rotate-180" /> NurUI
    </LinkWithProgress>
  );
};

export default Bytenexia;
