import { z } from "zod";

export const SERVICE_OPTIONS = ["consulting", "training", "both", "other"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(254, "Email is too long"),
  phone: z.string().trim().max(40, "Phone number is too long").optional(),
  company: z.string().trim().max(120, "Company name is too long").optional(),
  service: z.enum(SERVICE_OPTIONS),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5,000 characters or fewer"),
  // Honeypot: hidden from people, bots tend to fill it. The API route treats any
  // value as spam and silently drops it, so it is not rejected here.
  website: z.string().max(500).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
