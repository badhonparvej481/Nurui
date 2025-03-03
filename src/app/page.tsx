import AllSocialMediaSection from "@/components/main/Home/AllSocialMediaSection";
import DashboardAnimationSection from "@/components/main/Home/DashboardAnimationSection";
import FaqSection from "@/components/main/Home/FaqSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import PricingSection from "@/components/main/Home/PricingSection";
import TestimonialSection from "@/components/main/Home/TestimonialSection";
import { WorldMapAnimationSection } from "@/components/main/Home/WorldMapAnimationSection";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <DashboardAnimationSection />
      <div className="space-y-24 pb-20">
        <FeaturesSection />
        <PricingSection />
        <AllSocialMediaSection />
        <WorldMapAnimationSection />
        <TestimonialSection />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
