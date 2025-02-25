import { ContainerScrollAnimation } from "@/components/common/container-scroll-animation/ContainerScrollAnimation";
// import FeaturesAnimation from "@/components/common/features-animation/FeaturesAnimation";
import SectionIntro from "@/components/common/SectionIntro";
import Image from "next/image";
import React from "react";
// import { RiDashboardHorizontalLine } from "react-icons/ri";
// import { SiGnuprivacyguard } from "react-icons/si";
// import { TbNetwork } from "react-icons/tb";

const DashboardAnimation = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "Connect Instantly",
  //     content: "Link all your social apps in seconds with ByteNexia.",
  //     icon: <TbNetwork className="text-6xl" />,
  //   },
  //   {
  //     id: 2,
  //     title: "Unified & Private",
  //     content:
  //       "Manage all accounts from one platform without compromising privacy.",
  //     icon: <SiGnuprivacyguard className="text-5xl" />,
  //   },
  //   {
  //     id: 3,
  //     title: "All-in-One Dashboard",
  //     content: "Post, engage, and track performance from a single platform.",
  //     icon: <RiDashboardHorizontalLine className="text-6xl" />,
  //   },
  // ];

  return (
    <section>
      <ContainerScrollAnimation
        titleComponent={
          <SectionIntro
            title={{
              normalWords: " Manage everything, ",
              highLiteWords: "all in one place",
              highlightColor: "text-[var(--secondary-color)]",
            }}
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, fugiat. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Deleniti, voluptas. Lorem ipsum dolor sit amet."
            sectionName="Why Bytenexia"
            sectionGap="pb-8"
            sectionNameColor="text-[var(--secondary-color)]"
          />
        }
      >
        <Image
          src={"/images/linear.webp"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScrollAnimation>
      {/* <FeaturesAnimation data={data} /> */}
    </section>
  );
};

export default DashboardAnimation;
