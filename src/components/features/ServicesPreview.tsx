import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, FileSearch } from "lucide-react";

export function ServicesPreview() {
  const services = [
    {
      title: "ICS Penetration Testing",
      description: "Comprehensive security assessments of industrial control systems and SCADA environments.",
      icon: Shield,
    },
    {
      title: "Red Team Operations",
      description: "Realistic adversary simulation to test your organization's detection and response capabilities.",
      icon: Target,
    },
    {
      title: "Security Assessments",
      description: "In-depth evaluation of your ICS security posture and compliance requirements.",
      icon: FileSearch,
    },
  ];

  return (
    <section className="container py-24 bg-brand-bg/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Consulting Services</h2>
        <p className="mt-4 text-muted-foreground">
          Specialized offensive security for critical infrastructure
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
