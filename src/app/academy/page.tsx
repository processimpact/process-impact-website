export const metadata = {
  title: "Process Impact Academy - Process Impact",
  description: "LOTL security training courses for offensive security professionals.",
};

export default function AcademyPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">Process Impact Academy</h1>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          <b>Adversarial eXecution Operations: Living Off The Land (AXOLOTL).</b>
          <br />Live and hybrid-format offensive security training tuned for safe industrial control systems assessments and focused on modern ICS adversary techniques.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-center">
            Course content coming soon. Our LOTL-focused training program will provide students hands-on experience 
            with advanced offensive security techniques and the skills and knowledge to perform safe, effective, and valuable ICS/OT penetration tests and assessments.
          </p>
        </div>
      </div>
    </div>
  );
}
