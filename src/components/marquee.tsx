// InfiniteScroll.tsx (Server Component)
import { ReactNode } from "react";
import styles from "./marquee.module.css";

type InfiniteScrollProps = {
  children: ReactNode;
  id?: string;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  gap?: number;
};

export default function Marquee({
  children,
  id,
  direction = "left",
  speed = "normal",
  gap = 4,
}: InfiniteScrollProps) {
  // Map speed strings to CSS class names
  const speedClass = {
    slow: styles.scrollSlow,
    normal: styles.scrollNormal,
    fast: styles.scrollFast,
  }[speed];

  // Map direction to CSS class names
  const directionClass =
    direction === "right" ? styles.scrollRight : styles.scrollLeft;

  // Create gap class from Tailwind
  const gapClass = `gap-${gap}`;

  return (
    <div id={id} className={styles.scrollContainer}>
      <div className={`${styles.scrollTrack} ${speedClass} ${directionClass}`}>
        {/* First copy of items */}
        <div className={`${styles.scrollContent} ${gapClass} flex`}>
          {children}
        </div>

        {/* Duplicate for seamless looping */}
        <div className={`${styles.scrollContent} ${gapClass} flex`}>
          {children}
        </div>
      </div>
    </div>
  );
}
