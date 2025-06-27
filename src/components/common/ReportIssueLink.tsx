"use client";
import { usePathname } from "next/navigation";

export function ReportIssueButton() {
  const pathname = usePathname(); // e.g. /docs/components/marquee

  const title = `[bug]: ${pathname}`;
  const issueUrl = `https://github.com/magicuidesign/magicui/issues/new?` +
    `title=${encodeURIComponent(title)}` +
    `&labels=bug&labels=documentation` +
    `&template=bug_report.md`;

  return (
    <a
      href={issueUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      🐞 Report an issue
    </a>
  );
}