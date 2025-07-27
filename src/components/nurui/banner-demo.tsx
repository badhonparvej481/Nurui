import React from "react";
import { Banner } from "@/components/nurui/banner";

const BannerDemo = () => {
  return (
    <div className="space-y-10 p-10 w-full">
      <Banner
        id="banner-id"
        className="shadow-lg bg-white dark:bg-transparent"
        variant="rainbow"
      >
        🚀 Added 20+ modern animated UI components to enhance your projects.
      </Banner>
      <Banner
        variant="rainbow"
        className="shadow-lg bg-white dark:bg-transparent"
        rainbowColors={[
          "rgba(231,77,255,0.77)",
          "rgba(231,77,255,0.77)",
          "transparent",
          "rgba(231,77,255,0.77)",
          "transparent",
          "rgba(231,77,255,0.77)",
          "transparent",
        ]}
      >
        🚀 Project evolving more features soon!
      </Banner>
    </div>
  );
};

export default BannerDemo;
