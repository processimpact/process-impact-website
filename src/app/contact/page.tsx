import { ContactForm } from "@/components/features/ContactForm";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us - Process Impact",
  description: "Get in touch with Process Impact for ICS security consulting and training inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ready to assess your industrial control system security? Let's talk.
        </p>
      </div>

      <ContactForm />

      <div className="mx-auto max-w-2xl mt-12 text-center">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:contact@processimpact.io" className="hover:underline">
              contact@processimpact.io
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">(Available upon request)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
