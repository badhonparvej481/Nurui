"use client";
import { SiNpm } from "react-icons/si";
import { useState } from "react";
import {
  Snippet,
  SnippetHeader,
  SnippetTabsTrigger,
  SnippetTabsList,
  SnippetCopyButton,
  SnippetTabsContent,
} from "./Snippet";

const commands = [
  {
    label: "npm",
    icon: <SiNpm className="bg-[white] text-[#C12127]" />,
    code: `npx kibo-ui@latest add snippet`,
  },
  {
    label: "pnpm",
    icon: <SiNpm className="" />,
    code: `npx shadcn@latest add https://www.kibo-ui.com/registry/snippet.json`,
  },
  {
    label: "bun",
    icon: <SiNpm className="" />,
    code: `npx shadcn@latest add https://www.kibo-ui.com/registry/snippet.json`,
  },
  {
    label: "yarn",
    icon: <SiNpm className="" />,
    code: `npx shadcn@latest add https://www.kibo-ui.com/registry/snippet.json`,
  },
];

const Cli = () => {
  const [value, setValue] = useState(commands[0].label);
  const activeCommand = commands.find((command) => command.label === value);

  return (
    <Snippet value={value} onValueChange={setValue} className="w-full">
      <SnippetHeader>
        <SnippetTabsList>
          {commands.map((command) => (
            <SnippetTabsTrigger
              key={command.label}
              value={command.label}
              className={
                command.label === value ? "!bg-white/10 rounded-lg" : ""
              }
            >
              <span>{command.icon}</span>
              <span>{command.label}</span>
            </SnippetTabsTrigger>
          ))}
        </SnippetTabsList>
        <SnippetCopyButton
          value={activeCommand?.code ?? ""}
          onCopy={() =>
            console.log(`Copied "${activeCommand?.code}" to clipboard`)
          }
          onError={() =>
            console.error(
              `Failed to copy "${activeCommand?.code}" to clipboard`,
            )
          }
        />
      </SnippetHeader>
      {commands.map((command) => (
        <SnippetTabsContent key={command.label} value={command.label}>
          {command.code}
        </SnippetTabsContent>
      ))}
    </Snippet>
  );
};

export default Cli;
