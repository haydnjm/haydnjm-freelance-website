import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { EMAIL, GITHUB, LINKEDIN } from "@/constants";
import elt from "@/images/elt-min.jpg";
import filmCam from "@/images/film-cam-min.jpg";
import logo from "@/images/logo.png";
import metadata from "@/images/metadata-min.jpg";
import securityCam from "@/images/security-cam-min.jpg";
import smartLock from "@/images/smart-lock-min.jpg";
import solarPanels from "@/images/solar-panels-min.jpg";
import splash from "@/images/splash-faded.png";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="Haydn Morris" width={32} height={32} />
              <span className="inline-block font-bold">Haydn Morris</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              href="#contact"
              className="md:hidden flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-2"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </Link>
            <Link href={GITHUB} target="_blank" rel="noreferrer">
              <div className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={LINKEDIN} target="_blank" rel="noreferrer">
              <div className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="p-container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Turning Ideas Into Digital Reality
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I&apos;m a freelance software engineer based in Amsterdam. I
                  specialise in bridging the gap between product vision and
                  technical execution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button size="lg" className="md:w-full">
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
              <div className="relative h-[225px] w-[225px] sm:h-[350px] sm:w-[350px] rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
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
        </section>

        <section
          id="about"
          className="p-container py-12 md:py-24 lg:py-32 relative overflow-hidden "
        >
          <div className="flex flex-col items-center justify-center gap-4 mx-auto p-6 rounded-lg max-w-[58rem] text-center relative z-10 backdrop-blur-[8px] backdrop-filter">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I am an engineer and passionate product manager with more than
              eight years of experience building a wide range of digital
              products. I believe that truly effective technology comes from
              understanding both the business and the user. With this approach,
              I create digital solutions that deliver real value and lasting
              impact.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="p-container py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of the projects I&apos;ve worked on. Each project
              represents my commitment to quality, attention to detail, and
              passion for creating exceptional digital experiences.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
            <ProjectCard
              title="Business intelligence"
              description="Built an end-to-end business intelligence stack enabling data driven decision making"
              tags={["dbt", "Fivetran", "BigQuery", "Tableau"]}
              image={elt}
            />
            <ProjectCard
              title="Security on the edge"
              description="Deployed a fleet of Nvidia Jetson computers for ML-on-the-edge security camera monitoring"
              tags={["Python", "Deepstream", "AWS Greengrass", "Docker"]}
              image={securityCam}
            />
            <ProjectCard
              title="Planning back-office"
              description="Built a back-office planning application for installers of energy-saving products, reducing planning time and process complexity"
              tags={["Typescript", "Next.js", "GraphQL", "MongoDB"]}
              image={solarPanels}
            />
            <ProjectCard
              title="NFC locking PoC"
              description="Conducted a technical research project into the feasibility of incorporating additional NFC-based hardware products into a company's offering"
              tags={[]}
              image={smartLock}
            />
            <ProjectCard
              title="Metadata ingestion microservice"
              description="Built a high-availability metadata ingestion service to high volumes of MQTT messages"
              tags={["Go", "MQTT", "Pubsub", "Grafana"]}
              image={metadata}
            />
            <ProjectCard
              title="Media outreach website"
              description="Personal branding website for a celebrity antiques dealer based in the UK"
              tags={["Typescript", "Astro", "Tailwind", "Vercel"]}
              image={filmCam}
            />
          </div>
        </section>

        <section id="contact" className="p-container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-[58rem] gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
                Let&apos;s Work Together
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Have a project in mind? I&apos;d love to hear about it. Fill out
                the form and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{EMAIL}</span>
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
                      href="https://linkedin.com"
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
      <footer className="border-t py-6 md:py-0 px-container">
        <div className="flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Haydn Morris. All rights reserved.
          </p>
          <p>+31 6 40 46 66 45 | hello@haydnjm.com | KvK: 96610755</p>
          {/* <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </nav> */}
        </div>
      </footer>
    </div>
  );
}
