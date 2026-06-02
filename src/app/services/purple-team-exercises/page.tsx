import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldHalf, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "ICS/OT Purple Team Exercises - Process Impact",
  description: "Realistic adversary simulation to test and tune your organization's ICS/OT detection and response capabilities.",
};

export default function PurpleTeamExercisesPage() {
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

        <ShieldHalf className="mt-8 h-12 w-12 text-primary" />
        <h1 className="mt-4 text-4xl font-bold">ICS/OT Purple Team Exercises</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Realistic adversary simulation to test and tune your organization&apos;s detection and response capabilities.
        </p>

        <div className="mt-10 space-y-4 text-left">
          <p>
            We bring offense and defense together in the same room. By emulating real ICS/OT adversary behaviors alongside your defenders, we validate what your detections actually catch and tune them in real time, turning a point-in-time test into measurable improvement.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold">What we exercise</h2>
        <ul className="mt-4 space-y-3 text-left">
          <li>Adversary behaviors mapped to the ICS ATT&amp;CK framework.</li>
          <li>Detection coverage across IT and OT boundaries.</li>
          <li>Alerting, triage, and response workflows under realistic conditions.</li>
          <li>Collaborative tuning of detections during the engagement.</li>
        </ul>

        <div className="mt-12 p-8 bg-brand-bg rounded-lg text-center">
          <h3 className="text-xl font-bold">Ready to scope an exercise?</h3>
          <p className="mt-3 text-muted-foreground">
            Tell us about your detection goals and we will design an exercise around them.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
