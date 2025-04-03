import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { EMAIL, LINKEDIN } from "@/constants";

import splash from "@/images/splash-faded.png";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "../components/marquee";
import Offering from "../components/offering";
import PlayIndicator from "../components/play-indicator";
import { testimonials } from "../components/testimonials/testimonials-data";
import TestimonialCard from "../components/testimonials/testimonial-card";
import Journey from "../components/process";
import Ticker from "../components/offering/ticker";

export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <section id="hero" className="p-container pt-24 pb-6 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-bold text-5xl lg:text-6xl tracking-tight">
                  Turning Ideas Into Digital Reality
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  I&apos;m a freelance software engineer based in Amsterdam. I
                  specialise in bridging the gap between product vision and
                  technical execution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button variant="secondary" size="lg" className="md:w-full">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://materials.haydnjm.com/Haydn%20Morris%20-%20Freelance%20software%20engineer.pdf"
                  download
                >
                  <Button
                    data-umami-event="CV download"
                    variant="outline"
                    size="lg"
                  >
                    <Download className="h-4 w-4" /> Download my CV
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[225px] w-[225px] sm:h-[350px] sm:w-[350px] rounded-full bg-secondary p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] overflow-hidden rounded-full bg-muted">
                    <Image
                      src={splash}
                      alt="Developer portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 max-w-5xl mx-auto">
            <Ticker />
          </div>
        </section>

        {/* <section
          id="ticker"
          className="p-container pt-24 pb-6 md:py-32 max-w-5xl mx-auto"
        ></section> */}

        <section
          id="about"
          className="p-container md:py-24 lg:py-32 relative overflow-hidden"
        >
          <div className="max-w-5xl flex flex-col items-center justify-center gap-4 mx-auto p-0 sm:p-6 text-center relative z-10">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl tracking-tight">
              About Me
            </h2>
            <p className="w-full md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-left sm:text-center">
              I am a full-stack engineer and passionate product manager with
              more than eight years of experience building a wide range of
              digital products. I believe that truly effective digital solutions
              come from understanding the business and the user as much as from
              understanding technology. With this approach, I create digital
              solutions that deliver real value and lasting impact.
            </p>
          </div>
        </section>

        <section
          id="offering"
          className="bg-primary text-primary-foreground p-container py-12 md:py-24 lg:py-32"
        >
          <div className="max-w-5xl mx-auto">
            <Offering />
          </div>
        </section>

        <section id="testimonials" className="pt-36">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-center mb-8 px-2 tracking-tight">
            What people say about my work
          </h2>
          <div className="flex justify-center sm:hidden">
            <ArrowLeft className="text-secondary w-10 h-10" />
          </div>
          <div className="hidden md:block relative">
            <Marquee id="marquee" speed="normal" direction="left" gap={8}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex items-end justify-center pb-20"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Marquee>
            <PlayIndicator id="marquee" />
          </div>
          <div className="block md:hidden">
            <div
              className="overflow-x-auto [&::-webkit-scrollbar]:h-10 [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-track]:bg-transparent scroll"
              style={{ scrollbarColor: "var(--secondary) transparent" }}
            >
              <div className="w-full min-w-max">
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="flex items-end justify-center pb-20"
                    >
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="case-studies"
          className="p-container py-12 md:py-24 lg:py-32 block md:hidden"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Case Studies
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore detailed examples of my recent projects and the impact
              they&apos;ve made.
            </p>
            <div className="flex justify-center">
              <Link href="/case-studies">
                <Button size={"lg"}>View Case Studies</Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="process" className="p-container py-12 md:py-24 lg:py-32">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-center mb-8 px-2 tracking-tight">
            The Process
          </h2>
          <Journey />
        </section>

        <section id="contact" className="p-container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Have a project in mind? I&apos;d love to hear about it. Fill out
                the form and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href={LINKEDIN}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
