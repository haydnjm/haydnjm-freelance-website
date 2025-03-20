import { GITHUB, LINKEDIN } from "@/constants";
import type { Metadata } from "next";
import React, { unstable_ViewTransition as ViewTransition } from "react";
import "../../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://haydnjm.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Haydn Morris",
    template: "%s | Haydn Morris",
  },
  description: "Freelance software engineer | Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased tracking-tight">
      <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
        <main className="max-w-[60ch] mx-auto w-full space-y-6">
          <ViewTransition name="test">{children}</ViewTransition>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  const links = [
    { name: "linkedin", url: LINKEDIN },
    { name: "github", url: GITHUB },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
