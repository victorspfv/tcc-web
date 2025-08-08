"use server";

import nodemailer from "nodemailer";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";

export async function sendContactEmail(values: ContactFormValues) {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Invalid input" } as const;
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    return { success: false, error: "Email is not configured" } as const;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const fromAddress = CONTACT_FROM || SMTP_USER;

  const { name, email, subject, message } = parsed.data;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject: `[Contact Form] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err: unknown) {
    const error = err as Error;
    return { success: false, error: error.message } as const;
  }

  return { success: true } as const;
}


