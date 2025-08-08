"use client";

import Image from "next/image";
import HeaderPage from "@/components/landing/header-page";
import React from "react";
import { motion } from "framer-motion";
import CTA2 from "@/components/landing/cta2";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight } from "lucide-react";
import TeamCard from "@/components/landing/team-card";
import AmbassadorsGallery from "@/components/landing/ambassadors-gallery";

import Mia from "@/public/assets/images/founders/mia.webp";
import Andrea from "@/public/assets/images/founders/andrea-nayfa.webp";


export default function CrewPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <main className="pt-[88px] lg:pt-[104px]">
            <HeaderPage title="Introducing the Clique Crew" color="bg-pblue200" />

            {/* Founder Section */}
            <section className="bg-background py-16 md:py-20 lg:py-32">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}>
                    <div className="flex flex-col items-center justify-center gap-30">
                        {/* Mia */}
                        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
                            <motion.div
                                className="order-2 lg:order-1"
                                variants={imageVariants}
                                transition={{ duration: 0.3 }}>
                                <div className="relative overflow-hidden rounded-2xl shadow-pblue bg-white p-4">
                                    <Image
                                        priority
                                        width={600}
                                        height={800}
                                        src={Mia}
                                        placeholder="blur"
                                        quality={100}
                                        alt="Mia Taraszki - Founder"
                                        className="aspect-square w-full rounded-xl object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="order-1 flex flex-col lg:order-2 lg:items-start lg:text-left"
                                variants={itemVariants}>
                                <motion.div className="space-y-6" variants={textVariants}>
                                    <motion.div variants={textVariants}>
                                        <motion.span
                                            className="text-primary text-2xl md:text-3xl font-pacifico mb-2 block"
                                            variants={textVariants}>
                                            Co-Founder
                                        </motion.span>
                                        <motion.h1
                                            className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground"
                                            variants={textVariants}>
                                            Mia Taraszki
                                        </motion.h1>
                                    </motion.div>

                                    <motion.p
                                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                                        variants={textVariants}>
                                        Connector, party planner, proud girl mom, and Co-Founder of The Closet Clique,
                                        Mia believes life is a series of moments worth celebrating. Whether it is a
                                        themed birthday dinner, a homecoming preparty, or a weekly game of mahjong with
                                        friends, she is always finding ways to make everyday experiences more memorable.
                                    </motion.p>

                                    <motion.div variants={textVariants}>
                                        <Collapsible className="group/collapsible">
                                            <CollapsibleTrigger className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors mb-2 flex items-center">
                                                Read more about Mia
                                                <ArrowRight className="w-4 h-4  ml-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <p className="text-muted-foreground mb-2">
                                                    After graduating from TCU (Go Frogs!) with a BBA in Marketing and a
                                                    minor in Advertising and Public Relations, Mia spent years building
                                                    a successful career in outside and pharmaceutical sales. There, she
                                                    developed a strong foundation in relationship building, strategy,
                                                    and brand communication. Eventually, she shifted her focus to
                                                    full-time family life, bringing that same energy and leadership into
                                                    her home and community.
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    With a house full of girls, Mia has experienced firsthand the
                                                    excitement and expectation of showing up for every occasion feeling
                                                    confident and put together. That real-life need sparked the idea for
                                                    The Closet Clique.
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    The Closet Clique is more than an app. It is a movement to make
                                                    closet sharing accessible, seamless, and community based. Girls can
                                                    rent and resell within their school networks, expanding their
                                                    wardrobes, supporting sustainability, and earning from what they
                                                    already own.
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    Mia is especially proud to be building this alongside her daughters
                                                    and their community of friends. They are her toughest critics,
                                                    biggest cheerleaders, and daily collaborators. Together, they are
                                                    creating something that empowers young women, encourages mindful
                                                    consumption, and inspires real-world entrepreneurial thinking.
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Mia lives in Dallas with her husband, their three daughters (ranging
                                                    from high school to college), and their youngest, a son who proudly
                                                    claims the title of best little brother ever.
                                                </p>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                        {/* Andrea Nayfa, Co-Founder */}
                        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
                            <motion.div
                                className="order-2 lg:order-2"
                                variants={imageVariants}
                                transition={{ duration: 0.3 }}>
                                <div className="relative overflow-hidden rounded-2xl shadow-pblue bg-white p-4">
                                    <Image
                                        priority
                                        src={Andrea}
                                        placeholder="blur"
                                        quality={100}
                                        alt="Andrea Nayfa - Co-Founder"
                                        className="aspect-square w-full rounded-xl"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="order-1 flex flex-col lg:order-1 lg:items-start lg:text-left"
                                variants={itemVariants}>
                                <motion.div className="space-y-6" variants={textVariants}>
                                    <motion.div variants={textVariants}>
                                        <motion.span
                                            className="text-primary text-2xl md:text-3xl font-pacifico mb-2 block"
                                            variants={textVariants}>
                                            Co-Founder
                                        </motion.span>
                                        <motion.h1
                                            className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground"
                                            variants={textVariants}>
                                            Andrea Nayfa
                                        </motion.h1>
                                    </motion.div>

                                    <motion.p
                                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                                        variants={textVariants}>
                                        Andrea Nayfa is a Co-Founder of The Closet Clique, a curated fashion marketplace
                                        designed to empower a community of young entrepreneurs through style,
                                        sustainability, and business minded thinking. More than just a platform to rent
                                        and resell fashion and dorm accessories, The Closet Clique is a launchpad for
                                        young adults to gain real-world experience, build confidence, and explore the
                                        possibilities of entrepreneurship.
                                    </motion.p>

                                    <motion.div variants={textVariants}>
                                        <Collapsible className="group/collapsible">
                                            <CollapsibleTrigger className="text-primary font-semibold text-lg hover:text-primary/80 transition-colors mb-2 flex items-center">
                                                Read more about Andrea
                                                <ArrowRight className="w-4 h-4  ml-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <p className="text-muted-foreground mb-2">
                                                    Andrea graduated from Texas A&M University (Gig ’em!) with a degree
                                                    in Communications and Marketing. She launched her career in
                                                    television, working in news, national marketing, and sales before
                                                    transitioning into luxury real estate with Allie Beth Allman and
                                                    Associates.
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    Raised in a family with deep roots in the dry goods and textile
                                                    business, Andrea’s passion for creativity and entrepreneurship
                                                    started early. That legacy continues through her work at The Closet
                                                    Clique, where she is focused on giving the next generation tools
                                                    they can carry into any career path. She believes skills like
                                                    communication, ownership, and business literacy are critical for
                                                    long-term success.
                                                </p>
                                                <p className="text-muted-foreground mb-2">
                                                    Outside of The Closet Clique, Andrea is an active community leader
                                                    in Dallas. She has chaired major fundraising events, led volunteer
                                                    efforts, and supported organizations focused on children’s health
                                                    and family causes. Her natural energy and ability to unite people
                                                    around purpose driven work continues to be one of her greatest
                                                    strengths.
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Andrea lives in Dallas with her husband and their three children.
                                                    Her daughter, Ella Kate, the youngest of the family, is also her
                                                    business partner at The Closet Clique, making this journey both
                                                    personal and powerful.
                                                </p>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
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
                    viewport={{ once: true, amount: 0.2 }}>
                    <motion.div className="text-center mb-16" variants={itemVariants}>
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-pacifico leading-tight text-foreground mb-6"
                            variants={textVariants}>
                            Our Team
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
                            variants={textVariants}>
                            Meet the amazing team behind The Closet Clique
                        </motion.p>
                    </motion.div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12">
                            <TeamCard
                                name="Ava Taraszki"
                                title="Executive Officer"
                                description="College Division"
                                image="/assets/images/team/ava.webp"
                            />
                            <TeamCard
                                name="Zoe Taraszki"
                                title="Executive Officer"
                                description="High School Division"
                                image="/assets/images/team/zoe.webp"
                            />
                            <TeamCard
                                name="Lexi Taraszki"
                                title="Executive Officer"
                                description="High School Division"
                                image="/assets/images/team/lexi.webp"
                            />
                            <TeamCard
                                name="Ella Kate Nayfa"
                                title="Executive Officer"
                                description="High School Division"
                                image="/assets/images/team/ella.webp"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <AmbassadorsGallery />

            <CTA2 bgColor="bg-pblue" />
        </main>
    );
}
