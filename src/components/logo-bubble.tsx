import Image from "next/image";
import { cn } from "../lib/utils";
import { StaticImageData } from "next/image";
export const LogoBubble = ({
  src,
  alt,
  width,
  height,
  position,
}: {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  position: {
    top: string;
    left: string;
  };
}) => {
  return (
    <div
      className={cn(
        "animate-float-slow opacity-10 absolute rounded-full flex items-center justify-center"
      )}
      style={position}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

{
  /* Floating tech bubbles */
}
{
  /* <div className="absolute inset-0 z-0">
            {randomLogos.map((logo, i) => {
              // Calculate position based on index to space evenly
              // Create a grid-like distribution
              const rows = Math.ceil(Math.sqrt(randomLogos.length));
              const cols = Math.ceil(randomLogos.length / rows);

              // Calculate row and column for this logo
              const row = Math.floor(i / cols);
              const col = i % cols;

              // Calculate percentage positions with some small random variation
              const topPercentage =
                (row / (rows - 1)) * 80 + 10 + (Math.random() * 10 - 5);
              const leftPercentage =
                (col / (cols - 1)) * 80 + 10 + (Math.random() * 10 - 5);

              const size = Math.random() * 50 + 30;

              return (
                <LogoBubble
                  key={`logo-${i}`}
                  src={logo}
                  alt={logo}
                  width={size}
                  height={size}
                  position={{
                    top: `${topPercentage}%`,
                    left: `${leftPercentage}%`,
                  }}
                />
              );
            })}
          </div> */
}
