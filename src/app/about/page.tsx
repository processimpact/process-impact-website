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
          We defend critical infrastructure by focusing on what attackers actually target: the industrial process.
        </p>

        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-left">
            Our team defined industry-first ICS/OT penetration testing methodologies and authored world-class courses like{" "}
            <a
              href="https://sans.org/ics613"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              SANS ICS613: ICS/OT Penetration Testing &amp; Assessments
            </a>
            .
          </p>
        </div>

        <div className="mt-8 p-8 bg-brand-bg rounded-lg">
          <p className="text-left">
            We don&apos;t run IT penetration tests in OT environments. Every technique we use is drawn from real-world adversary activity, every target is chosen around the industrial process, and every finding is something an ICS/OT operator can actually act on.
          </p>
          <p className="mt-4 text-left">
            Offense, done right, makes industrial environments safer — and we do it safely.
          </p>
        </div>

        <p className="mt-8 text-lg text-center text-muted-foreground">
          Network and device penetration testing, purple team exercises, and specialized training — built specifically for industrial control systems and critical infrastructure.
        </p>
      </div>
    </div>
  );
}
