import NewsLetterSection from "@/components/common/NewsLetterSection";
import AboutUsHeroSection from "@/components/pages/about-us/AboutUsHeroSection";
import ImageTabsSection from "@/components/pages/about-us/ImageTabsSection";
import StackingCardsSection from "@/components/pages/about-us/StackingCardsSection";
import StatesCountupSection from "@/components/pages/about-us/StatesCountupSection";
import { WorldMapAnimationSection } from "@/components/pages/about-us/WorldMapAnimationSection";

const page = () => {
  return (
    <main className="section-gap">
      <AboutUsHeroSection />
      <ImageTabsSection />
      <StatesCountupSection />
      <WorldMapAnimationSection />
      <StackingCardsSection />
      <NewsLetterSection />
    </main>
  );
};

export default page;
