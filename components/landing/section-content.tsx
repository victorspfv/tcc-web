"use client";

import { Check, Star, TreeDeciduous, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export default function SectionContent() {
    const floatingCardVariants = {
        hidden: { opacity: 0, scale: 0.8, x: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
    const phoneVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.4,
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Right Content - Phone Mockup */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-80 h-[600px] mx-auto">
                            {/* Phone Frame */}
                            <motion.div variants={phoneVariants} className="relative w-80 mx-auto">
                                <Image loading="lazy" src="/assets/dark.png" alt="Phone" width={320} height={600} />
                            </motion.div>
                            {/* Floating Cards */}
                            <motion.div
                                variants={floatingCardVariants}
                                whileHover={{
                                    rotate: 10,
                                    transition: { duration: 0.3 },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.8 }}
                                className="absolute top-20 left-0 lg:-left-40 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">Exclusive Access</div>
                                        <div className="text-sm text-muted-foreground">Verified students only</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingCardVariants}
                                whileHover={{
                                    rotate: -10,
                                    transition: { duration: 0.3 },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 1.0 }}
                                className="absolute top-32 right-0 lg:-right-40 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">Increased Value</div>
                                        <div className="text-sm text-muted-foreground">Turn clothes into cash</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={floatingCardVariants}
                                whileHover={{
                                    rotate: -10,
                                    transition: { duration: 0.3 },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 1.2 }}
                                className="absolute bottom-20 left-0 lg:-left-40 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-chart-4 rounded-xl flex items-center justify-center">
                                        <TreeDeciduous className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground text-left">Sustainable</div>
                                        <div className="text-sm text-muted-foreground">Wear. Share. Repeat.</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Left Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-6xl font-bold font-pacifico leading-tight">
                                Join the Clique, Share the Looks!
                            </h2>
                            <p 
                            className="mb-8 mt-6 max-w-2xl text-lg text-muted-foreground md:text-2xl"
                        >
                            Rent, Buy, and Sell with Confidence. Your Style, Your Rules.
                        </p>
                        </div>

                        <motion.ul className="flex flex-col gap-4 md:gap-6 mb-8">
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
                        <div className="w-fit mb-10 lg:mb-0">
                            <Button
                                size="lg"
                                className={`text-primary-foreground border-1 border-black rounded-2xl hover:bg-primary/90 font-bold px-10 py-6 bg-primary shadow-card hover:shadow-hover transition ease-in-out`}>
                                Get Early Access
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
