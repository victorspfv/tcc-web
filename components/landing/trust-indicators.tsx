"use client";

import { Heart, Sparkles, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustIndicators() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.8 
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
                duration: 0.8,
            },
        },
    };

    const iconVariants = {
        rest: { 
            scale: 1, 
            rotate: 0 
        },
        hover: { 
            scale: 1.1, 
            rotate: 10,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20
            }
        },
    };

    const trustItems = [
        {
            icon: Users,
            text: "Community Connection",
            bgColor: "bg-primary/20",
            iconColor: "text-primary",
        },
        {
            icon: Star,
            text: "Earn While You Share",
            bgColor: "bg-secondary/20",
            iconColor: "text-secondary",
        },
        {
            icon: Heart,
            text: "Save Your Favorites",
            bgColor: "bg-accent/20",
            iconColor: "text-accent",
        },
        {
            icon: Sparkles,
            text: "Affordable Fashion",
            bgColor: "bg-primary/20",
            iconColor: "text-primary",
        },
    ];

    return (
        <motion.section 
            className="flex flex-wrap justify-center items-center gap-8 py-18 bg-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {trustItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <motion.div 
                        key={index}
                        className="flex items-center gap-2"
                        variants={itemVariants}
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                    >
                        <motion.div 
                            className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center shadow-card`}
                            variants={iconVariants}
                            whileHover={{
                                scale: 1.1,
                            }}
                            transition={{
                                type: "spring" as const,
                                stiffness: 300,
                                damping: 20
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse" as const,
                                    ease: "easeInOut" as const,
                                    delay: index * 0.5,
                                }}
                            >
                                <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                            </motion.div>
                        </motion.div>
                        <motion.span 
                            className="font-bold text-foreground text-lg"
                        >
                            {item.text}
                        </motion.span>
                    </motion.div>
                );
            })}
        </motion.section>
    );
}
