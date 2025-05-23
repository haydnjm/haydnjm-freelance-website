import "@/app/globals.css";
import { ArrowRight, CheckIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import ContactDialog from "../contact-dialog";
import { Button } from "../ui/button";

const OfferingBlock = ({
  title,
  subtitle,
  description,
  services,
  icon,
  buttonText,
}: {
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  icon: StaticImageData;
  buttonText?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h2 className="flex-1 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h2>
        <Image src={icon} alt={title} className="h-10 sm:h-16 md:h-20 flex-0" />
      </div>
      <h3 className="text-lg font-bold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
        {subtitle}
      </h3>
      <div className="flex gap-4 my-4 justify-center flex-col md:flex-row">
        <div className="flex-1">
          <p>{description}</p>
          {buttonText && (
            <ContactDialog title={buttonText}>
              <Button
                variant="link"
                className="text-lg text-secondary m-0 p-0 my-4 underline"
              >
                <span className="flex items-center">
                  {buttonText} <ArrowRight className="w-4 h-4 inline ml-2" />
                </span>
              </Button>
            </ContactDialog>
          )}
        </div>
        <div className="flex-1">
          <ul className="text-sm">
            {services.map((service) => (
              <li
                className="flex items-center m-2 p-2 bg-background text-foreground rounded-md hover:scale-103 transition-all duration-300 hover:bg-muted"
                key={service}
              >
                <CheckIcon className="w-4 h-4 mr-2" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferingBlock;
