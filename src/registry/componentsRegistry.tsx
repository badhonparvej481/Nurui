import GradientButton from "@/components/nurui/gradient-button";
import GradientButtonCode from "@/components/nurui/gradient-button.tsx?raw";
import GradientButtonDemoCode from "@/components/nurui/gradient-button-demo.tsx?raw";
import BorderAnimationButton from "@/components/nurui/border-animation-button";
import BorderAnimationButtonCode from "@/components/nurui/border-animation-button.tsx?raw";
import BorderAnimationButtonDemoCode from "@/components/nurui/border-animation-button-demo.tsx?raw";
import HoverShadowButton from "@/components/nurui/hover-shadow-button";
import HoverShadowButtonDemoCode from "@/components/nurui/hover-shadow-button-demo.tsx?raw";
import HoverShadowButtonCode from "@/components/nurui/hover-shadow-button.tsx?raw";
import { TextFallButtonDemo } from "@/components/nurui/text-fall-button-demo";
import TextFallButtonDemoCode from "@/components/nurui/text-fall-button-demo.tsx?raw";
import TextFallButtonCode from "@/components/nurui/text-fall-button.tsx?raw";
import MagnetButtonDemo from "@/components/nurui/magnet-button-demo";
import MagnetButtonDemoCode from "@/components/nurui/magnet-button-demo.tsx?raw";
import MagnetButtonCode from "@/components/nurui/magnet-button.tsx?raw";
import PlayingCardDemo from "@/components/nurui/playing-card-demo";
import PlayingCardDemoCode from "@/components/nurui/playing-card-demo.tsx?raw";
import PlayingCardCode from "@/components/nurui/playing-card.tsx?raw";
import { InfoCardDemo } from "@/components/nurui/info-card-demo";
import InfoCardDemoCode from "@/components/nurui/info-card-demo.tsx?raw";
import InfoCardCode from "@/components/nurui/info-card.tsx?raw";
import ContactFormDemo from "@/components/nurui/contact-form-demo";
import ContactFormDemoCode from "@/components/nurui/contact-form-demo.tsx?raw";
import ContactFormCode from "@/components/nurui/contact-form.tsx?raw";
import BackgroundShineButtonCode from "@/components/nurui/background-shine-button.tsx?raw";
import ShinyInputCode from "@/components/nurui/shiny-input.tsx?raw";
import ShinyTextAreaCode from "@/components/nurui/shiny-text-area.tsx?raw";
import NeobrutalismFaqDemo from "@/components/nurui/neobrutalism-faq-demo";
import NeobrutalismFaqDemoCode from "@/components/nurui/neobrutalism-faq-demo.tsx?raw";
import NeobrutalismFaqCode from "@/components/nurui/neobrutalism-faq.tsx?raw";
import PremiumTestimonialDemo from "@/components/nurui/premium-testimonial-demo";
import PremiumTestimonialDemoCode from "@/components/nurui/premium-testimonial-demo.tsx?raw";
import PremiumTestimonialCode from "@/components/nurui/premium-testimonial.tsx?raw";
import ProjectShowCaseDemo from "@/components/nurui/project-showcase-demo";
import ProjectShowCaseDemoCode from "@/components/nurui/project-showcase-demo.tsx?raw";
import ProjectShowCaseCode from "@/components/nurui/project-showcase.tsx?raw";
import HalomotButtonCode from "@/components/nurui/halomot-button.tsx?raw";
import { StoryDemo } from "@/components/nurui/story-demo";
import StoryDemoCode from "@/components/nurui/story-demo.tsx?raw";
import StoryCode from "@/components/nurui/story.tsx?raw";
import StoryButtonCode from "@/components/nurui/story-button.tsx?raw";
import StoryDialogCode from "@/components/nurui/story-dialog.tsx?raw";

type CodeEntry = {
  fileName: string;
  code: string;
};

type ComponentEntry = {
  preview: React.ReactNode;
  code: string;
  othersCode?: CodeEntry[];
};

export const Index: Record<string, ComponentEntry> = {
  // sections
  neobrutalismFaq: {
    preview: <NeobrutalismFaqDemo />,
    code: NeobrutalismFaqDemoCode,
    othersCode: [{ fileName: "neobrutalism-faq", code: NeobrutalismFaqCode }],
  },
  premiumTestimonial: {
    preview: <PremiumTestimonialDemo />,
    code: PremiumTestimonialDemoCode,
    othersCode: [
      { fileName: "premium-testimonial", code: PremiumTestimonialCode },
    ],
  },
  // components
  projectShowCase: {
    preview: <ProjectShowCaseDemo />,
    code: ProjectShowCaseDemoCode,
    othersCode: [
      { fileName: "project-showcase", code: ProjectShowCaseCode },
      { fileName: "halomot-button", code: HalomotButtonCode },
    ],
  },
  story: {
    preview: <StoryDemo />,
    code: StoryDemoCode,
    othersCode: [
      { fileName: "story", code: StoryCode },
      { fileName: "story-button", code: StoryButtonCode },
      { fileName: "story-dialog", code: StoryDialogCode },
    ],
  },
  // buttons
  gradientButton: {
    preview: <GradientButton />,
    code: GradientButtonDemoCode,
    othersCode: [{ fileName: "gradient-button", code: GradientButtonCode }],
  },
  borderAnimationButton: {
    preview: <BorderAnimationButton text="Contact me" />,
    code: BorderAnimationButtonDemoCode,
    othersCode: [
      { fileName: "border-animation-button", code: BorderAnimationButtonCode },
    ],
  },
  hoverShadowButton: {
    preview: <HoverShadowButton text="Subscribe" />,
    code: HoverShadowButtonDemoCode,
    othersCode: [
      { fileName: "hover-shadow-button", code: HoverShadowButtonCode },
    ],
  },
  textFallButton: {
    preview: <TextFallButtonDemo />,
    code: TextFallButtonDemoCode,
    othersCode: [{ fileName: "text-fall-button", code: TextFallButtonCode }],
  },
  magnetButton: {
    preview: <MagnetButtonDemo />,
    code: MagnetButtonDemoCode,
    othersCode: [{ fileName: "magnet-button", code: MagnetButtonCode }],
  },
  // cards
  playingCard: {
    preview: <PlayingCardDemo />,
    code: PlayingCardDemoCode,
    othersCode: [{ fileName: "playing-card", code: PlayingCardCode }],
  },
  infoCard: {
    preview: <InfoCardDemo />,
    code: InfoCardDemoCode,
    othersCode: [{ fileName: "info-card", code: InfoCardCode }],
  },
  // forms
  contactForm: {
    preview: <ContactFormDemo />,
    code: ContactFormDemoCode,
    othersCode: [
      { fileName: "contact-form", code: ContactFormCode },
      { fileName: "background-shine-button", code: BackgroundShineButtonCode },
      { fileName: "shiny-input", code: ShinyInputCode },
      { fileName: "shiny-text-area", code: ShinyTextAreaCode },
    ],
  },
};
