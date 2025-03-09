import ContactPopup from "./contact-popup";
import { Button } from "./ui/button";

const ContactBanner = () => {
  return (
    <ContactPopup>
      <div className="p-5 w-full rounded-md bg-primary text-primary-foreground text-center">
        <p>
          Do you have a similar project in mind?
          <Button variant="outline" className="ml-2 text-foreground">
            Let&apos;s work together!
          </Button>
        </p>
      </div>
    </ContactPopup>
  );
};

export default ContactBanner;
