import ProjectCard from "@/components/project-card";
import graphs from "@/images/shoot_graphs_min.jpg";
import james from "@/images/james.png";
import metadata from "@/images/metadata-min.jpg";
import securityCam from "@/images/security-cam-min.jpg";
import smartLock from "@/images/smart-lock-min.jpg";
import solarPanels from "@/images/solar-panels-min.jpg";
import ContactDialog from "../../components/contact-dialog";
import desk from "@/app/case-studies/(posts)/technical-appraisal/desk.jpg";
import bioinformatics from "@/app/case-studies/(posts)/bioinformatics-platform/map.png";
import { Button } from "../../components/ui/button";

const CaseStudiesPage = () => {
  return (
    <div className="bg-gradient-to-tl from-secondary/20 via-background/60 to-background">
      <section
        id="case-studies"
        className="p-container py-12 md:py-24 lg:py-32"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Case Studies
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Each project represents my commitment to quality, attention to
            detail, and passion for creating exceptional digital experiences.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
          <ProjectCard
            title="Bioinformatics Platform"
            description="End-to-end refactor of bioinformatics analysis platform"
            tags={["Typescript", "Postgres", "Next.js"]}
            image={bioinformatics}
            link="/case-studies/bioinformatics-platform"
          />
          <ProjectCard
            title="Software Project Audit & Remediation Plan"
            description="Provided an audit that my client could use to assess the damages incurred by underdelivered software"
            tags={[]}
            image={desk}
            link="/case-studies/technical-appraisal"
          />
          <ProjectCard
            title="Business intelligence platform"
            description="Built an end-to-end business intelligence stack enabling data driven decision making"
            tags={["dbt", "Fivetran", "BigQuery", "Tableau"]}
            image={graphs}
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

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Does it sound like there&apos;s something I can help with?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Schedule a free introductory call to discuss your project.
          </p>
          <div className="mt-4">
            <ContactDialog>
              <Button size="lg">Get in contact</Button>
            </ContactDialog>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
