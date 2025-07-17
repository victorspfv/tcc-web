"use client";

import Image from "next/image";
import HeaderPage from "@/components/landing/header-page";
import { motion } from "framer-motion";
import CTA from "@/components/landing/cta";

export default function AboutPage() {
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
            {/* Hero Section */}
            <HeaderPage title="About Us" color="bg-ppurple" />
            
            {/* About Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32">
                <motion.div 
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex flex-col items-center justify-start gap-12 lg:gap-20 lg:flex-row">
                        {/* Mission Section */}
                        <motion.div className="flex w-full flex-col items-start justify-start gap-8 md:gap-16 lg:w-1/2" variants={itemVariants}>
                            <motion.div className="space-y-6" variants={textVariants}>
                                <motion.h2 
                                    className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground"
                                    variants={textVariants}
                                >
                                    Our Mission
                                </motion.h2>
                                <motion.p 
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                                    variants={textVariants}
                                >
                                    The Closet Clique empowers girls through closet sharing by creating trusted,
                                    school-based communities that promote sustainability, style, and connection.
                                    It&apos;s an easy, fun way to access outfits for every occasion while encouraging
                                    young women to embrace entrepreneurship and community spirit.
                                </motion.p>
                            </motion.div>
                            
                            {/* Mission Images Grid */}
                            <motion.div className="flex flex-col items-center justify-center gap-6 md:flex-row w-full" variants={itemVariants}>
                                <motion.div
                                    className="w-full md:w-1/2"
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-ppink border-1 border-ppink bg-white p-2">
                                        <Image
                                            width={400}
                                            height={600}
                                            src="/assets/images/img1.webp"
                                            alt="Mission image 1"
                                            className="aspect-[0.7] w-full object-cover rounded-xl"
                                        />
                                    </div>
                                </motion.div>
                                
                                <motion.div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2" variants={itemVariants}>
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover={{ scale: 1.02, rotate: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-pgreen border-1 border-pgreen bg-white p-2">
                                            <Image
                                                width={300}
                                                height={300}
                                                src="/assets/images/img2.webp"
                                                alt="Mission image 2"
                                                className="aspect-[1.1] w-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover={{ scale: 1.02, rotate: -1 }}
                                        transition={{ duration: 0.3 }}
                                        className="hidden md:block"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-pblue border-1 border-pblue bg-white p-2">
                                            <Image
                                                width={300}
                                                height={400}
                                                src="/assets/images/img3.webp"
                                                alt="Mission image 3"
                                                className="aspect-[0.7] w-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Vision Section */}
                        <motion.div className="flex w-full flex-col items-center justify-center gap-12 lg:w-1/2" variants={itemVariants}>
                            {/* Vision Images Grid */}
                            <motion.div className="flex flex-col items-center justify-center gap-6 md:flex-row w-full" variants={itemVariants}>
                                <motion.div
                                    className="w-full md:w-1/2"
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl shadow-ppurple border-1 border-ppurple bg-white p-2">
                                        <Image
                                            width={400}
                                            height={400}
                                            src="/assets/images/img4.webp"
                                            alt="Vision image 1"
                                            className="aspect-[0.9] w-full object-cover rounded-xl"
                                        />
                                    </div>
                                </motion.div>
                                
                                <motion.div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2" variants={itemVariants}>
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover={{ scale: 1.02, rotate: 2 }}
                                        transition={{ duration: 0.3 }}
                                        className="hidden md:block"
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-pyellow border-1 border-pyellow bg-white p-2">
                                            <Image
                                                width={300}
                                                height={400}
                                                src="/assets/images/img5.webp"
                                                alt="Vision image 2"
                                                className="aspect-[0.8] w-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </motion.div>
                                    
                                    <motion.div
                                        variants={imageVariants}
                                        whileHover={{ scale: 1.02, rotate: -2 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative overflow-hidden rounded-2xl shadow-pred border-1 border-pred bg-white p-2">
                                            <Image
                                                width={300}
                                                height={400}
                                                src="/assets/images/img6.webp"
                                                alt="Vision image 3"
                                                className="aspect-[0.9] w-full object-cover rounded-xl"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div className="space-y-6 text-center lg:text-left" variants={textVariants}>
                                <motion.h2 
                                    className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground"
                                    variants={textVariants}
                                >
                                    Our Vision
                                </motion.h2>
                                <motion.p 
                                    className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                                    variants={textVariants}
                                >
                                    We aim to become the go-to closet-sharing platform for high school and college girls
                                    nationwide where closets are connected, style is circular, and trust comes from
                                    community. We envision a world where dressing up doesn&apos;t mean buying new, but
                                    shopping smarter.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
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
                            Our Values
                        </motion.h2>
                        <motion.p 
                            className="text-lg md:text-2xl text-foreground max-w-3xl mx-auto"
                            variants={textVariants}
                        >
                            The principles that guide everything we do at The Closet Clique
                        </motion.p>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
                        {[
                            {
                                title: "Community",
                                description: "Building trusted networks where girls can connect and share safely within their school communities.",
                                color: "bg-primary"
                            },
                            {
                                title: "Sustainability", 
                                description: "Promoting circular fashion by giving clothes a second life and reducing environmental impact.",
                                color: "bg-pyellow"
                            },
                            {
                                title: "Empowerment",
                                description: "Encouraging young women to become entrepreneurs while expressing their unique style and creativity.",
                                color: "bg-ppurple"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hover border-1 border-black transition group"
                                variants={itemVariants}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div 
                                    className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-card1 group-hover:shadow-card border-1 border-black transition`}
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="text-2xl font-bold text-white">{value.title[0]}</span>
                                </motion.div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">{value.title}</h3>
                                <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
            <CTA bgColor="bg-ppurple" shadowColor="shadow-ppurpleHover" />
        </main>
    );
}
