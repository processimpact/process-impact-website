import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HardDrive, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "ICS/OT Device Penetration Testing - Process Impact",
  description: "Bench testing of industrial devices and protocols to identify hardware, firmware, and software vulnerabilities in ICS/OT equipment.",
};

export default function DevicePenetrationTestingPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/services"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          All Services
        </Link>

        <HardDrive className="mt-8 h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold">ICS/OT Device Penetration Testing</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Bench testing of industrial devices and protocols to identify hardware and software vulnerabilities.
        </p>

        <div className="mt-10 space-y-4 text-left">
          <p>
            We examine the embedded devices that run your process, from PLCs and RTUs to IEDs and gateways. Working in a controlled bench environment, we uncover weaknesses in hardware, firmware, and protocol implementations before an attacker can reach them in production.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold">What we assess</h2>
        <ul className="mt-4 space-y-3 text-left">
          <li>Firmware extraction, analysis, and reverse engineering.</li>
          <li>Hardware interfaces, debug ports, and physical attack surface.</li>
          <li>Proprietary and standard industrial protocol implementations.</li>
          <li>Authentication, update mechanisms, and configuration handling.</li>
        </ul>

        <div className="mt-12 p-8 bg-brand-bg rounded-lg text-center">
          <h3 className="text-xl font-bold">Ready to scope an assessment?</h3>
          <p className="mt-3 text-muted-foreground">
            Tell us about the devices in scope and we will tailor an engagement to your equipment.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
