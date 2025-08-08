"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = React.useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: ContactFormValues) {
    setServerError(null);
    setServerSuccess(null);
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(values);
      if (!result.success) {
        setServerError(result.error ?? "Something went wrong");
        return;
      }
      setServerSuccess("Your message has been sent. We will get back to you soon.");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="border-1 border-black focus:border-ppink"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Your email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="e.g. emely@gmail.com"
                    className="border-1 border-black focus:border-ppink"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject of your message"
                  className="border-1 border-black focus:border-ppink"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] border-1 border-black focus:border-ppink"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {serverError ? (
          <p className="text-destructive text-sm" role="alert">{serverError}</p>
        ) : null}
        {serverSuccess ? (
          <p className="text-green-600 text-sm" role="status">{serverSuccess}</p>
        ) : null}

        <div className="flex justify-center">
          <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-ppink text-primary-foreground border-1 border-black rounded-2xl hover:bg-ppink/90 font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </div>
      </form>
    </Form>
  );
}
