"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA({ bgColor }: { bgColor: string, shadowColor: string }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                delay: 0.4
            }
        }
    };

    const phoneStackVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 100 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    const phoneVariants = {
        hidden: { opacity: 0, scale: 0.9, rotateZ: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const backPhoneVariants = {
        ...phoneVariants,
        visible: {
            ...phoneVariants.visible,
            rotateZ: -30,
            transition: {
                duration: 0.8,
                delay: 0.1
            }
        }
    };

    const middlePhoneVariants = {
        ...phoneVariants,
        visible: {
            ...phoneVariants.visible,
            rotateZ: -15,
            transition: {
                duration: 0.8,
                delay: 0.2
            }
        }
    };

    const frontPhoneVariants = {
        ...phoneVariants,
        visible: {
            ...phoneVariants.visible,
            rotateZ: 0,
            transition: {
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    return (
        <section>
            <motion.div 
                className="max-w-full overflow-hidden border-y border-border bg-primary pt-10 md:pt-16 lg:pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="relative container flex flex-col md:flex-row md:space-x-12">
                    <motion.div 
                        className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2"
                        variants={contentVariants}
                    >
                        <motion.h3 
                            className="font-pacifico mb-3 text-4xl font-semibold md:mb-4 md:text-7xl lg:mb-6"
                            variants={contentVariants}
                        >
                            Coming Soon
                        </motion.h3>
                        <motion.p 
                            className="mb-8 mt-6 max-w-2xl text-lg text-foreground md:text-2xl"
                            variants={contentVariants}
                        >
                            Coming Soon to the App Store and Google Play.
                            We are working hard to bring you the best experience. Stay tuned for updates!
                        </motion.p>
                        <motion.div variants={buttonVariants} className="w-fit mb-10 lg:mb-0">
                            <motion.div
                                //whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button
                                    size="lg"
                                    className={`text-primary-foreground border-1 border-black rounded-2xl bg-secondary hover:bg-secondary font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out`}>
                                        Join the Waitlist
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full"
                        variants={phoneStackVariants}
                    >
                        <div className="relative aspect-8/5 h-full min-h-[16rem] w-full">
                            {/* Back phone */}
                            <motion.div 
                                className="pt-4 absolute top-0 right-0 z-40 flex -translate-x-[24%] translate-y-[18%] -rotate-[5deg] justify-center overflow-clip rounded-3xl md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]"
                                variants={backPhoneVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    //rotateZ: -25,
                                    y: -20,
                                    x: -50,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/assets/images/mock1.png"
                                    alt="Phone"
                                    width={320}
                                    height={600}
                                    className="rounded-3xl"
                                />
                            </motion.div>
                            
                            {/* Middle phone */}
                            <motion.div 
                                className="p-0 absolute top-0 right-0 z-40 flex  -translate-x-[20%] translate-y-[8%] -rotate-[5deg] justify-center overflow-clip rounded-3xl md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]"
                                variants={middlePhoneVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    //rotateZ: -10,
                                    y: -20,
                                    x: -50,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src="/assets/images/mock1.png"
                                    alt="Phone"
                                    width={320}
                                    height={600}
                                    className="rounded-3xl"
                                />
                            </motion.div>
                            
                            {/* Shadow placeholder */}
                            <div className={`absolute top-0 right-90 z-10 overflow-clip rounded-3xl p-8 ${bgColor}`} />

                            {/* Front phone */}
                            <motion.div 
                                className={`pt-4 absolute -translate-y-[6%] top-0 right-0 z-40 flex items-center justify-center overflow-clip rounded-3xl`}
                                variants={frontPhoneVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -10,
                                    zIndex: 50,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/assets/images/mock1.png"
                                        alt="Phone"
                                        width={320}
                                        height={600}
                                        className="rounded-3xl"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
