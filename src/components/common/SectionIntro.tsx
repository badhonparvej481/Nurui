import React from "react";

interface IProps {
  sectionName?: string;
  title: {
    highLiteWords: string;
    normalWords: string;
    highlightColor?: string;
    firstHighLightColor?: string;
  };
  description?: string;
  sectionGap?: string;
  highlightColor?: string;
  sectionNameColor?: string;
}

const SectionIntro: React.FC<IProps> = ({
  sectionName,
  title,
  description,
  sectionNameColor,
  sectionGap = "pb-14",
}) => {
  return (
    <div className={`max-w-5xl mx-auto text-center px-4 ${sectionGap}`}>
      <p className={`${sectionNameColor} uppercase font-semibold text-[16px]`}>
        {sectionName}
      </p>
      <h3 className="text-2xl md:text-5xl font-bold text-[var(--text-primary-color)] pt-2 pb-4 text-balance space-x-2.5">
        <span className={title.firstHighLightColor}>{title.normalWords}</span>
        <span className={title?.highlightColor}>{title?.highLiteWords}</span>
      </h3>
      <p className="text-lg text-[var(--opacity-text-color)] max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
