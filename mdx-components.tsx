import { ComponentSource } from "@/components/common/component-source";
import { cn } from "@/utils/cn";
import type { MDXComponents } from "mdx/types";
import Bytenexia from "@/components/common/Bytenexia";

export function getMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    ComponentSource: (props: React.ComponentProps<typeof ComponentSource>) => (
      <ComponentSource {...props} />
    ),
    Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
      <h3
        className={cn(
          "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
          className,
        )}
        {...props}
      />
    ),
    Steps: ({ ...props }) => (
      <div
        className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
        {...props}
      />
    ),
    Bytenexia,
    ...components,
  };
}
