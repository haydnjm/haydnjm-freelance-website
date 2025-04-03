import logo from "@/images/logo.png";
import { Github, Linkedin, Mail } from "lucide-react";
import { Ubuntu, Ubuntu_Mono, Funnel_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Toaster } from "sonner";
import { GITHUB, LINKEDIN } from "../constants";
import "./globals.css";
import { Metadata } from "next";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const funnelyDisplay = Funnel_Display({
  variable: "--font-funnely-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haydnjm.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/en-GB",
    },
  },
  title: {
    default: "Haydn Morris | Freelance Software Engineer",
    template: "%s | Haydn Morris",
  },
  description:
    "Bridging the gap between product vision and technical execution. I help businesses build products that users love and engineers can maintain.",
  keywords: [
    "Haydn Morris",
    "Freelance Software Engineer",
    "Software Engineer",
    "Product Vision",
    "Technical Execution",
  ],
  authors: [{ name: "Haydn Morris" }],
  creator: "Haydn Morris",
  publisher: "Haydn Morris Digital",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Haydn Morris | Freelance Software Engineer",
    title: "Haydn Morris | Freelance Software Engineer",
    description:
      "Bridging the gap between product vision and technical execution. I help businesses build products that users love and engineers can maintain.",
    images: [
      {
        url: "/images/thumbnail-wide.png",
        width: 1200,
        height: 630,
        alt: "Haydn Morris | Freelance Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          src="https://analytics.haydnjm.com/script.js"
          data-website-id="93f88c6a-c263-41bf-b46d-6cec85bd3289"
        />
      )}
      <body
        className={`${funnelyDisplay.variable} ${ubuntu.variable} ${ubuntuMono.variable} antialiased`}
      >
        <Toaster />
        <main>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b-2 border-secondary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-container">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src={logo}
                      alt="Haydn Morris"
                      width={32}
                      height={32}
                    />
                    <span className="inline-block font-bold font-display">
                      Haydn Morris
                    </span>
                  </Link>
                  <nav className="hidden md:flex gap-6 text-sm font-medium text-foreground">
                    <Link
                      href="/#about"
                      className="transition-colors hover:text-primary"
                    >
                      About
                    </Link>
                    <Link
                      href="/#testimonials"
                      className="transition-colors hover:text-primary"
                    >
                      Testimonials
                    </Link>
                    <Link
                      href="/#process"
                      className="transition-colors hover:text-primary"
                    >
                      Process
                    </Link>
                    <Link
                      href="/case-studies"
                      className="transition-colors hover:text-primary"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/#contact"
                      className="transition-colors hover:text-primary"
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
                <p className="text-center">
                  +31 6 40 46 66 45 |{" "}
                  <a href="mailto:hello@haydnjm.com">hello@haydnjm.com</a> |
                  KvK: 96617055
                </p>
                <nav className="flex gap-4 sm:gap-6">
                  <Link
                    href="/terms-of-service"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
