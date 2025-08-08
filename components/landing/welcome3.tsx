"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

import DressTcc from "@/components/icons/dress-tcc";
import LockTcc from "@/components/icons/lock-tcc";
import RecycleTcc from "@/components/icons/recycle-tcc";
import CheckTcc from "@/components/icons/check-tcc";
import EarnTcc from "@/components/icons/earn-tcc";
import CalendarTcc from "@/components/icons/calendar-tcc";
import { WaitlistForm } from "@/components/landing/waitlist-form";

import MainTemp2 from "@/public/assets/images/mocks/main-temp2-screen.png";

export default function Welcome3() {
    const containerVariants = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: {
                duration: 0.9,
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        offscreen: { opacity: 0, y: 50 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const buttonVariants = {
        offscreen: { opacity: 0, scale: 0.8 },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.4,
            },
        },
    };

    const floatingCardVariants = {
        offscreen: { opacity: 0, scale: 0.8, x: -20 },
        onscreen: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                delay: 0.4,
            },
        },
    };
    const phoneVariants = {
        offscreen: { opacity: 0, scale: 0.9, y: 50 },
        onscreen: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2,
            },
        },
        viewport: { once: true, amount: 0.3 },
    };

    const shapeVariants = {
        offscreen: { opacity: 0, scale: 0.9, y: 30 },
        onscreen: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.2,
            },
        },
    };

    return (
        <section className="bg-white py-10 px-4 relative overflow-hidden">
            <motion.div
                className="container flex flex-col items-center justify-center pb-32 lg:pt-20"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}>
                <motion.header variants={itemVariants}>
                    <motion.h2
                        className="mt-6 text-center text-4xl tracking-tighter lg:text-7xl font-pacifico"
                        variants={itemVariants}>
                        Join the Clique, Share the Looks
                    </motion.h2>
                    <motion.p
                        className="mx-auto mt-6 max-w-4xl text-center text-lg text-muted-foreground md:text-2xl"
                        variants={itemVariants}>
                        <strong>The Closet Clique</strong> is your go-to app for <strong>renting and reselling</strong>{" "}
                        outfits within your <strong>high school</strong> or <strong>college community</strong>. Each{" "}
                        <strong>verified school network</strong>, aka your <strong>Clique</strong>, is a{" "}
                        <strong>private space</strong> where girls can <strong>post items</strong> from their own
                        closets to <strong>rent or resell</strong>, <strong>earn cash</strong>, and{" "}
                        <strong>browse looks</strong> from <strong>friends (and friends of friends)</strong>. Whether
                        you&apos;re getting ready for a <strong>formal</strong>, <strong>game day</strong>, or{" "}
                        <strong>weekend plans</strong>, it&apos;s like having a <strong>shared closet</strong> with your
                        entire <strong>campus</strong>. We&apos;re launching first in our{" "}
                        <strong>hometown in Dallas</strong> with select high schools and we&apos;ve got our sights set
                        BIG on <strong>college campuses nationwide</strong>.
                    </motion.p>
                    <motion.p
                        className="mx-auto mt-6 max-w-4xl text-center text-lg text-primary font-semibold md:text-2xl"
                        variants={itemVariants}>
                        Because in Texas, everything (especially closets and dreams) is bigger.
                    </motion.p>
                </motion.header>
                <motion.div className="group mt-10" variants={buttonVariants}>
                    
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            variants={itemVariants}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.4 }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}>
                            <WaitlistForm />
                        </motion.div>
                    </div>
                </motion.div>
                {/* Hero Shape */}
                <div className="relative w-80 h-[600px] mx-auto mt-16">
                    <motion.div
                        className="absolute bottom-[-90rem] left-0 w-full flex justify-center"
                        variants={shapeVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0 }}>
                        <Image
                            src="/assets/images/circles.svg"
                            width={1000}
                            height={1000}
                            alt=""
                            className=" aspect-square h-auto w-[180rem] max-w-none"
                        />
                    </motion.div>

                    {/* Phone Frame */}
                    <motion.div
                        variants={phoneVariants}
                        className="relative w-80 mx-auto"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.1 }}>
                        <Image loading="lazy" src={MainTemp2} alt="Phone" placeholder="blur" quality={100} />
                    </motion.div>

                    {/* Floating Circles */}
                    {/* Top Left Circle - Closet Sharing */}
                    <div className="hidden lg:block">
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-pblue700 group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <DressTcc className="text-white group-hover:text-pblue700 w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-pblue700">
                                        Closet Sharing
                                    </div>
                                    <div className="absolute -bottom-6 text-center text-pblue700 text-xs font-bold opacity-0 group-hover:opacity-100">
                                        Expand your wardrobe without the splurge.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Top Right Circle - Occasions */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-pyellow group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <CalendarTcc className="text-white group-hover:text-pyellow w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-pyellow">
                                        Occasions
                                    </div>
                                    <div className="absolute -bottom-2 text-center text-pyellow text-xs font-bold opacity-0 group-hover:opacity-100">
                                        Rent or buy for every event.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Circle - Earn Income */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-pblue group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <EarnTcc className="text-white group-hover:text-pblue w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-pblue">
                                        Earn Income
                                    </div>
                                    <div className="absolute -bottom-6 text-center text-pblue text-xs font-bold opacity-0 group-hover:opacity-100">
                                        Make money from what you already own.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Bottom Right Circle - Convenient */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-pmint group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <CheckTcc className="text-white group-hover:text-pmint w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-pmint">
                                        Convenient
                                    </div>
                                    <div className="absolute -bottom-6 text-center text-pmint text-xs font-bold opacity-0 group-hover:opacity-100">
                                        Easy local handoffs. No shipping.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Bottom Left Circle - Sustainability */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-primary group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <RecycleTcc className="text-white group-hover:text-primary w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-primary">
                                        Sustainability
                                    </div>
                                    <div className="absolute bottom-2 text-center text-primary text-xs font-bold mt-1 opacity-0 group-hover:opacity-100">
                                        Wear. Share. Repeat.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Left Circle - Private */}
                        <motion.div
                            variants={floatingCardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.1 }}
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
                                <div className="w-30 h-30 bg-pblue200 group-hover:bg-transparent rounded-full flex flex-col items-center justify-center gap-2">
                                    <LockTcc className="text-white group-hover:text-pblue200 w-10 h-10" />
                                    <div className="font-bold text-white text-sm group-hover:text-pblue200">
                                        Private
                                    </div>
                                    <div className="absolute -bottom-2 text-center text-pblue200 text-xs font-bold opacity-0 group-hover:opacity-100">
                                        Exclusive to verified students.
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
