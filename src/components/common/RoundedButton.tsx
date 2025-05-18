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
          className="bg-[var(--primary-color)] dark:bg-[var(--primary-color-3)] hover:bg-[#3CA2FACC] hover:dark:bg-[var(--primary-color-2)] size-11 p-2 rounded-full flex items-center justify-center"
        >
          {icon}
        </a>
      ) : (
        <div className="bg-[var(--primary-color)] dark:bg-[var(--primary-color-3)] hover:bg-[#3CA2FACC] hover:dark:bg-[var(--primary-color-2)] size-11 p-2 rounded-full flex items-center justify-center">
          {icon}
        </div>
      )}
    </>
  );
};

export default RoundedButton;
