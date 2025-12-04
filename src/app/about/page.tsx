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
          Specialized ICS offensive security expertise.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-center">
            Content coming soon. Learn about our team, mission, and approach 
            to industrial control systems security.
          </p>
        </div>
      </div>
    </div>
  );
}
