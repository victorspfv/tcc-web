"use client";

import Image from "next/image";
import HeaderPage from "@/components/landing/header-page";
import React from "react";
import TeamCard from "@/components/landing/team-card";
import { motion } from "framer-motion";
import CTA from "@/components/landing/cta";

export default function CrewPage() {
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8
            }
        }
    };

    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <HeaderPage title="Meet the Crew" color="bg-pyellow" />
            
            {/* Founder Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32">
                <motion.div 
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
                        <motion.div
                            className="order-2 lg:order-1"
                            variants={imageVariants}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-card border-1 border-black bg-white p-4">
                                <Image
                                    width={600}
                                    height={800}
                                    src="/assets/images/img6.webp"
                                    alt="Mia Taraszki - Founder"
                                    className="aspect-[0.8] w-full rounded-xl object-cover"
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div className="order-1 flex flex-col lg:order-2 lg:items-start lg:text-left" variants={itemVariants}>
                            <motion.div className="space-y-6" variants={textVariants}>
                                <motion.div variants={textVariants}>
                                    <motion.span 
                                        className="text-primary text-2xl md:text-3xl font-pacifico mb-2 block"
                                        variants={textVariants}
                                    >
                                        Founder
                                    </motion.span>
                                    <motion.h1 
                                        className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground"
                                        variants={textVariants}
                                    >
                                        Mia Taraszki
                                    </motion.h1>
                                </motion.div>
                                
                                <motion.p 
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                                    variants={textVariants}
                                >
                                    Connector, party planner, proud girl mom, and founder of The Closet Clique, Mia believes
                                    life is a series of moments worth celebrating—whether it&apos;s a themed birthday dinner, a
                                    homecoming pre-party, or a weekly game of mahjong with friends.
                                </motion.p>
                                
                                <motion.div variants={textVariants}>
                                    <motion.a
                                        href="https://www.linkedin.com/in/mia-taraszki/"
                                        target="_blank"
                                        className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Continue reading →
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16 md:py-20 lg:py-32">
                <motion.div 
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <motion.h2 
                            className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground mb-6"
                            variants={textVariants}
                        >
                            Our Team
                        </motion.h2>
                        <motion.p 
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                            variants={textVariants}
                        >
                            Meet the amazing team behind The Closet Clique
                        </motion.p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 gap-12 md:gap-16" variants={containerVariants}>
                        {[
                            {
                                name: "Ava Taraszki",
                                title: "Executive Officer",
                                description: "Passionate about creating connections and building community through fashion. Ava brings fresh perspectives and innovative ideas to help young women express their unique style while building meaningful relationships.",
                                image: "/assets/images/img4.webp",
                                color: "bg-ppink",
                                shadow: "shadow-ppink",
                                border: "border-ppink"
                            },
                            {
                                name: "Zoe Taraszki",
                                title: "Executive Officer",
                                description: "Dedicated to sustainability and circular fashion, Zoe believes in the power of sharing to reduce waste and create positive environmental impact while helping girls discover their personal style.",
                                image: "/assets/images/img5.webp",
                                color: "bg-pgreen",
                                shadow: "shadow-pgreen",
                                border: "border-pgreen"
                            },
                            {
                                name: "Lexi Taraszki",
                                title: "Executive Officer",
                                description: "Focused on empowering young entrepreneurs and fostering creativity through fashion. Lexi is passionate about helping girls build confidence and business skills through The Closet Clique platform.",
                                image: "/assets/images/img3.webp",
                                color: "bg-pblue",
                                shadow: "shadow-pblue",
                                border: "border-pblue"
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                className={`grid items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}
                                variants={itemVariants}
                            >
                                <motion.div
                                    className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}
                                    variants={imageVariants}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        rotate: index % 2 === 0 ? 1 : -1 
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`relative overflow-hidden rounded-2xl ${member.shadow} ${member.border} border-1 bg-white p-4`}>
                                        <Image
                                            width={500}
                                            height={600}
                                            src={member.image}
                                            alt={member.name}
                                            className="aspect-[0.85] w-full rounded-xl object-cover"
                                        />
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'} flex flex-col items-start text-left space-y-6`}
                                    variants={textVariants}
                                >
                                    <motion.div variants={textVariants}>
                                        <motion.span 
                                            className={`text-2xl md:text-3xl font-pacifico mb-2 block`}
                                            style={{ color: member.color.replace('bg-', '#') }}
                                            variants={textVariants}
                                        >
                                            {member.title}
                                        </motion.span>
                                        <motion.h3 
                                            className="text-3xl md:text-4xl lg:text-5xl font-pacifico leading-tight text-foreground"
                                            variants={textVariants}
                                        >
                                            {member.name}
                                        </motion.h3>
                                    </motion.div>
                                    
                                    <motion.p 
                                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                                        variants={textVariants}
                                    >
                                        {member.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            <CTA bgColor="bg-pyellow" shadowColor="shadow-pyellowHover" />
        </main>
    );
}
