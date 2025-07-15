// import NewsLetterSection from "@/components/common/NewsLetterSection";
import AllComponentSection from "@/components/pages/Home/AllComponentSection";
import ComponentDemosSection from "@/components/pages/Home/ComponentDemosSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import FeaturesSection from "@/components/pages/Home/FeaturesSection";
import HeroSection from "@/components/pages/Home/HeroSection";
import TestimonialSection from "@/components/pages/Home/TestimonialSection";

const Home = () => {
  return (
    <main className="section-gap">
      <HeroSection />
      {/* <HeroVideoDialogSection /> */}
      <FeaturesSection />
      <AllComponentSection />
      <ComponentDemosSection />
      <TestimonialSection />
      <FaqSection />
      {/* <NewsLetterSection /> */}
    </main>
  );
};

export default Home;
