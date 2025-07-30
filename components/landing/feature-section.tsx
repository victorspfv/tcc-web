"use client";

import Image from "next/image";
import TrustIndicators from "./trust-indicators";
import { motion } from "framer-motion";

export default function FeatureSection() {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: {
            duration: 0.8,
            staggerChildren: 0.2,
        }, },
    };

    const floatingLeftCardVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const floatingRightCardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8,
            } 
        },
    };

    const floatingRightCardVariants2 = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8,
                delay: 0.2,
            } 
        },
    };


    return (
        <motion.section
            className="pt-44 pb-12 bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <div className="container">
                <div className="w-full shrink-0">
                    <div className="relative mx-auto h-[24rem] w-full rounded-3xl bg-muted bg-primary bg-center bg-no-repeat sm:h-[24rem]">
                        <div className="absolute -top-28 bottom-0 left-1/2 z-10 mt-12 w-[12.5rem] -translate-x-1/2 transform overflow-hidden sm:w-[18.75rem]">
                            <Image
                                loading="lazy"
                                width={320}
                                height={600}
                                src="/assets/half-iphone.png"
                                alt=""
                                className="absolute top-0 z-20 block w-full"
                            />
                        </div>
                        {/* add floating card */}
                        <motion.div
                            variants={floatingLeftCardVariants}
                            whileHover={{
                                rotate: 10,
                                transition: { duration: 0.3 },
                            }}
                            initial="hidden"
                            animate="visible"
                            className="absolute z-10 top-20 left-0 lg:left-110 -rotate-12 bg-white rounded-2xl p-1 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center">
                                <Image
                                    src="/assets/images/gallery/img8.webp"
                                    className="rounded-2xl"
                                    alt="Instagram"
                                    width={132}
                                    height={132}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={floatingRightCardVariants}
                            whileHover={{
                                rotate: -10,
                                transition: { duration: 0.3},
                            }}
                            initial="hidden"
                            animate="visible"
                            className="absolute z-10 top-0 right-0 lg:right-120 rotate-8 bg-white rounded-2xl p-1 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center">
                                <Image
                                    src="/assets/images/gallery/img2.webp"
                                    className="rounded-2xl"
                                    alt="Instagram"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            variants={floatingRightCardVariants2}
                            whileHover={{
                                rotate: -10,
                                transition: { duration: 0.3 },
                            }}
                            initial="hidden"
                            animate="visible"
                            className="absolute z-10 top-52 right-0 lg:right-110 rotate-12 bg-white rounded-2xl p-1 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center">
                                <Image
                                    src="/assets/images/gallery/img3.webp"
                                    className="rounded-2xl"
                                    alt="Instagram"
                                    width={132}
                                    height={132}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <TrustIndicators />
            </div>
        </motion.section>
    );
}
