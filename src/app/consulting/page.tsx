export const metadata = {
  title: "Consulting Services - Process Impact",
  description: "Expert ICS penetration testing, red team operations, and security assessments.",
};

export default function ConsultingPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">Consulting Services</h1>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          Comprehensive ICS offensive security consulting.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-center">
            Content coming soon. We offer specialized penetration testing, red team operations, 
            and security assessments for industrial control systems.
          </p>
        </div>
      </div>
    </div>
  );
}
