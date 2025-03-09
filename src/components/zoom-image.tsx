import Image, { StaticImageData } from "next/image";

const ZoomImage = ({
  src,
  alt,
  className,
  caption,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  caption?: string;
}) => {
  return (
    <div>
      <a href={src.src} target="_blank" className="cursor-zoom-in">
        <Image src={src} alt={alt} className={className || "w-full"} />
      </a>
      {caption && <p className="text-sm text-gray-500">{caption}</p>}
    </div>
  );
};

export default ZoomImage;
