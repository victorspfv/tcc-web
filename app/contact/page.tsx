"use client";

import HeaderPage from "@/components/landing/header-page";
import { motion } from "framer-motion";
import CTA from "@/components/landing/cta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <main className="pt-[56px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Contact Us" color="bg-ppink" />

            {/* Contact Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32 relative overflow-hidden">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}>
                    <div className="flex flex-col items-center justify-center gap-16">
                        {/* Content */}
                        <motion.div className="space-y-12 text-center max-w-4xl" variants={containerVariants}>
                            <motion.p className="text-3xl md:text-4xl font-pacifico text-ppink" variants={textVariants}>
                                We&apos;d love to hear from you!
                            </motion.p>
                            <motion.p className="text-lg text-muted-foreground md:text-2xl max-w-2xl text-center" variants={textVariants}>
                                Whether you have a question, want to join the waitlist, or are interested in becoming an
                                ambassador, send us a message and we&apos;ll get back to you soon.
                            </motion.p>

                            {/* Contact Form */}
                            <motion.div
                                className="bg-white rounded-2xl p-8 md:p-12 shadow-card border-1 border-black max-w-3xl mx-auto"
                                variants={itemVariants}>
                                <h2 className="text-3xl font-pacifico text-foreground mb-8 text-center">
                                    Send us a message
                                </h2>
                               
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Your name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                                className="border-1 border-black focus:border-ppink"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Your email address</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="e,g. emely@gmail.com"
                                                className="border-1 border-black focus:border-ppink"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Subject of your message"
                                            className="border-1 border-black focus:border-ppink"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Your message"
                                            className="min-h-[150px] border-1 border-black focus:border-ppink"
                                        />
                                    </div>
                                    <div className="flex justify-center">
                                        <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="bg-ppink text-primary-foreground border-1 border-black rounded-2xl hover:bg-ppink/90 font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out">
                                                Send Message
                                            </Button>
                                        </motion.div>
                                    </div>
                                </form>
                            </motion.div>

                            <motion.p
                                className="text-3xl md:text-4xl font-pacifico text-pblue mt-16"
                                variants={textVariants}>
                                We can&apos;t wait to connect with you!
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <CTA bgColor="bg-ppink" shadowColor="shadow-ppinkHover" />
        </main>
    );
}
