export const metadata = {
  title: "Training Academy - Process Impact",
  description: "LOTL security training courses for offensive security professionals.",
};

export default function AcademyPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">Training Academy</h1>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          Professional security training in Living off the Land techniques.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-center">
            Content coming soon. Our LOTL training program will provide hands-on experience 
            with advanced offensive security techniques.
          </p>
        </div>
      </div>
    </div>
  );
}
