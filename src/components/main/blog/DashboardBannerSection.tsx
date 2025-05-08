import CollMode from "@/components/common/ui/cool-mode/CollMode";
import ImageComponent from "@/components/common/Image";
import React from "react";

const DashboardBannerSection = () => {
  return (
    <section className="bg-[var(--glass-color)] lg:border border-[var(--border-color)] px-5 xl:px-0 pt-7 xl:pt-14 lg:mx-10 xl:mx-20 lg:mt-6 xl:mt-10 lg:rounded-2xl">
      <div className="max-w-4xl mx-auto text-center xl:mb-16 pb-7 xl:pb-0">
        <h3 className="text-[var(--primary-color)] text-xl font-medium">
          Dashboards
        </h3>

        <h1
          className="text-3xl xl:text-5xl font-semibold mb-6"
          style={{ lineHeight: 1.2 }}
        >
          Track your team work progress with{" "}
          <span className="text-[var(--primary-color)]">dashboards</span>
        </h1>

        <p className="xl:text-xl text-white/70 max-w-2xl mx-auto mb-6">
          Make smarter project decisions using data-driven insights. Let facts
          and trends guide your actions for better outcomes. Ready to take
          control?
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <span>10+ widgets & apps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <span>Real time Communication</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <span>High-Level overview</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <span>Advance Reporting</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white"></div>
            <span>No code customization</span>
          </div>
        </div>

        <CollMode
          options={{
            particle: [
              "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288776/instagram_wtta6a.png",
              "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288886/facebook_qaxwo5.png",
              "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740288990/whatsapp_epyaq3.png",
              "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740289075/snapchat_pseu9j.png",
              "https://res.cloudinary.com/dz1fy2tof/image/upload/v1740289165/discord_wixqob.png",
            ],
          }}
        >
          <button className="px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-xl  flex items-center mx-auto text-black font-semibold">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </CollMode>
      </div>

      <div className="max-w-7xl mx-auto hidden 2xl:block">
        <ImageComponent
          src="/images/Dashboard-Image-Final.webp"
          className="w-full h-[600px]"
        />
      </div>
    </section>
  );
};

export default DashboardBannerSection;
