"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Instagram2() {
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

    const gridVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.4
            }
        }
    };

    const images = [
        "/assets/images/img1.webp",
        "/assets/images/img2.webp",
        "/assets/images/img3.webp",
        "/assets/images/img4.webp",
        "/assets/images/img5.webp",
        "/assets/images/img6.webp"
    ];

    return (
        <section className="bg-gray-100">
            <motion.div 
                className="container px-4 md:px-32 flex flex-col items-center justify-center py-16 lg:py-32"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl">
                    <motion.div className="col-span-1 flex flex-col h-full items-start p-4 md:p-10 gap-8 justify-center" variants={contentVariants}>
                        <motion.h2 
                            className="text-4xl lg:text-7xl font-pacifico leading-tight text-foreground"
                            variants={contentVariants}
                        >
                            Follow us on Instagram
                        </motion.h2>
                        <motion.p 
                            className="text-lg md:text-xl text-muted-foreground max-w-md"
                            variants={contentVariants}
                        >
                            Join our community and get inspired by the latest outfit trends, styling tips, and behind-the-scenes content from your favorite closet clique!
                        </motion.p>
                        <motion.div variants={buttonVariants}>
                            <motion.div
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button asChild className="bg-accent text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out hover:bg-primary/90 py-2 h-12 rounded-2xl px-8 font-bold">
                           <a href="https://www.instagram.com/theclosetclique/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="w-4 h-4 mr-2" />
                            Follow us
                           </a>
                        </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className="col-span-1 flex items-center justify-center" variants={gridVariants}>
                        <motion.div className="grid grid-cols-3 gap-4 max-w-lg" variants={gridVariants}>
                            {images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    className="relative aspect-square rounded-2xl overflow-hidden shadow-card border-1 border-black"
                                    variants={imageVariants}
                                    whileHover={{ 
                                        scale: 1.05,
                                        rotate: index % 2 === 0 ? 2 : -2,
                                        zIndex: 10
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Instagram post ${index + 1}`}
                                        width={180}
                                        height={180}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
