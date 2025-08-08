import { z } from "zod";

export const waitlistSchema = z.object({
    email: z.email("Please enter a valid email address").trim().toLowerCase(),
    name: z.string().min(1, "Please enter your name"),
});
