"use client";

import { useEffect, useState } from "react";
import ScrollAnimatedOffering from "./offering/scroll-animated-offering";
import StaticOffering from "./offering/static-offering";

export default function Offering() {
  // Default to showing nothing until we detect the browser
  const [browser, setBrowser] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Get the user agent string
    const userAgent = window.navigator.userAgent.toLowerCase();

    // Check for Firefox or Safari
    const isFirefox = userAgent.indexOf("firefox") > -1;
    const isSafari =
      userAgent.indexOf("safari") > -1 && userAgent.indexOf("chrome") === -1;

    if (isFirefox || isSafari) {
      setBrowser(isFirefox ? "firefox" : "safari");
    } else {
      setBrowser("other");
    }
  }, []);

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  // Render the appropriate component based on browser detection
  return (
    <>
      <h1 className="flex-1 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center my-8 text-primary-foreground">
        What can I help you with?
      </h1>
      {browser === "firefox" || browser === "safari" ? (
        <StaticOffering />
      ) : browser === "other" ? (
        <ScrollAnimatedOffering />
      ) : null}
    </>
  );
}
