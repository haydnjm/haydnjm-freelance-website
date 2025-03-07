import ContactForm from "./contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const ContactPopup = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let&apos;s Work Together</DialogTitle>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
