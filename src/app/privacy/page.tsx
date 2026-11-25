import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Process Impact",
  description: "How Process Impact LLC collects, uses, and protects personal information submitted through processimpact.io.",
};

const CONTACT_EMAIL = "contact@processimpact.io";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6">{children}</ul>;
}

function EmailLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-primary hover:underline">
      {CONTACT_EMAIL}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="container py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-muted-foreground">
          <strong className="text-foreground">Process Impact LLC</strong>
          <br />
          <strong className="text-foreground">Effective date:</strong> December 1, 2026
        </p>

        <p className="mt-8">
          This policy explains what personal information Process Impact LLC (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects
          through processimpact.io (the &ldquo;site&rdquo;), how we use it, and your choices.
        </p>

        <Section title="Information we collect">
          <p>
            <strong>Information you give us.</strong> When you use our contact form, we collect:
          </p>
          <List>
            <li>Name and email address (required)</li>
            <li>Phone number and company name (optional)</li>
            <li>The service you&apos;re interested in and your message</li>
          </List>
          <p>
            <strong>Information collected automatically.</strong> Like most websites, our hosting provider receives
            technical information when you visit, such as your IP address, browser type, the page requested, and the
            time of the request. We also use your IP address briefly to limit repeated form submissions and block spam.
          </p>
          <p>We do not use analytics, advertising, or tracking cookies, and the site does not set cookies.</p>
        </Section>

        <Section title="How we use it">
          <p>We use your information only to:</p>
          <List>
            <li>Respond to your inquiry and discuss our services with you</li>
            <li>Operate, secure, and protect the site against abuse</li>
          </List>
          <p>We do not sell or rent your personal information, and we do not use it for advertising.</p>
        </Section>

        <Section title="Who we share it with">
          <p>
            We share information only with service providers that help us run the site, and only as needed for that
            purpose:
          </p>
          <List>
            <li>
              <strong>Vercel</strong>, which hosts the site
            </li>
            <li>
              <strong>Resend</strong>, which delivers contact form submissions to our inbox
            </li>
          </List>
          <p>We may also disclose information if required by law or to protect our rights or the safety of others.</p>
        </Section>

        <Section title="Tracking across other sites">
          <p>
            We do not track you across other websites, and we do not allow third parties to collect information about
            your online activities over time and across different websites through our site. Because we do no such
            tracking, the site does not change its behavior in response to browser &ldquo;Do Not Track&rdquo; signals.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep contact form messages for as long as needed to respond to you and for our ordinary business records,
            up to 2 years, then delete them. Hosting logs are kept according to our hosting provider&apos;s standard
            retention.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            You can ask us to see, correct, or delete the personal information you sent us by emailing <EmailLink />. We
            will respond within a reasonable time.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use reasonable measures to protect your information, including encrypted (HTTPS) connections. No method
            of transmission or storage is completely secure.
          </p>
        </Section>

        <Section title="Children">
          <p>
            This site is intended for businesses and professionals. It is not directed to children under 13, and we do
            not knowingly collect their personal information. If you believe a child has sent us information, contact us
            and we will delete it.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>If we make material changes, we will update this page and the effective date above.</p>
        </Section>

        <Section title="Contact">
          <p>
            Process Impact LLC
            <br />
            Email: <EmailLink />
          </p>
        </Section>
      </article>
    </div>
  );
}
