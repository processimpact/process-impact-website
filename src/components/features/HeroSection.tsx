import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/Process_Impact_Logo_Embedded_Clear_BG.svg"
            alt="Process Impact"
            width={400}
            height={200}
            className="h-24 w-auto md:h-32"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          ICS/OT Offensive Security & Training
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Expert penetration testing and red team operations for industrial control systems and critical infrastructure, 
          plus cutting-edge live and hybrid-format offensive security training focused on modern ICS adversary techniques.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <Link href="/services">
              Consulting Services
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/academy">Training Academy</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
