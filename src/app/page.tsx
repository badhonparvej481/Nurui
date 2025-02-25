import DashboardAnimationSection from "@/components/main/Home/DashboardAnimationSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <div className="space-y--20 pb-20">
        <DashboardAnimationSection />
        <FeaturesSection />
      </div>
    </React.Fragment>
  );
};

export default Home;
