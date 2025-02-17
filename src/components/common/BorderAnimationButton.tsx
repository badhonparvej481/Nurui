import { FC } from "react";
interface IPros {
  borderColor?: string;
  titleColor?: string;
  title: string;
}
const BorderAnimationButton: FC<IPros> = ({
  borderColor = "#3CA2FA",
  titleColor = "var(--primary-color)",
  title,
}) => {
  return (
    <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none">
      <span
        className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,${borderColor}66_0%,${borderColor}_50%,${borderColor}66_100%)]`}
      ></span>
      <span
        className={`inline-flex capitalize h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[var(--background-color)] px-6 font-medium text-[${titleColor}] backdrop-blur-3xl undefined`}
      >
        {title}
      </span>
    </button>
  );
};

export default BorderAnimationButton;
