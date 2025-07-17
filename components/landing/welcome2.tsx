"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Welcome2() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
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

    const arrowVariants = {
        hidden: { opacity: 0, x: -30, y: 20 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: 1
            }
        }
    };

    return (
        <section className="bg-white py-10 px-4">
            <motion.div 
                className="container flex flex-col items-center justify-center pb-32 lg:pt-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.header variants={itemVariants}>
                    <motion.h2 
                        className="mt-6 text-center text-4xl tracking-tighter lg:text-7xl font-pacifico"
                        variants={itemVariants}
                    >
                        Welcome to The Closet Clique
                    </motion.h2>
                    <motion.p 
                        className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-2xl"
                        variants={itemVariants}
                    >
                        A resale and rental platform designed exclusively for high school and college students. Our app
                        makes closet sharing simple and streamlined. Girls can browse, rent or resell outfits within
                        their verified school network.
                    </motion.p>
                </motion.header>
                <motion.div className="group" variants={buttonVariants}>
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out hover:bg-primary/90 mt-6 py-2 h-12 rounded-2xl px-8 font-bold">
                                <Play className="w-4 h-4 mr-2" />
                                Watch A Demo
                            </Button>
                        </motion.div>
                        <motion.div 
                            className="absolute -right-25 -bottom-20 flex items-end md:-right-52"
                            variants={arrowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.svg
                                width="77"
                                height="80"
                                viewBox="0 0 77 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{ 
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <path
                                    d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z"
                                    fill="black"></path>
                                <path
                                    d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z"
                                    fill="black"></path>
                            </motion.svg>
                            <motion.p 
                                className="font-pacifico text-xl tracking-tight text-foreground"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                Click me to discover the app
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
