import { z } from "zod";

export const waitlistSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email({ message: "Please enter a valid email address" }),
    name: z.string().min(1, { message: "Please enter your name" }),
});
