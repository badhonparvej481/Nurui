import NewsLetterSection from "@/components/common/NewsLetterSection";
import DashboardBannerSection from "@/components/main/features/DashboardBannerSection";
import StickyScrollSection from "@/components/main/features/StickyScrollSection";
import FeaturesSection from "@/components/main/Home/FeaturesSection";

const page = () => {
  return (
    <main className="section-gap">
      <DashboardBannerSection />
      <StickyScrollSection />
      <FeaturesSection />
      <NewsLetterSection />
    </main>
  );
};

export default page;
