"use client";

import HeaderPage from "@/components/landing/header-page";
import { Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import CTA2 from "@/components/landing/cta2";

export default function PhilanthropyPage() {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <main className="pt-[56px] lg:pt-[104px]">
            {/* Hero Section */}
            <HeaderPage title="Philanthropy" color="bg-pmint" />

            {/* Philanthropy Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32 relative overflow-hidden">
                <motion.div 
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex flex-col items-center justify-center gap-16">

                        {/* Content */}
                        <motion.div 
                            className="space-y-12 text-center max-w-4xl"
                            variants={containerVariants}
                        >
                            <motion.p 
                                className="text-3xl md:text-4xl font-pacifico "
                                variants={textVariants}
                            >
                                At The Closet Clique, we believe that every closet has the power to give.
                            </motion.p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div 
                                    className="bg-white rounded-2xl p-8 shadow-card border-1 border-black hover:shadow-hover transition"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                >
                                    <div className="flex flex-col items-center gap-6">
                                        <motion.div 
                                            className="w-16 h-16 bg-pmint rounded-full flex items-center justify-center border-1 border-black shadow-sm"
                                            whileHover={{ rotate: 10, scale: 1.05 }}
                                        >
                                            <Gift className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <p className="text-lg leading-relaxed text-foreground">
                                            Each year during the holiday season, we host a community-wide Closet Cleanout, inviting girls to
                                            donate gently loved clothing and accessories to support local charities serving women, teens and
                                            families.
                                        </p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-2xl p-8 shadow-card border-1 border-black hover:shadow-hover transition"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                >
                                    <div className="flex flex-col items-center gap-6">
                                        <motion.div 
                                            className="w-16 h-16 bg-ppink rounded-full flex items-center justify-center border-1 border-black shadow-sm"
                                            whileHover={{ rotate: -10, scale: 1.05 }}
                                        >
                                            <Sparkles className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <p className="text-lg leading-relaxed text-foreground">
                                            It&apos;s our way of turning personal style into shared impact, clearing space in your closet while
                                            making room for someone else to feel seen, confident and cared for.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.p 
                                className="text-3xl md:text-4xl font-pacifico text-ppink mt-8"
                                variants={textVariants}
                            >
                                Because at The Closet Clique, we believe giving back is always in style.
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
                

            </section>
            
            {/* CTA Section */}
            <CTA2 bgColor="bg-pblue" />
        </main>
    );
}
