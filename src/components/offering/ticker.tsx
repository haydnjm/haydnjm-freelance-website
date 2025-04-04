"use client";

import React from "react";
import styles from "./ticker.module.css";

const services = [
  "build a new website",
  "automate processes",
  "launch a mobile app",
  "utilise AI in your business",
  "migrate data to the cloud",
  "integrate third-party APIs",
  "create automated tests",
  "develop a chatbot",
  "deploy scalable infra",
  "build a progressive web app",
  "optimise website speed",
  "create responsive designs",
  "develop a REST API",
  "set up CI/CD pipelines",
  "refactor legacy code",
  "implement authentication",
  "create data visualisations",
  "build serverless apps",
];

const Ticker = () => {
  const [currentService, setCurrentService] = React.useState(services[0]);
  const [nextService, setNextService] = React.useState("");
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Get the next index in sequence (loop back to 0 when reaching the end)
      const nextIndex = (currentIndex + 1) % services.length;
      const newService = services[nextIndex];

      // Only change if it's a different service
      if (newService !== currentService) {
        setNextService(newService);
        setIsAnimating(true);
        setCurrentIndex(nextIndex);

        // After animation completes, update current service and reset
        setTimeout(() => {
          setCurrentService(newService);
          setIsAnimating(false);
        }, 500);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentService, currentIndex]);

  return (
    <div className="flex flex-col md:flex-row text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full">
      <p className="text-center md:text-right">I can help you&nbsp;</p>
      <div className="relative text-center h-[1.2em] md:text-left flex-1 overflow-hidden">
        <div className="text-primary font-display invisible" aria-hidden="true">
          {currentService}
        </div>

        <div
          className={`text-primary font-display absolute top-0 left-0 w-full ${isAnimating ? styles.slideOut : ""}`}
        >
          {currentService}
        </div>

        {isAnimating && (
          <div
            className={`text-primary font-display absolute top-0 left-0 w-full ${styles.slideIn}`}
          >
            {nextService}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticker;
