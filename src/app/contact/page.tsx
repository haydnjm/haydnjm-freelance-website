import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "../../components/contact-form";
import { EMAIL, LINKEDIN } from "../../constants";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-br from-secondary/20 via-background/60 to-background">
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
    </div>
  );
};

export default ContactPage;
