import NewsLetterSection from "@/components/common/NewsLetterSection";
import DashboardBannerSection from "@/components/main/blog/DashboardBannerSection";
import StickyScrollSection from "@/components/main/blog/StickyScrollSection";
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
