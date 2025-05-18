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
        question: "What is this UI component library?",
        answer:
          "It's a collection of pre-built, customizable UI components for React, Next.js, Vue, and more — all in one place.",
      },
      {
        number: 2,
        question: "How do I install the library?",
        answer:
          "You can install it via npm or yarn. Just run `npm install your-ui-library` in your project directory.",
      },
      {
        number: 3,
        question: "Do I need to configure anything after installation?",
        answer:
          "Basic configuration like theme setup or provider wrappers may be required depending on the framework you're using.",
      },
      {
        number: 4,
        question: "Is there a free version available?",
        answer:
          "Yes, our core components are free to use. Premium components and templates are available in the pro version.",
      },
      {
        number: 5,
        question: "What frameworks are supported?",
        answer:
          "Currently, we support React, Next.js, Vue, and Angular. More framework support is coming soon.",
      },
    ],
  },
  {
    category: "Integration",
    id: 2,
    questions: [
      {
        number: 1,
        question: "Can I use this library with Tailwind CSS?",
        answer:
          "Yes, our components are Tailwind-compatible and work seamlessly in any Tailwind-based project.",
      },
      {
        number: 2,
        question: "Can I use it with a design system like Figma?",
        answer:
          "Absolutely. We provide Figma kits for design-to-development consistency.",
      },
      {
        number: 3,
        question: "Is it compatible with TypeScript?",
        answer:
          "Yes, all components are fully typed with TypeScript support for autocompletion and type safety.",
      },
      {
        number: 4,
        question: "How do I customize the components?",
        answer:
          "You can override styles using Tailwind utility classes, props, or extend the components as needed.",
      },
      {
        number: 5,
        question: "Can I use this with server-side rendering?",
        answer:
          "Yes, the library is optimized for SSR and works smoothly with Next.js and similar frameworks.",
      },
    ],
  },
  {
    category: "Components",
    id: 3,
    questions: [
      {
        number: 1,
        question: "What types of components are included?",
        answer:
          "We offer a wide range of components including buttons, modals, tabs, accordions, forms, and more.",
      },
      {
        number: 2,
        question: "Are the components responsive?",
        answer:
          "Yes, all components are mobile-first and responsive out of the box.",
      },
      {
        number: 3,
        question: "Can I animate components?",
        answer:
          "Yes, we provide built-in animation support using libraries like Framer Motion.",
      },
      {
        number: 4,
        question: "Can I create my own components?",
        answer:
          "Yes, our library is flexible enough to let you build and extend your own components using the same design tokens.",
      },
      {
        number: 5,
        question: "Do you provide accessibility support?",
        answer:
          "Absolutely. All components follow best practices for accessibility (ARIA, keyboard nav, etc.).",
      },
    ],
  },
  {
    category: "Documentation",
    id: 4,
    questions: [
      {
        number: 1,
        question: "Where can I find documentation?",
        answer:
          "You can access full documentation on our official website with examples and code snippets.",
      },
      {
        number: 2,
        question: "Do you offer community or premium support?",
        answer:
          "Yes, we offer community support on Discord and premium support for Pro users.",
      },
      {
        number: 3,
        question: "Is there a changelog or update history?",
        answer:
          "Yes, we maintain a detailed changelog with every release in our GitHub repository.",
      },
      {
        number: 4,
        question: "How can I contribute to the library?",
        answer:
          "You can fork our GitHub repo and open a pull request for fixes, features, or documentation improvements.",
      },
      {
        number: 5,
        question: "Do you have code examples or templates?",
        answer:
          "Yes, we provide starter templates and live playgrounds to speed up development.",
      },
    ],
  },
  {
    category: "Licensing & Plans",
    id: 5,
    questions: [
      {
        number: 1,
        question: "Is the library open-source?",
        answer:
          "Yes, the core of the library is open-source and MIT-licensed. Additional features are available in the Pro plan.",
      },
      {
        number: 2,
        question: "What’s included in the Pro plan?",
        answer:
          "Premium components, templates, priority support, and Figma kits are included in the Pro plan.",
      },
      {
        number: 3,
        question: "Can I use this library in commercial projects?",
        answer:
          "Yes, both free and Pro versions can be used in commercial and client projects.",
      },
      {
        number: 4,
        question: "Is there a lifetime license available?",
        answer:
          "Yes, we offer a one-time payment option for lifetime access to the Pro plan.",
      },
      {
        number: 5,
        question: "Do you offer team or enterprise licenses?",
        answer:
          "Yes, we have flexible licensing options for teams and enterprise needs. Contact us for custom plans.",
      },
    ],
  },
];