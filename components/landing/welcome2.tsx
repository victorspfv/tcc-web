"use client";

import { Button } from "@/components/ui/button";
import { Star, TreeDeciduous, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Welcome2() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3,
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

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.4,
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
        <section className="bg-white py-10 px-4 relative overflow-hidden">
            <motion.div
                className="container flex flex-col items-center justify-center pb-32 lg:pt-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <motion.header variants={itemVariants}>
                    <motion.h2
                        className="mt-6 text-center text-4xl tracking-tighter lg:text-7xl font-pacifico"
                        variants={itemVariants}>
                        Join the Clique, Share the Looks!
                    </motion.h2>
                    <motion.p
                        className="mx-auto mt-6 max-w-4xl text-center text-lg text-muted-foreground md:text-2xl"
                        variants={itemVariants}>
                        A <strong>resale and rental platform</strong> designed exclusively for{" "}
                        <strong>high school and college students</strong>. Our{" "}
                        <strong>app makes closet sharing simple and streamlined</strong>. Girls can{" "}
                        <strong>browse, rent, or resell outfits</strong> within their verified school network. Whether
                        you&apos;re prepping for a formal or a birthday brunch, our goal is to make dressing up more
                        fun, accessible, and community-driven. We&apos;re proud to start in our hometown of
                        Dallas&mdash;with our sights set BIG on campuses nationwide. 
                    </motion.p>
                    <motion.p
                        className="mx-auto mt-6 max-w-4xl text-center text-lg text-primary font-semibold md:text-2xl"
                        variants={itemVariants}>
                        Because in Texas, everything (including dreams) is bigger!
                    </motion.p>
                </motion.header>
                <motion.div className="group mt-10" variants={buttonVariants}>
                    <div className="relative flex items-center justify-center">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out mt-6 py-2 h-12 rounded-2xl px-8 font-bold">
                                Download App
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
                <div className="relative w-80 h-[600px] mx-auto mt-16">
                <div className="absolute bottom-[-90rem] left-0 w-full flex justify-center">
                    <Image
                            src="/assets/images/circles.svg"
                            width={1000}
                            height={1000}
                            alt=""
                            className=" aspect-square h-auto w-[180rem] max-w-none"
                        />
                </div>
                    

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
            </motion.div>
        </section>
    );
}
