"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import ContactEmail from "@/components/widgets/ContactEmail";

/* ------------------ Email client ------------------ */

const resend = new Resend(process.env.RESEND_API_KEY);

/* ------------------ Rate limiter ------------------ */

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
});

/* ------------------ Schema ------------------ */

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(20),
});

/* ------------------ Server Action ------------------ */

export async function submitContactForm(formData: unknown) {
  // Honeypot spam check
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((formData as any).company) {
    return { success: false };
  }

  /* ---- Validate input ---- */
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return { success: false, error: "Invalid input." };
  }

  /* ---- Get IP (FIXED) ---- */
  const headersList = await headers();

  const ip =
    headersList.get("x-forwarded-for") ??
    headersList.get("x-real-ip") ??
    "anonymous";

  /* ---- Rate limit ---- */
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return {
      success: false,
      error: "Too many requests. Please try again later.",
    };
  }

  const { name, email, message } = parsed.data;

  /* ---- Send email ---- */
  try {
    await resend.emails.send({
      from: "Contact Form <portfolio@frompaandassociates.com>",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New contact message from ${name}`,
      react: ContactEmail({
        name,
        email,
        message,
      }),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to send message. Please try again.",
    };
  }
}
