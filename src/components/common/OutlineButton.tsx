import Link from "next/link";
import React from "react";

interface OutlineButtonProps {
  title: string;
  navigation: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title, navigation }) => {
  return (
    <Link
      href={navigation}
      className="rounded-lg py-2 px-4 bg-[var(--white-color)] cursor-pointer text-[var(--black-color)] font-semibold "
    >
      {title}
    </Link>
  );
};

export default OutlineButton;
