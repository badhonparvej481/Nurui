import GradientButton from "@/components/nurui/gradient-button";
import GradientButtonCode from "@/components/nurui/gradient-button.tsx?raw";
import GradientButtonDemoCode from "@/components/nurui/gradient-button-demo.tsx?raw";
import BorderAnimationButton from "@/components/nurui/border-animation-button";
import BorderAnimationButtonCode from "@/components/nurui/border-animation-button.tsx?raw";
import BorderAnimationButtonDemoCode from "@/components/nurui/border-animation-button-demo.tsx?raw";

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
    othersCode: [{ fileName: "gradientButton", code: GradientButtonCode }],
  },
  borderAnimationButton: {
    component: <BorderAnimationButton text="Contact me" />,
    demoCode: BorderAnimationButtonDemoCode,
    othersCode: [
      { fileName: "borderAnimationButton", code: BorderAnimationButtonCode },
    ],
  },
};
