import NewsLetterSection from "@/components/common/NewsLetterSection";
import DashboardBannerSection from "@/components/pages/blog/DashboardBannerSection";
import StickyScrollSection from "@/components/pages/blog/StickyScrollSection";
import FeaturesSection from "@/components/pages/Home/FeaturesSection";

const page = () => {
  const working = true;
  if (working) return <div>Blog page is under development. Coming soon!</div>;
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
