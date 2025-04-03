import ContactDialog from "./contact-dialog";
import { Button } from "./ui/button";

const ContactBanner = () => {
  return (
    <ContactDialog>
      <div className="p-5 w-full rounded-md bg-secondary text-secondary-foreground text-center">
        <p>
          Do you have a similar project in mind?
          <Button variant="outline" className="ml-2 text-foreground">
            Let&apos;s work together!
          </Button>
        </p>
      </div>
    </ContactDialog>
  );
};

export default ContactBanner;
