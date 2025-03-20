import Image from "next/image";
import { Testimonial } from "./data";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mx-4 sm:mx-8 p-8 sm:p-16 min-w-96 md:min-w-[500px] max-w-[350px] sm:max-w-2xl bg-accent-foreground rounded-lg text-background shadow-[0_35px_40px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-300 flex flex-col gap-4">
      <div className="flex justify-between items-end">
        <Quote className="w-10 h-10 text-secondary" />
        <Image
          src={testimonial.profilePicture}
          alt={testimonial.name}
          width={100}
          height={100}
          className="rounded-bl-full"
        />
      </div>
      <p className="text:sm ">{testimonial.testimonial}</p>
      <div>
        <h4 className="text-lg font-bold">{testimonial.name}</h4>
        <p className="text-sm text-muted-foreground">
          {testimonial.title} | {testimonial.company}
        </p>
        <p>{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
