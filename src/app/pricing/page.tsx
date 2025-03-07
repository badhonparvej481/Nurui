import NewsLetterSection from "@/components/common/NewsLetterSection";
import PricingSection from "@/components/main/Home/PricingSection";
import FeatureComparison from "@/components/main/pricing/FeatureComparison";

const Pricing = () => {
  return (
    <div className="space-y-24">
      <PricingSection />
      <FeatureComparison />
      <NewsLetterSection />
    </div>
  );
};

export default Pricing;
