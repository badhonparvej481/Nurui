import { ComponentSource } from "@/components/common/component-source";
import { cn } from "@/utils/cn";
import type { MDXComponents } from "mdx/types";
import ComponentPreview from "@/components/common/ComponentPreview";
import Cli from "@/components/ui/cli/Cli";
import { CodeBlock } from "@/components/ui/code-block/CodeBlock";
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
          "text-2xl font-semibold pt-10 pb-2 border-b border-[var(--primary-color-3)]",
          className,
        )}
        {...props}
      />
    ),

    p: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    ),

    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto rounded-lg border  border-[var(--primary-color-3)]">
        <table
          className={cn("my-0 w-full overflow-hidden", className)}
          {...props}
        />
      </div>
    ),

    thead: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead
        className={cn(
          "border-b border-[var(--primary-color-3)] bg-[var(--primary-color-5)]",
          className,
        )}
        {...props}
      />
    ),

    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn(
          "border-b border-[var(--primary-color-3)] last:border-b-0",
          className,
        )}
        {...props}
      />
    ),

    th: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        className={cn(
          "text-balance border-r border-[var(--primary-color-3)] px-6 py-3 text-left font-mono text-sm font-semibold tracking-tight last:border-r-0",
          className,
        )}
        {...props}
      />
    ),

    td: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        className={cn(
          "border-r border-[var(--primary-color-3)] px-6 py-3 text-sm last:border-r-0 [&[align=center]]:text-center [&[align=right]]:text-right",
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
          "w-full justify-start rounded-none border-b border-[var(--primary-color-3)] bg-transparent p-0",
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
      <h3 className={cn("font-heading tracking-tight", className)} {...props} />
    ),

    Steps: ({ ...props }) => (
      <div
        className="[&>h3]:step steps ml-4 border-l border-white/20 pl-8 [counter-reset:step] -mt-7 space-y-4"
        {...props}
      />
    ),

    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          "relative rounded bg-white/10 px-[0.3rem] py-[0.2rem] font-mono text-sm",
          className,
        )}
        {...props}
      />
    ),

    blockquote: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => (
      <blockquote
        className={cn("mt-6 border-l-2 pl-6 italic", className)}
        {...props}
      />
    ),

    CodeBlock,
    ComponentPreview,
    Cli,
    ...components,
  };
}
