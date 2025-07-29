import React from "react";
import dynamic from "next/dynamic";

export const componentsPreviewRegistry: Record<
  string,
  { component: React.ComponentType }
> = {
  "gradient-button": {
    component: dynamic(() => import("@/components/nurui/gradient-button-demo")),
  },
  "magnet-button": {
    component: dynamic(() => import("@/components/nurui/magnet-button-demo")),
  },
};
