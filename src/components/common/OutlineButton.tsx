import React from "react";

interface OutlineButtonProps {
  title: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title }) => {
  return (
    <button className="rounded-lg py-2 px-4 bg-[var(--white-color)] cursor-pointer text-[var(--black-color)] font-semibold ">
      {title}
    </button>
  );
};

export default OutlineButton;
