import NewsLetterSection from "@/components/common/NewsLetterSection";
import PricingSection from "@/components/main/pricing/PricingSection";
import FeatureComparisonSection from "@/components/main/pricing/FeatureComparisonSection";

const Pricing = () => {
  return (
    <main className="section-gap">
      <PricingSection />
      <FeatureComparisonSection />
      <NewsLetterSection />
    </main>
  );
};

export default Pricing;
