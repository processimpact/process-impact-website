import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Target, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "ICS/OT Network Penetration Testing - Process Impact",
  description: "Adversary-informed, cyber-physical focused network penetration testing tailored for industrial control systems and critical infrastructure.",
};

export default function NetworkPenetrationTestingPage() {
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

        <Target className="mt-8 h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold">ICS/OT Network Penetration Testing</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Adversary-informed, cyber-physical focused network penetration testing tailored for industrial control systems and critical infrastructure.
        </p>

        <div className="mt-10 space-y-4 text-left">
          <p>
            We evaluate your environment the way a real adversary would, working from initial access toward impact on the industrial process. Every technique is drawn from observed adversary activity, and every target is selected for its relevance to operations, not just its presence on the network.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold">What we assess</h2>
        <ul className="mt-4 space-y-3 text-left">
          <li>IT/OT boundary and segmentation controls across the Purdue model.</li>
          <li>Routable and non-routable paths to control system networks.</li>
          <li>Industrial protocols, engineering workstations, and control system assets.</li>
          <li>Detection and response coverage along the attack path.</li>
        </ul>

        <div className="mt-12 p-8 bg-brand-bg rounded-lg text-center">
          <h3 className="text-xl font-bold">Ready to scope an assessment?</h3>
          <p className="mt-3 text-muted-foreground">
            Tell us about your environment and we will tailor an engagement to your operations.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
