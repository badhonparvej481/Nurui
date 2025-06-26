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

type CodeEntry = {
  fileName: string;
  code: string;
};

type ComponentEntry = {
  component: React.ReactNode;
  demoCode: string;
  othersCode?: CodeEntry[];
};

export const Index: Record<string, ComponentEntry> = {
  gradientButton: {
    component: <GradientButton />,
    demoCode: GradientButtonDemoCode,
    othersCode: [{ fileName: "gradient-button", code: GradientButtonCode }],
  },
  borderAnimationButton: {
    component: <BorderAnimationButton text="Contact me" />,
    demoCode: BorderAnimationButtonDemoCode,
    othersCode: [
      { fileName: "border-animation-button", code: BorderAnimationButtonCode },
    ],
  },
  hoverShadowButton: {
    component: <HoverShadowButton text="Subscribe" />,
    demoCode: HoverShadowButtonDemoCode,
    othersCode: [
      { fileName: "hover-shadow-button", code: HoverShadowButtonCode },
    ],
  },
  textFallButton: {
    component: <TextFallButtonDemo />,
    demoCode: TextFallButtonDemoCode,
    othersCode: [{ fileName: "text-fall-button", code: TextFallButtonCode }],
  },
};
