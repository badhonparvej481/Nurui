import AllComponentSection from "@/components/pages/Home/AllComponentSection";
import ComponentDemosSection from "@/components/pages/Home/ComponentDemosSection";
import FaqSection from "@/components/pages/Home/FaqSection";
import HeroSection from "@/components/pages/Home/HeroSection";
import TestimonialSection from "@/components/pages/Home/TestimonialSection";

const Home = () => {
  return (
    <main className="section-gap">
      <HeroSection />
      {/* <HeroVideoDialogSection /> */}
      <AllComponentSection />
      <ComponentDemosSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
};

export default Home;
