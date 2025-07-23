"use client";
import React from "react";
import { Banner as UIBanner } from "@/components/nurui/banner";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Banner = () => {
  const pathName = usePathname();
  if (pathName.includes("docs")) return null;
  return (
    <UIBanner
      id="ui-banner"
      className="shadow-lg shadow-[#3ca2fa]/5 relative"
      variant="rainbow"
      rainbowColors={[
        "rgba(60, 162, 250, 0.5)",
        "rgba(60, 162, 250, 0.5)",
        "transparent",
        "rgba(60, 162, 250, 0.5)",
        "transparent",
        "rgba(60, 162, 250, 0.5)",
        "transparent",
      ]}
    >
      <Link
        href="/docs/gradient-hero"
        className="text-white font-semibold hidden md:block"
      >
        🚀 Added 20+ modern animated UI components to enhance your projects.
      </Link>{" "}
      <Link
        href="/docs/gradient-hero"
        className="text-white font-semibold block md:hidden"
      >
        🚀 20+ modern animated components.
      </Link>
    </UIBanner>
  );
};

export default Banner;