"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/validations/waitlist";

export type JoinWaitlistInput = z.infer<typeof waitlistSchema>;

export async function joinWaitlist(values: JoinWaitlistInput) {
  const parsed = waitlistSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: "Invalid input" } as const;
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("launch-waitlist")
    .insert({ email: parsed.data.email, name: parsed.data.name });

  if (error) {
    return { success: false, error: error.message } as const;
  }

  return { success: true } as const;
}


