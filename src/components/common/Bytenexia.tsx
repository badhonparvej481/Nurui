import Link from "next/link";
import React from "react";

const Bytenexia = ({ fontSize = "text-3xl" }) => {
  return (
    <Link
      href="/"
      className={`text-[var(--primary-color)] font-[family-name:var(--font-creepster)] ${fontSize}`}
    >
      Bytenexia
    </Link>
  );
};

export default Bytenexia;
