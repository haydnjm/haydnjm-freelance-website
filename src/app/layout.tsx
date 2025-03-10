import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import { GITHUB, LINKEDIN } from "../constants";
import { Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haydn Morris | Freelance Software Engineer",
  description:
    "Bridging the gap between product vision and technical execution. I help businesses build products that users love and engineers can maintain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          src="https://umami.apps.haydnjm.com/script.js"
          data-website-id="93f88c6a-c263-41bf-b46d-6cec85bd3289"
        />
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <main>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-container">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src={logo}
                      alt="Haydn Morris"
                      width={32}
                      height={32}
                    />
                    <span className="inline-block font-bold">Haydn Morris</span>
                  </Link>
                  <nav className="hidden md:flex gap-6">
                    <Link
                      href="/#about"
                      className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      About
                    </Link>
                    <Link
                      href="/#case-studies"
                      className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/#contact"
                      className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                <nav className="flex items-center gap-2">
                  <Link
                    href="#contact"
                    className="md:hidden flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Link>
                  <Link href={GITHUB} target="_blank" rel="noreferrer">
                    <div className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </Link>
                  <Link href={LINKEDIN} target="_blank" rel="noreferrer">
                    <div className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </div>
                  </Link>
                </nav>
              </div>
            </header>

            {children}

            <footer className="border-t py-6 md:py-0 px-container">
              <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row text-sm text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} Haydn Morris. All rights
                  reserved.
                </p>
                <p>+31 6 40 46 66 45 | hello@haydnjm.com | KvK: 96610755</p>
                {/* <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </nav> */}
              </div>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
