import GravityAnimation from "@/components/main/Home/AllSocialMediaSection";
import DashboardAnimationSection from "@/components/main/Home/DashboardAnimationSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import PricingSection from "@/components/main/Home/PricingSection";
import Testimonial from "@/components/main/Home/Testimonial";
import { WorldMapAnimation } from "@/components/main/Home/WorldMapAnimation";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <DashboardAnimationSection />
      <div className="space-y-24 pb-20">
        <FeaturesSection />
        <PricingSection />
        <GravityAnimation />
        <WorldMapAnimation />
        <Testimonial />
      </div>
    </React.Fragment>
  );
};

export default Home;
