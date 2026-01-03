import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, FileSearch, HardDrive, ShieldHalf } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      title: "ICS/OT Network Penetration Testing",
      description: "Adversary-informed, process-centric network penetration testing tailored for industrial control systems.",
      icon: Target,
    },
    {
      title: "ICS/OT Device Penetration Testing",
      description: "Bench testing of industrial devices and protocols to identify hardware and software vulnerabilities.",
      icon: HardDrive,
    },
    {
      title: "ICS/OT Purple Team Exercises",
      description: "Realistic adversary simulation to test and tune your organization's detection and response capabilities.",
      icon: ShieldHalf,
    },
  ];

  return (
    <section className="container py-24 bg-brand-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Consulting Services</h2>
        <p className="mt-4 text-muted-foreground">
          Specialized offensive security assessments for industrial control systems and critical infrastructure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <service.icon className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/consulting"
          className="text-primary hover:underline font-medium"
        >
          View all services →
        </Link>
      </div>
    </section>
  );
}
