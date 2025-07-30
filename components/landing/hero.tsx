"use client";

import { Star, TreeDeciduous, TrendingUp } from "lucide-react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import HeroShape from "@/components/landing/hero-shape";
import { motion } from "framer-motion";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: ["400"],
});

const Hero = () => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

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

    return (
        <section className="relative bg-background overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <HeroShape />
            </div>
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20">
                <motion.div
                    className="text-center space-y-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    {/* Main Headline */}
                    {/* <div className="space-y-6">
                        <motion.h1
                            variants={itemVariants}
                            className={`text-6xl lg:text-8xl font-bold text-foreground leading-tight ${pacifico.className}`}>
                            Your Clique, Your Closet
                        </motion.h1>
                    </div> */}

                    {/* CTA Buttons */}
                    {/* <motion.div
                        variants={itemVariants}
                        className="flex-col sm:flex-row gap-4 justify-center hidden lg:flex">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground border-1 border-black rounded-2xl hover:bg-primary/80 font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out">
                                Get The App
                            </Button>
                        </motion.div>
                    </motion.div> */}

                    {/* Phone Mockup with Floating Elements */}
                    <div className="relative mt-16">
                        {/* Central Phone */}
                        <motion.div variants={phoneVariants} className="relative w-80 mx-auto">
                            <Image loading="lazy" src="/assets/half-iphone.png" alt="Phone" width={320} height={600} />
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
                            className="absolute top-20 left-0 lg:left-20 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
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
                            className="absolute top-32 right-0 lg:right-20 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
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
                            className="absolute bottom-20 left-0 lg:left-16 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
