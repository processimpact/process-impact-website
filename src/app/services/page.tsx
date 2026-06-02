import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, HardDrive, ShieldHalf, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Services - Process Impact",
  description: "Expert ICS/OT network penetration testing, device pentesting, purple team exercises, and LOTL security training for critical infrastructure.",
};

const services = [
  {
    title: "ICS/OT Network Penetration Testing",
    description: "Adversary-informed, cyber-physical focused network penetration testing tailored for industrial control systems.",
    icon: Target,
    href: "/services/network-penetration-testing",
  },
  {
    title: "ICS/OT Device Penetration Testing",
    description: "Bench testing of industrial devices and protocols to identify hardware and software vulnerabilities.",
    icon: HardDrive,
    href: "/services/device-penetration-testing",
  },
  {
    title: "ICS/OT Purple Team Exercises",
    description: "Realistic adversary simulation to test and tune your organization's detection and response capabilities.",
    icon: ShieldHalf,
    href: "/services/purple-team-exercises",
  },
  {
    title: "Training",
    description: "Live and hybrid-format offensive security training tuned for safe ICS/OT assessments and focused on modern adversary techniques.",
    icon: GraduationCap,
    href: "/academy",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Specialized offensive security assessments and training for industrial control systems and critical infrastructure.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <service.icon className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              {service.href && (
                <Link
                  href={service.href}
                  className="mt-4 inline-block text-primary hover:underline font-medium"
                >
                  Learn more →
                </Link>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
