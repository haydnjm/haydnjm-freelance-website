import { StaticImageData } from "next/image";

import chrisWhiteheadImage from "@/components/testimonials/images/chris.png";
import mattDeYoungImage from "@/components/testimonials/images/matt.png";
import jamesBroadImage from "@/components/testimonials/images/james.png";
import timoSpringerImage from "@/components/testimonials/images/timo.png";
import leoVanBeekImage from "@/components/testimonials/images/leo.jpeg";
import { ReactNode } from "react";

export type Testimonial = {
  name: string;
  title: string;
  profilePicture: StaticImageData;
  company: string;
  location: string;
  testimonial: ReactNode;
};

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-secondary text-secondary-foreground rounded-sm px-1">
      {children}
    </span>
  );
};

export const chrisWhitehead: Testimonial = {
  name: "Chris Whitehead",
  title: "Coach, business mentor, podcaster",
  profilePicture: chrisWhiteheadImage,
  company: "Damflask Consulting",
  location: "Sheffield, UK",
  testimonial: (
    <span>
      Haydn has been an excellent business partner. Not only is his technical
      knowledge excellent, but{" "}
      <Highlight>
        he is approachable and personable with a wider appreciation of business.
      </Highlight>{" "}
      This means that he is able to understand the context of a project and the
      need for coordination with other members of a team.
    </span>
  ),
};

export const mattDeYoung: Testimonial = {
  name: "Matt de Young",
  title: "Engineering Manager",
  profilePicture: mattDeYoungImage,
  company: "ivy GmbH",
  location: "Munich, Germany",
  testimonial: (
    <span>
      Haydn{" "}
      <Highlight>
        consistently delivered clean code & well designed applications
      </Highlight>{" "}
      that prioritized user experience while maintaining performance. His
      thoughtful consideration and technical knowledge allowed him to build
      applications that{" "}
      <Highlight>
        received positive feedback from both clients and internal stakeholders.
      </Highlight>
    </span>
  ),
};

export const james: Testimonial = {
  name: "James Broad",
  title: "Associate Director, TV personality",
  profilePicture: jamesBroadImage,
  company: "Whittaker & Biggs Auction Room",
  location: "Manchester, UK",
  testimonial: (
    <span>
      Working with Haydn on my website has been an exceptional experience. His
      creativity, attention to detail, and technical expertise transformed my
      vision into a visually stunning and user-friendly platform.{" "}
      <Highlight>
        The project significantly enhanced my online presence and engagement
      </Highlight>
      . Haydn&apos;s professionalism and dedication have made our collaborations
      enjoyable and productive, and I appreciate his ability to bring fresh
      ideas to each project.{" "}
      <Highlight>
        Having worked together multiple times, I can confidently recommend him
        to anyone seeking top-notch web design and build services!
      </Highlight>
    </span>
  ),
};

export const timoSpringer: Testimonial = {
  name: "Timo Springer",
  title: "Co-Founder & CPO",
  profilePicture: timoSpringerImage,
  company: "DECAID Studio",
  location: "Amsterdam, Netherlands",
  testimonial: (
    <span>
      Working with Haydn was a game-changer for DECAID. As a developer, he
      didn&apos;t just write code – he truly understood our vision and
      transformed abstract ideas into a functional product.{" "}
      <Highlight>
        His technical expertise and proactive approach were instrumental in our
        product development process.
      </Highlight>{" "}
      Haydn wasn&apos;t just a freelancer but a valuable partner who
      consistently went above and beyond. I would work with him again in a
      heartbeat.
    </span>
  ),
};

export const leoVanBeek: Testimonial = {
  name: "Leo van Beek",
  title: "Head of Product",
  profilePicture: leoVanBeekImage,
  company: "Energiebespaarders",
  location: "Amsterdam, Netherlands",
  testimonial: (
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </span>
  ),
};

export const testimonials: Testimonial[] = [
  james,
  timoSpringer,
  mattDeYoung,
  chrisWhitehead,
  // leoVanBeek,
];
