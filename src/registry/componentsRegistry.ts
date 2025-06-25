import GradientButton from "@/components/nurui/gradient-button";
import GradientButtonCode from "@/components/nurui/gradient-button.tsx?raw";
import GradientButtonDemoCode from "@/components/nurui/gradient-button-demo.tsx?raw";

type CodeEntry = {
  fileName: string;
  code: string;
};

type ComponentEntry = {
  component: React.ComponentType;
  demoCode: string;
  othersCode?: CodeEntry[];
};

export const Index: Record<string, ComponentEntry> = {
  GradientButton: {
    component: GradientButton,
    demoCode: GradientButtonDemoCode,
    othersCode: [{ fileName: "GradientButton", code: GradientButtonCode }],
  },
};
