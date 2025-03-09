"use client";

import ContactForm from "./contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

const ContactPopup = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let&apos;s Work Together</DialogTitle>
        </DialogHeader>
        <ContactForm setModalOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
