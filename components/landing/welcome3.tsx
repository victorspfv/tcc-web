"use client";

import { Button } from "@/components/ui/button";
import { DollarSign, Leaf, Users, Calendar, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Welcome3() {
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

    const shapeVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30, transform: "translateY(100px)" },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.4,
            },
            transform: "translateY(0px)",
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
                        The Closet Clique is your go-to app for renting and reselling outfits within your high school or
                        college community. Each verified school network, aka your Clique, is a private space where girls
                        can post items from their own closets to rent or resell, earn cash, and browse looks from
                        friends (and friends of friends). Whether you&apos;re getting ready for a formal, game day, or
                        weekend plans, it&apos;s like having a shared closet with your entire campus. We&apos;re
                        launching first in our hometown in Dallas with select high schools and we&apos;ve got our
                        sights set BIG on college campuses nationwide.
                    </motion.p>
                    <motion.p
                        className="mx-auto mt-6 max-w-4xl text-center text-lg text-primary font-semibold md:text-2xl"
                        variants={itemVariants}>
                        Because in Texas, everything (especially closets and dreams) is bigger.
                    </motion.p>
                </motion.header>
                <motion.div className="group mt-10" variants={buttonVariants}>
                    <div className="relative flex items-center justify-center">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out mt-6 py-2 h-12 rounded-2xl px-8 font-bold text-lg">
                                Join the waitlist
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Hero Shape */}
                <div className="relative w-80 h-[600px] mx-auto mt-16">
                    <motion.div
                        className="absolute bottom-[-90rem] left-0 w-full flex justify-center"
                        variants={shapeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}>
                        <Image
                            src="/assets/images/circles.svg"
                            width={1000}
                            height={1000}
                            alt=""
                            className=" aspect-square h-auto w-[180rem] max-w-none"
                        />
                    </motion.div>

                    {/* Phone Frame */}
                    <motion.div variants={phoneVariants} className="relative w-80 mx-auto">
                        <Image loading="lazy" src="/assets/dark.png" alt="Phone" width={320} height={600} />
                    </motion.div>

                    {/* Floating Circles */}
                    {/* Top Left Circle - Closet Sharing */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.8 }}
                        whileHover={{
                            rotate: -10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute top-16 left-0 lg:-left-42 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-pblue700 rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <Users className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Closet Sharing</div>
                            </div>
                            <motion.div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Closet Sharing</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Browse through your classmates&apos; closets and discover unique pieces.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Top Right Circle - Occasions */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.0 }}
                        whileHover={{
                            rotate: -10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute top-20 right-0 lg:-right-38 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-ppurple rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <Calendar className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Occasions</div>
                            </div>
                            <motion.div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Occasions</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Perfect outfits for every special event and celebration.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Circle - Earn Income */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                        whileHover={{
                            rotate: 10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute top-1/2 right-0 lg:-right-60 transform -translate-y-1/2 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-accent rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <DollarSign className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Earn Income</div>
                            </div>
                            <motion.div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Earn Income</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Transform your wardrobe into a revenue stream.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Right Circle - Convenient */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.4 }}
                        whileHover={{
                            rotate: -10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute bottom-12 right-0 lg:-right-42 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-pmint rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <Shield className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Convenient</div>
                            </div>
                            <motion.div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Convenient</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Easy and secure transactions within your school network.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Left Circle - Sustainability */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.6 }}
                        whileHover={{
                            rotate: -10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute bottom-16 left-0 lg:-left-42 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-secondary rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <Leaf className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Sustainability</div>
                            </div>
                            <motion.div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Sustainability</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Reduce fashion waste through our circular economy approach.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Left Circle - Private */}
                    <motion.div
                        variants={floatingCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                        whileHover={{
                            rotate: 10,
                            transition: { duration: 0.3 },
                            zIndex: 100,
                        }}
                        className="absolute top-1/2 left-0 lg:-left-60 transform -translate-y-1/2 group cursor-pointer">
                        <motion.div
                            className="relative"
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}>
                            <div className="w-30 h-30 bg-primary rounded-4xl flex flex-col items-center justify-center gap-2 shadow-card border-1 border-black">
                                <Heart className="w-8 h-8 text-white" />
                                <div className="font-bold text-white text-sm">Private</div>
                            </div>
                            <motion.div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-2xl p-4 shadow-card border-1 border-black min-w-[200px] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                                <div className="font-bold text-gray-900 text-sm">Private</div>
                                <div className="text-gray-600 text-xs mt-1">
                                    Secure and verified student-only community platform.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
