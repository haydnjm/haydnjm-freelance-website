"use client";

import { PauseCircle, PlayCircle } from "lucide-react";
import React from "react";

const PlayIndicator = ({ id }: { id: string }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const element = document.getElementById(id);

    if (!element) return;

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]);

  return (
    <div
      className={`absolute bottom-10 right-10 rounded-full transition-colors duration-300 ${
        isHovering ? "bg-background" : "bg-secondary"
      } p-2`}
    >
      <div className="relative">
        <PauseCircle
          className={`text-secondary-foreground w-10 h-10 absolute top-0 left-0 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />
        <PlayCircle
          className={`text-secondary-foreground w-10 h-10 transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
};

export default PlayIndicator;
