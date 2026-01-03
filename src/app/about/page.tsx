export const metadata = {
  title: "About - Process Impact",
  description: "Learn about Process Impact's mission and team.",
};

export default function AboutPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">About Process Impact</h1>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          We defend against real adversaries by focusing on what matters: the industrial process.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-left">
            At Process Impact, we believe that offensive security assessments are essential for protecting industrial control systems and critical infrastructure, and that offense can be done safely and effectively to protect ICS/OT environments.
            Our team of experts is dedicated to providing top-tier network and device penetration testing, purple team exercises, and specialized training to help organizations identify and mitigate vulnerabilities in their ICS/OT environments.
            We don't perform IT pentests in OT environments; we select our techniques from real world adversary activities, we focus our assessment targets on the industrical process, and we ensure that our outcomes are relevant, valuable, and actionable for ICS/OT operators. 
          </p>
        </div>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          We are experts in the field.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-left">
            Our team has defined industry-first ICS/OT penetration testing methodologies and authored world-class ICS/OT offensive security classes such as SANS ICS613: ICS/OT Penetration Testing & Assessments.
          </p>
        </div>
      </div>
    </div>
  );
}
