import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haydn Morris, Freelance Product Engineer",
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
          src="http://umami-mwsscsc8g088g04kcow4kw0c.188.245.155.162.sslip.io/script.js"
          data-website-id="30d83210-7ebe-4d32-8db6-96650a8a5e77"
        />
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
