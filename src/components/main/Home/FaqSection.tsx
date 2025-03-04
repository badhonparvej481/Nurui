"use client";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import { useState } from "react";

const FaqSection = () => {
  const [openKey, setOpenKey] = useState<number>(1);
  const [activeCategoryKey, setActiveCategoryKey] = useState<number>(1);

  const roundedButton = (id: number, category: string) => (
    <button
      key={id}
      className={`${
        activeCategoryKey === id
          ? "bg-[var(--glass-color-3)] text-[var(--white-color)] border border-[var(--glass-color-3)]"
          : "border border-[var(--border-color)]"
      } font-semibold cursor-pointer rounded-full px-3.5 py-2.5 capitalize text-xl`}
      onClick={() => setActiveCategoryKey(id)}
    >
      {category}
    </button>
  );

  return (
    <section className="container flex flex-col xl:flex-row gap-10 xl:gap-20">
      {/* title and action's button */}
      <div className="xl:w-1/3 space-y-5 text-center xl:text-start">
        <h3 className="text-4xl xl:text-5xl font-bold">FAQs</h3>
        <p className="text-xl">
          Everything you need to know about features, membership, and
          troubleshooting.
        </p>
        <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-5 pt-1">
          {faqsData.map((data) => roundedButton(data?.id, data?.category))}
        </div>
      </div>
      {/* question and answer */}
      <div className="xl:w-2/3 space-y-5">
        {faqsData?.[activeCategoryKey - 1]?.questions?.map((faqData, i) => (
          <QuestionAnswer
            key={i}
            questionNumber={faqData?.number}
            question={faqData?.question}
            answer={faqData?.answer}
            openKey={openKey}
            setOpenKey={() =>
              setOpenKey(faqData?.number === openKey ? 0 : faqData?.number)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

const faqsData = [
  {
    category: "Getting Started",
    id: 1,
    questions: [
      {
        number: 1,
        question: "What is omnichannel communication?",
        answer:
          "Omnichannel communication integrates multiple channels for seamless interaction.",
      },
      {
        number: 2,
        question: "How do I get started with your omnichannel platform?",
        answer:
          "You can sign up on our website and follow the onboarding guide.",
      },
      {
        number: 3,
        question: "Do I need technical skills to use your platform?",
        answer:
          "No, our platform is designed for ease of use with a user-friendly interface.",
      },
      {
        number: 4,
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for new users.",
      },
      {
        number: 5,
        question: "What are the system requirements for your platform?",
        answer: "Our platform is web-based and works on any modern browser.",
      },
      {
        number: 6,
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial for new users.",
      },
    ],
  },
  {
    category: "Integration",
    id: 2,
    questions: [
      {
        number: 1,
        question: "Can I integrate your platform with other tools or systems?",
        answer:
          "Yes, our platform supports various third-party integrations via API.",
      },
      {
        number: 2,
        question: "Does your platform support CRM integrations?",
        answer:
          "Yes, we support integrations with major CRMs like Salesforce and HubSpot.",
      },
      {
        number: 3,
        question: "How do I set up API access?",
        answer:
          "You can generate API keys from the developer section in your account.",
      },
      {
        number: 4,
        question: "Can I connect multiple third-party services?",
        answer: "Yes, you can integrate multiple services simultaneously.",
      },
      {
        number: 5,
        question: "What happens if an integration fails?",
        answer:
          "Our support team is available 24/7 to assist with integration issues.",
      },
      {
        number: 6,
        question: "Can I connect multiple third-party services?",
        answer: "Yes, you can integrate multiple services simultaneously.",
      },
    ],
  },
  {
    category: "Channels",
    id: 3,
    questions: [
      {
        number: 1,
        question: "What channels does your platform support?",
        answer: "We support email, SMS, live chat, social media, and more.",
      },
      {
        number: 2,
        question: "Can I customize messages for different channels?",
        answer:
          "Yes, you can tailor messages based on each channel's requirements.",
      },
      {
        number: 3,
        question: "Does your platform support push notifications?",
        answer: "Yes, you can send push notifications to mobile and web users.",
      },
      {
        number: 4,
        question: "How do I enable chatbot automation?",
        answer: "You can set up automated responses in the chatbot settings.",
      },
      {
        number: 5,
        question: "Can I track customer interactions across channels?",
        answer:
          "Yes, our platform provides unified tracking across all channels.",
      },
    ],
  },
  {
    category: "Customer Service",
    id: 4,
    questions: [
      {
        number: 1,
        question: "How does your platform handle customer support?",
        answer:
          "We offer automated responses, ticketing, and live chat support.",
      },
      {
        number: 2,
        question: "Can I assign tickets to different support agents?",
        answer: "Yes, you can assign tickets based on priority and expertise.",
      },
      {
        number: 3,
        question: "Does your platform provide customer feedback collection?",
        answer:
          "Yes, you can collect and analyze customer feedback through surveys.",
      },
      {
        number: 4,
        question: "Is there an SLA tracking feature?",
        answer: "Yes, you can define and monitor Service Level Agreements.",
      },
      {
        number: 5,
        question: "Can I access support analytics?",
        answer:
          "Yes, our platform provides detailed analytics for customer interactions.",
      },
      {
        number: 6,
        question: "Is there an SLA tracking feature?",
        answer: "Yes, you can define and monitor Service Level Agreements.",
      },
    ],
  },
  {
    category: "Business Benefits",
    id: 5,
    questions: [
      {
        number: 1,
        question:
          "What types of businesses can benefit from omnichannel communication?",
        answer:
          "E-commerce, SaaS, healthcare, and customer service industries benefit the most.",
      },
      {
        number: 2,
        question: "How does omnichannel improve customer engagement?",
        answer:
          "It ensures seamless communication across multiple touchpoints.",
      },
      {
        number: 3,
        question: "Can omnichannel help increase sales?",
        answer:
          "Yes, businesses see higher conversion rates with consistent communication.",
      },
      {
        number: 4,
        question: "What is the ROI of using omnichannel communication?",
        answer:
          "Companies experience improved customer retention and satisfaction.",
      },
      {
        number: 5,
        question: "Is omnichannel communication suitable for small businesses?",
        answer:
          "Yes, even small businesses can leverage omnichannel strategies for growth.",
      },
    ],
  },
];
