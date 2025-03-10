import NewsLetterSection from "@/components/common/NewsLetterSection";
import PricingSection from "@/components/main/Home/PricingSection";
import FeatureComparison from "@/components/main/pricing/FeatureComparison";

const Pricing = () => {
  return (
    <div className="section-gap">
      <PricingSection />
      <FeatureComparison />
      <NewsLetterSection />
    </div>
  );
};

export default Pricing;
