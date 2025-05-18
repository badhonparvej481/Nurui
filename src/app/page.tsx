import NewsLetterSection from "@/components/common/NewsLetterSection";
import AllComponentSection from "@/components/main/Home/AllComponentSection";
import ComponentDemosSection from "@/components/main/Home/ComponentDemosSection";
import FaqSection from "@/components/main/Home/FaqSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";
import HeroSection from "@/components/main/Home/HeroSection";
import HeroVideoDialogSection from "@/components/main/Home/HeroVideoDialogSection";
import TestimonialSection from "@/components/main/Home/TestimonialSection";

const Home = () => {
  return (
    <main className="section-gap">
      <HeroSection />
      <HeroVideoDialogSection />
      <FeaturesSection />
      <AllComponentSection />
      <ComponentDemosSection />
      <TestimonialSection />
      <FaqSection />
      <NewsLetterSection />
    </main>
  );
};

export default Home;
