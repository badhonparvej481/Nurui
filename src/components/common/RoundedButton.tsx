import React from "react";
type TIcon = {
  icon: React.ReactNode;
  href?: string;
};

const RoundedButton: React.FC<TIcon> = ({ icon, href }) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          className="md:bg-[var(--primary-color)] md:dark:bg-[var(--primary-color-3)] hover:bg-[#3CA2FACC] hover:dark:bg-[var(--primary-color-2)] size-11 p-2 rounded-full flex items-center justify-center"
        >
          {icon}
        </a>
      ) : (
        <div className="md:bg-[var(--primary-color)] md:dark:bg-[var(--primary-color-3)] hover:bg-[#3CA2FACC] hover:dark:bg-[var(--primary-color-2)] size-11 p-1 rounded-full flex items-center justify-center cursor-pointer">
          {icon}
        </div>
      )}
    </>
  );
};

export default RoundedButton;
