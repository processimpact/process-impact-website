export const metadata = {
  title: "Blog - Process Impact",
  description: "Insights on ICS security, offensive techniques, and industry trends.",
};

export default function BlogPage() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <p className="mt-6 text-lg text-center text-muted-foreground">
          Insights on ICS security and offensive techniques.
        </p>
        <div className="mt-12 p-8 bg-brand-bg rounded-lg">
          <p className="text-center">
            Content coming soon. Stay tuned for articles on ICS security, 
            LOTL techniques, and industry threat intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
