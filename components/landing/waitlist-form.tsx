"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { waitlistSchema } from "@/lib/validations/waitlist";
import { joinWaitlist } from "@/app/actions/waitlist";

type FormValues = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      name: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: FormValues) {
    setServerError(null);
    setIsSubmitting(true);
    try {
      const result = await joinWaitlist(values);
      if (!result.success) {
        setServerError(result.error ?? "Something went wrong");
        return;
      }
      form.reset();
      setOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out mt-6 py-2 h-12 rounded-2xl px-8 font-bold text-lg">
          Join the waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-pacifico">Join the waitlist</DialogTitle>
          <DialogDescription>
            We&apos;re building something amazing. Stay tuned for updates. We&apos;ll send you an email when we&apos;re ready to launch.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4" noValidate>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-3">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="e.g. johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid gap-3">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="e.g. Mary Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {serverError ? (
              <p className="text-destructive text-sm" role="alert">{serverError}</p>
            ) : null}

            <DialogFooter className="mt-2">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="rounded-xl" disabled={isSubmitting}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="font-bold rounded-xl" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join the waitlist"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
