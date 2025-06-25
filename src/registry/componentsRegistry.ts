import GradientButton from "@/components/nurui/GradientButton";
import GradientButtonCode from "@/components/nurui/GradientButton.tsx?raw";
import GradientButtonDemoCode from "@/components/nurui/GradientButtonDemo.tsx?raw";

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
