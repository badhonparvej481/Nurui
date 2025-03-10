import NewsLetterSection from "@/components/common/NewsLetterSection";
import AllSocialMediaSection from "@/components/main/Home/AllSocialMediaSection";
import FaqSection from "@/components/main/Home/FaqSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import HeroVideoDialogSection from "@/components/main/Home/HeroVideoDialogSection";
import PricingSection from "@/components/main/Home/PricingSection";
import TestimonialSection from "@/components/main/Home/TestimonialSection";
import { WorldMapAnimationSection } from "@/components/main/Home/WorldMapAnimationSection";

const Home = () => {
  return (
    <div className="section-gap">
      <HeroSection />
      <HeroVideoDialogSection />
      <FeaturesSection />
      <PricingSection />
      <AllSocialMediaSection />
      <WorldMapAnimationSection />
      <TestimonialSection />
      <FaqSection />
      <NewsLetterSection />
    </div>
  );
};

export default Home;
