import ContactForm from "@/components/contact-form";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { EMAIL } from "@/constants";
import elt from "@/images/elt-min.jpg";
import james from "@/images/james.png";
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
    <div>
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
          <div className="max-w-5xl flex flex-col items-center justify-center gap-4 mx-auto p-6 text-center relative z-10">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              About Me
            </h2>
            <p className="w-full md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Each project represents my commitment to quality, attention to
              detail, and passion for creating exceptional digital experiences.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
            <ProjectCard
              title="Business intelligence platform"
              description="Built an end-to-end business intelligence stack enabling data driven decision making"
              tags={["dbt", "Fivetran", "BigQuery", "Tableau"]}
              image={elt}
              link="/case-studies/bi-stack"
            />
            <ProjectCard
              title="AI on the Edge"
              description="Deployed a fleet of devices for ML-on-the-edge security camera monitoring"
              tags={["Python", "Deepstream", "AWS Greengrass", "Docker"]}
              image={securityCam}
              link="/case-studies/ai-on-the-edge"
            />
            <ProjectCard
              title="Installation planning app"
              description="Built a back-office planning application for installation teams, reducing planning time and process complexity"
              tags={["Typescript", "Next.js", "GraphQL", "MongoDB"]}
              image={solarPanels}
              link="/case-studies/planning-environment"
            />
            <ProjectCard
              title="NFC locking PoC"
              description="Conducted a technical research project into the feasibility of incorporating additional NFC-based hardware products into a company's offering"
              tags={[]}
              image={smartLock}
              link="/case-studies/nfc-lock-poc"
            />
            <ProjectCard
              title="Metadata ingestion service"
              description="Built a high-availability metadata ingestion service to process high volumes of MQTT messages"
              tags={["Go", "MQTT", "Pubsub", "Grafana"]}
              image={metadata}
              link="/case-studies/metadata-ingestion-service"
            />
            <ProjectCard
              title="Media outreach website"
              description="Created a personal branding website for a celebrity antiques dealer based in the UK"
              tags={["Typescript", "Astro", "Tailwind", "Vercel"]}
              image={james}
              link="/case-studies/james-broad-media"
            />
          </div>
        </section>

        <section id="contact" className="p-container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
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
    </div>
  );
}
