import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key_for_build");

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(["consulting", "training", "both", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    // Log environment variable status for debugging
    console.log("Environment check:", {
      hasResendKey: !!process.env.RESEND_API_KEY,
      contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    });

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "dummy_key_for_build") {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          error: "Email service is not configured. Please contact us directly at twebb@processimpact.io",
          details: "RESEND_API_KEY environment variable is missing or invalid"
        },
        { status: 503 }
      );
    }

    // Validate contact email is configured
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "twebb@processimpact.io";

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Process Impact <twebb@processimpact.io>",
      to: contactEmail,
      subject: `New Contact Form Submission - ${validatedData.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${validatedData.service}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", {
        message: error.message,
        name: error.name,
        error: error
      });
      return NextResponse.json(
        {
          error: "Failed to send email. Please try again or contact us directly at twebb@processimpact.io",
          details: error.message || "Unknown error from email service"
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Internal server error",
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
