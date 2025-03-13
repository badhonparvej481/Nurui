import React from "react";

interface IProps {
  sectionName?: string;
  title: {
    highLiteWords: string;
    normalWords?: string;
    highlightColor?: string;
    firstHighLightColor?: string;
  };
  description?: string;
  sectionGap?: string;
  highlightColor?: string;
  sectionNameColor?: string;
  sectionNameStyle?: string;
}

const SectionIntro: React.FC<IProps> = ({
  sectionName,
  title,
  description,
  sectionNameColor,
  sectionGap = "pb-10 md:pb-12 lg:pb-14",
  sectionNameStyle,
}) => {
  return (
    <div className={`max-w-5xl mx-auto text-center px-4 ${sectionGap}`}>
      <p
        className={`${sectionNameColor} uppercase font-semibold text-[16px] ${sectionNameStyle} rounded-lg`}
      >
        {sectionName}
      </p>
      <h3
        className={`text-2xl md:text-5xl font-bold text-[var(--text-primary-color)] 
          pt-1 md:pt-2 ${
            description && "pb-2 md:pb-4"
          } text-balance space-x-2.5`}
      >
        <span className={title.firstHighLightColor}>{title.normalWords}</span>
        <span className={title?.highlightColor}>{title?.highLiteWords}</span>
      </h3>
      <p
        className={`${
          sectionName || "hidden md:block"
        } text-lg text-[var(--opacity-text-color)] max-w-3xl mx-auto text-balance xl:text-pretty`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
