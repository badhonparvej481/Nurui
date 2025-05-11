import NewsLetterSection from "@/components/common/NewsLetterSection";
import AboutUsHeroSection from "@/components/main/about-us/AboutUsHeroSection";
import ImageTabsSection from "@/components/main/about-us/ImageTabsSection";
import StackingCardsSection from "@/components/main/about-us/StackingCardsSection";
import StatesCountupSection from "@/components/main/about-us/StatesCountupSection";
import { WorldMapAnimationSection } from "@/components/main/about-us/WorldMapAnimationSection";

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
