import Image from "next/image";
import HeaderPage from "@/components/landing/header-page";
import React from "react";
import TeamCard from "@/components/landing/team-card";

export default function CrewPage() {
    return (
        <main className="pt-[56px] lg:pt-[72px]">
            <HeaderPage title="Meet the Crew" color="bg-pyellow" />
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                    <Image
                        width={1000}
                        height={1000}
                        src={"/assets/images/img6.webp"}
                        alt="Mia Taraszki"
                            className="order-2 max-h-96 w-[80%] rounded-md object-cover lg:order-1 shadow-ppink"
                        />
                        <div className="order-1 flex flex-col lg:order-2 lg:items-start lg:text-left">
                        <h1 className="mb-4 text-3xl font-semibold sm:text-5xl font-pacifico">
                            <span className="text-primary text-3xl">Founder</span>
                            <br />
                            Mia Taraszki
                        </h1>
                        <p className="text-muted-foreground mb-2 max-w-xl lg:text-lg">
                            Connector, party planner, proud girl mom, and founder of The Closet Clique, Mia believes
                            life is a series of moments worth celebrating—whether it’s a themed birthday dinner, a
                            homecoming pre-party, or a weekly game of mahjong with friends.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/mia-taraszki/"
                            target="_blank"
                            className="text-primary font-semibold">
                            Continue reading
                        </a>
                    </div>
                </div>
                </div>
        </section>
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12 text-center font-pacifico text-secondary">Our Team</h2>

                <div className="grid grid-cols-1 gap-12">
                    <TeamCard
                        name="Ava Taraszki"
                        title="Executive Officer"
                        description="A resale and rental platform designed exclusively for high school and college students. Our app makes closet sharing simple and streamlined. Girls can browse, rent or resell outfits within their verified school network. Whether you are a high schooler, college student, or just a girl who loves to shop, The Closet Clique is the perfect place to find the perfect outfit for any occasion."
                        image={"/assets/images/img4.webp"}
                    />
					<TeamCard
                        name="Zoe Taraszki"
                        title="Executive Officer"
                        description="A resale and rental platform designed exclusively for high school and college students. Our app makes closet sharing simple and streamlined. Girls can browse, rent or resell outfits within "
                        image={"/assets/images/img5.webp"}
                    />
					<TeamCard
                        name="Lexi Taraszki"
                        title="Executive Officer"
                        description="A resale and rental platform designed exclusively for high school and college students. Our app makes closet sharing simple and streamlined."
                        image={"/assets/images/img3.webp"}
                    />
                </div>
            </div>
        </section>
        </main>
    );
}
