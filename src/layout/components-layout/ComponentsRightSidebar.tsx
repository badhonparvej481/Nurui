"use client";
import { usePathname } from "next/navigation";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuBug } from "react-icons/lu";
import { MdOutlineModeEditOutline } from "react-icons/md";

const ComponentsRightSidebar = () => {
  const pathname = usePathname();
  const title = `[bug]: ${pathname}`;
  const issueUrl =
    `https://github.com/Mdafsarx/nurui/issues/new?` +
    `title=${encodeURIComponent(title)}` +
    `&labels=bug&labels=documentation` +
    `&template=bug_report.md`;

  const navigation = {
    onThisPage: [
      {
        label: "Installation",
        icon: "📦",
        href: "#installation",
      },
      {
        label: "Props",
        icon: "⚙️",
        href: "#props",
      },
    ],
    contribute: [
      {
        label: "Report an issue",
        icon: <LuBug />,
        href: issueUrl,
      },
      {
        label: "Request a feature",
        icon: <FaRegLightbulb />,
        href: "https://github.com/your-repo/issues/new?template=feature_request.md",
      },
      {
        label: "Edit this page",
        icon: <MdOutlineModeEditOutline />,
        href: "https://github.com/your-repo/edit/main/docs/page.md",
      },
    ],
  };

  return (
    <div className="fixed top-16 right-0 hidden xl:block">
      <div className="w-72 min-h-screen border-l border-[var(--primary-color-1)] border-dashed p-4 space-y-3">
        <div className="flex flex-col gap-y-2">
          <h3 className="font-semibold pb-1">On this page</h3>
          {navigation?.onThisPage?.map((item) => (
            <a
              key={item?.label}
              className="text-[var(--opacity-text-color)] cursor-pointer"
            >
              {item?.label}
            </a>
          ))}
        </div>
        {/* Contribute */}
        <div className="flex flex-col gap-y-2">
          <h3 className="font-semibold pb-1">Contribute</h3>
          {navigation?.contribute?.map((item) => (
            <a
              href={issueUrl}
              key={item?.label}
              target="_blank"
              className="text-[var(--opacity-text-color)] flex items-center gap-1"
            >
              {item?.icon}
              {item?.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsRightSidebar;
