import Link from "next/link";
import nProgress from "nprogress";
import React from "react";

const Bytenexia = ({ fontSize = "text-3xl" }) => {
  return (
    <Link
      href="/"
      className={`text-[var(--primary-color)] font-creepster ${fontSize}`}
      onClick={() => nProgress.start()}
    >
      Bytenexia
    </Link>
  );
};

export default Bytenexia;
