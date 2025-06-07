import { compileMDX } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";
import ComponentPreview from "@/components/common/ComponentPreview";
import { getMDXComponents } from "../../../../../mdx-components";
import { Metadata } from "next";

interface IParams {
  params: {
    slug: string;
  };
}

interface Frontmatter {
  title: string;
  description: string;
  creator: string;
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "docs",
    "components",
    `${params.slug}.mdx`,
  );

  const content = await fs.readFile(filePath, "utf-8");

  const { frontmatter } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${frontmatter?.title} | Bytenexia`,
    description: frontmatter?.description,
    creator: frontmatter?.creator,
  };
}

export async function generateStaticParams() {
  const files = await fs.readdir(
    path.join(process.cwd(), "src", "content", "docs", "components"),
  );

  const paths = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));

  return paths;
}

const Page = async ({ params }: IParams) => {
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "docs",
    "components",
    `${params.slug}.mdx`,
  );
  const rawMDX = await fs.readFile(filePath, "utf-8");
  const { content } = await compileMDX<Frontmatter>({
    source: rawMDX,
    options: { parseFrontmatter: true },
    components: getMDXComponents({}),
  });

  return (
    <div>
      <ComponentPreview />
      {content}
    </div>
  );
};

export default Page;
