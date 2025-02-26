import AnimatedTabs from "@/components/common/AnimatedTabs";
import PriceCard from "@/components/common/PricingCard";
import SectionIntro from "@/components/common/SectionIntro";
import SpotliteMagicCard from "@/components/common/SpotliteMagicCard";
interface PricingData {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isRecommended?: boolean;
}

const PricingSection = () => {
  const renderPricingCards = (data: PricingData[]) => (
    <div className="container grid grid-cols-4 gap-10 pt-10">
      {data?.map((d) => (
        <SpotliteMagicCard
          isRecommended={d?.isRecommended}
          key={d?.name}
          className="cursor-pointer group hover:border-[var(--white-color)] transition-all duration-300"
          gradientColor="var(--glass-color-4)"
          gradientSize={300}
        >
          <PriceCard
            key={d?.name}
            name={d?.name}
            price={d?.price}
            description={d?.description}
            features={d?.features}
            cta={d?.cta}
            isRecommended={d?.isRecommended}
          />
        </SpotliteMagicCard>
      ))}
    </div>
  );
  const tabs = [
    {
      id: "monthly",
      label: "Monthly",
      content: renderPricingCards(monthlyData),
    },
    {
      id: "yearly",
      label: "Yearly",
      content: renderPricingCards(yearlyData),
    },
  ];
  return (
    <section className="bg-[var(--glass-color)] backdrop-blur-lg w-full py-20 flex flex-col justify-center">
      <SectionIntro
        title={{
          highLiteWords: "Choose a Plan ",
          normalWords: "That Works Best For You ",
          highlightColor: "text-[var(--secondary-color)]",
        }}
        sectionName="Pricing"
        sectionNameColor="text-[var(--secondary-color)]"
        sectionGap="pb-6"
      />
      <AnimatedTabs tabs={tabs} />
    </section>
  );
};

export default PricingSection;

const monthlyData = [
  {
    name: "Basic",
    price: "$00/mo",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Standard",
    price: "$10/mo",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
    isRecommended: true,
  },
  {
    name: "Pro",
    price: "$200/mo",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$500/mo",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
  },
];

const yearlyData = [
  {
    name: "Basic",
    price: "$00/ye",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Standard",
    price: "$10/ye",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
    isRecommended: true,
  },
  {
    name: "Pro",
    price: "$200/ye",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$500/ye",
    description: "For growing companies with small teams",
    features: [
      "Website and e-commerce",
      "Bot to human hand-off",
      "Unlimited bots with Flow Designer",
      "Kompose GUI bot builder, Dialog Flow ES & CX, Amazon lex, IBM Watson.",
    ],
    cta: "Get Started",
  },
];
