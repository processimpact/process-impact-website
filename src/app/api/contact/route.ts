import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { escapeHtml } from "@/lib/escape-html";
import { rateLimit } from "@/lib/rate-limit";

const FALLBACK_EMAIL = "contact@processimpact.io";
const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes, per IP

const GENERIC_ERROR = `Something went wrong. Please try again or email us at ${FALLBACK_EMAIL}.`;

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  if (!rateLimit(clientIp(request), RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json(
      { error: `Too many messages. Please wait a few minutes or email us at ${FALLBACK_EMAIL}.` },
      { status: 429 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured");
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 503 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Message is too long." }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", fields: parsed.error.issues.map((i) => i.path.join(".")) },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot filled: pretend success so bots don't learn to adapt.
  if (data.website) {
    return NextResponse.json({ success: true });
  }

  const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || FALLBACK_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || FALLBACK_EMAIL;

  const fields: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Company", data.company || "Not provided"],
    ["Service interest", data.service],
  ];

  const text = [...fields.map(([k, v]) => `${k}: ${v}`), "", "Message:", data.message].join("\n");
  const html = [
    "<h2>New Contact Form Submission</h2>",
    ...fields.map(([k, v]) => `<p><strong>${k}:</strong> ${escapeHtml(v)}</p>`),
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Process Impact <${from}>`,
      to,
      replyTo: data.email,
      // Strip CR/LF so user input can't affect the subject line.
      subject: `New Contact Form Submission - ${data.service}`.replace(/[\r\n]/g, " "),
      text,
      html,
    });

    if (error) {
      console.error("Contact form: Resend error", error.name, error.message);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form: unexpected error", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
