#!/usr/bin/env node
import { intro, outro, spinner, cancel, select } from "@clack/prompts";
import colors from "picocolors";
import fs from "fs";
import path from "path";
import { execa } from "execa";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLI args
const [command, category, componentName] = process.argv.slice(2);

// CLI intro
intro(colors.bold("Bytenexia CLI - Component Importer"));

// Validate command
if (command !== "add" || !componentName) {
  cancel(colors.red("Usage: npx bytenexia add <ComponentName>"));
  process.exit(0);
}

// Language select
const language = await select({
  message: "Select the language of the component:",
  options: [
    { label: "TypeScript (.tsx)", value: "ts" },
    { label: "JavaScript (.jsx)", value: "js" },
  ],
});

const extension = language === "ts" ? "ts" : "js";
const categoryFolder = category.toLowerCase();
const ComponentFolder = componentName.toLowerCase();
const srcPath = path.join(
  __dirname,
  `../components/${extension}`,
  categoryFolder,
  ComponentFolder,
);
const destPath = path.join(
  process.cwd(),
  "components",
  "ui",
  categoryFolder,
  ComponentFolder,
);

if (!fs.existsSync(srcPath)) {
  cancel(
    colors.red(
      `❌ Component folder "${ComponentFolder}" not found in bytenexia/components/`,
    ),
  );
  process.exit(1);
}

const s = spinner();
s.start(colors.gray(`Adding ${componentName} to your project...`));

try {
  await fs.promises.mkdir(path.dirname(destPath), { recursive: true });
  await fs.promises.cp(srcPath, destPath, { recursive: true });
  s.stop(
    colors.green(
      `✅ ${componentName} folder added to components/ui/${ComponentFolder}/`,
    ),
  );
} catch (err) {
  s.stop(colors.red("❌ Failed to copy component folder."));
  console.error(err);
  process.exit(1);
}

// Detect user's package manager
function detectPackageManager() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  return "npm"; // default
}

// 🔽 Load dependencies from JSON
// After the component is copied
const depFile = path.join(__dirname, "../dependencies.json");

if (fs.existsSync(depFile)) {
  const depsMap = JSON.parse(fs.readFileSync(depFile, "utf8"));
  const deps = depsMap[componentName] || [];

  if (deps.length > 0) {
    const packageManager = detectPackageManager();
    const s2 = spinner();
    s2.start(
      colors.gray(
        `📦 Installing dependencies with ${packageManager}: ${deps.join(", ")}`,
      ),
    );

    let installCommand;
    switch (packageManager) {
      case "yarn":
        installCommand = ["add", ...deps];
        break;
      case "pnpm":
        installCommand = ["add", ...deps];
        break;
      case "bun":
        installCommand = ["add", ...deps];
        break;
      default:
        installCommand = ["install", ...deps];
    }

    try {
      await execa(packageManager, installCommand, { stdio: "inherit" });
      s2.stop(colors.green("✅ Dependencies installed successfully!"));
    } catch (err) {
      s2.stop(colors.red("❌ Failed to install dependencies."));
      console.error(err);
    }
  }
}
outro(colors.bold(colors.green("🎉 Done!")));
