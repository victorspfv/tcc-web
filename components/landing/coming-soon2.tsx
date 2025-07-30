"use client";

import { Check, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ComingSoon2() {
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
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const phoneVariants = {
        hidden: { opacity: 0, x: 100, y: 50 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1.2,
                delay: 0.5,
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.6,
            },
        },
    };

    return (
        <section className="bg-secondary py-16 md:py-20 lg:py-32 relative overflow-hidden">
            <motion.div
                className="container px-4 md:px-8 lg:px-32 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <motion.div
                    className="max-w-lg lg:max-w-lg xl:max-w-2xl flex flex-col gap-8 md:gap-12"
                    variants={itemVariants}>
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-6xl font-pacifico leading-tight text-foreground"
                        variants={itemVariants}>
                        Coming Soon to the App Store and Google Play
                    </motion.h2>
                    <motion.ul className="flex flex-col gap-4 md:gap-6">
                        {["Rent, Resell, and Buy Outfits", "Exclusive Access", "Verified School Network"].map(
                            (text, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-3 md:gap-4"
                                    variants={listItemVariants}
                                    custom={index}>
                                    <motion.div
                                        className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent shadow-card border-1 border-black"
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.3 }}>
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                                    </motion.div>
                                    <p className="text-foreground font-semibold text-base md:text-lg">{text}</p>
                                </motion.li>
                            )
                        )}
                    </motion.ul>
                    <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={buttonVariants}>
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out hover:bg-primary/90 py-2 h-12 rounded-2xl px-8 font-bold">
                                <Play className="w-4 h-4 mr-2" />
                                Join the waitlist
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Phone mockup positioned at bottom right, hiding behind section */}
            <motion.div
                className="absolute bottom-0 right-0 translate-y-1/10 translate-x-[-200px] hidden lg:block"
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}>
                <motion.div
                    className="shadow-card bg-accent rounded-4xl border-1 border-black relative flex justify-center h-[34rem] w-[34rem] overflow-hidden"
                    whileHover={{
                        transform: "translateY(-30px)",
                        transition: { duration: 0.3 },
                    }}
                    transition={{ duration: 0.3 }}>
                    <Image
                        className="rounded-2xl w-full h-full object-contain p-4"
                        width={350}
                        height={800}
                        src="/assets/images/mocup1.png"
                        alt="Mobile app mockup showing The Closet Clique interface"
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Mobile version - centered at bottom */}
            <motion.div
                className="block lg:hidden mt-8"
                variants={phoneVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <div className="flex justify-center">
                    <div className="relative">
                        <motion.div
                            className="shadow-card bg-accent rounded-2xl border-1 border-black relative flex justify-center h-[20rem] w-[15rem] overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}>
                            <Image
                                className="rounded-2xl w-full h-full object-contain p-4"
                                width={350}
                                height={800}
                                src="/assets/images/mocup1.png"
                                alt="Mobile app mockup showing The Closet Clique interface"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
