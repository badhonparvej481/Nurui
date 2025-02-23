import React from "react";

interface IProps {
  sectionName: string;
  title: { highLiteWords: string; normalWords: string };
  description?: string;
  sectionGap?: string;
}

const SectionIntro: React.FC<IProps> = ({
  sectionName,
  title,
  description,
  sectionGap = "pb-16",
}) => {
  return (
    <div className={`max-w-5xl mx-auto text-center px-4 ${sectionGap}`}>
      <p className="text-[var(--secondary-color)] uppercase font-semibold text-[16px]">
        {sectionName}
      </p>
      <h3 className="text-5xl font-bold text-[var(--white-color)] pt-2 pb-4">
        {title.normalWords}
        <span className="text-[var(--secondary-color)]">
          {title?.highLiteWords}
        </span>
      </h3>
      <p className="text-lg text-[var(--white-color)] max-w-4xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
