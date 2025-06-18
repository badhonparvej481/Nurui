import { ComponentSource } from "@/components/common/component-source";
import { cn } from "@/utils/cn";
import type { MDXComponents } from "mdx/types";
import ComponentPreview from "@/components/common/ComponentPreview";
import Cli from "@/components/ui/cli/Cli";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/common/Tabs";

export function getMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "text-3xl font-semibold pt-10 pb-2 border-b border-white/15",
          className,
        )}
        {...props}
      />
    ),

    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs
        className={cn("relative mt-6 w-full overflow-x-auto", className)}
        {...props}
      />
    ),

    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          "w-full justify-start rounded-none border-b border-white/15 bg-transparent p-0",
          className,
        )}
        {...props}
      />
    ),

    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger
        className={cn(
          "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-white data-[state=active]:text-foreground data-[state=active]:shadow-none",
          className,
        )}
        {...props}
      />
    ),

    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent
        className={cn(
          "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
          className,
        )}
        {...props}
      />
    ),

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

    ComponentPreview,
    Cli,
    ...components,
  };
}
