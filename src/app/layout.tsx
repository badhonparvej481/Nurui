import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";

import ThemeProvider from "./ThemeProvider";
import NProgressProvider from "@/components/common/NProgressProvider";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import MainContent from "./MainContent";
import { AppProvider } from "@/context/AppContext";
import SplashCursor from "@/components/ui/SplashCursor";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "600", "900", "1000"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

// const creepster = Creepster({
//   variable: "--font-creepster",
//   weight: ["400"],
//   subsets: ["latin"],
//   style: ["normal"],
//   display: "swap",
// });

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: {
      default: "Nurui",
      template: "%s | Nurui",
    },
    description:
      "React and Next.js based UI library with CLI scaffolding, TS-to-JS conversion, and v0 live previews.",
    applicationName: "Nurui",
    creator: "Md Afsar Mahmud",
    authors: [
      {
        name: "Md Afsar Mahmud",
        url: "https://md-afsar-mahmud.netlify.app",
      },
    ],
    keywords: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "motion/react",
      "gsap",
      "web animation",
      "shadcn components",
      "animation components for react",
      "add component by cli",
      "tailwind css animation components",
    ],
    openGraph: {
      title: "Nurui",
      description:
        "React and Next.js based UI library with CLI scaffolding, TS-to-JS conversion, and v0 live previews.",
      url: "https://nurui.vercel.app",
      siteName: "Nurui",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://nurui.vercel.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "NURUI OG Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nurui",
      description:
        "React and Next.js based UI library with CLI scaffolding, TS-to-JS conversion, and v0 live previews.",
      images: [{ url: "https://nurui.vercel.app/og-image.png" }],
      creator: "@md_afsar_mahmud",
      // site: "@nurui",
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased bg-[var(--background-color)] flex flex-col min-h-screen font-nunito`}
      >
        <AppProvider>
          <ThemeProvider>
            <NProgressProvider />
            {/* <SplashCursor /> */}
            <Navbar />
            <MainContent>{children}</MainContent>
            <Footer />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
