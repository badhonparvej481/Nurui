import NewsLetterSection from "@/components/common/NewsLetterSection";
import AboutUsHeroSection from "@/components/main/about-us/AboutUsHeroSection";
import ImageTabsSection from "@/components/main/about-us/ImageTabsSection";
import StackingCardsSection from "@/components/main/about-us/StackingCardsSection";
import StatesCountupSection from "@/components/main/about-us/StatesCountupSection";

const page = () => {
  return (
    <div className="section-gap">
      <AboutUsHeroSection />
      <ImageTabsSection />
      <StatesCountupSection />
      <StackingCardsSection />
      <NewsLetterSection />
    </div>
  );
};

export default page;
