import Link from "next/link";
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
          Ready to assess your industrial control system security, or train your team? Let's talk.
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

      <div className="mx-auto max-w-2xl mt-16">
        <div className="p-8 bg-brand-bg rounded-lg text-center">
          <h2 className="text-2xl font-bold">Looking to train your team?</h2>
          <p className="mt-3 text-muted-foreground">
            Our live and hybrid-format offensive security training builds the skills to run safe, effective ICS/OT assessments. Select &quot;Training&quot; in the form above, or learn more about the program.
          </p>
          <Link
            href="/academy"
            className="mt-4 inline-flex items-center font-medium text-primary hover:underline"
          >
            Explore our training
          </Link>
        </div>
      </div>
    </div>
  );
}
