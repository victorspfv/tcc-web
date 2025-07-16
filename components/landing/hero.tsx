import { Button } from "@/components/ui/button";
import { Star, TreeDeciduous, TrendingUp } from "lucide-react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import HeroShape from "./hero-shape";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: ["400"],
});

const Hero = () => {
    return (
        <section className="relative bg-background overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <HeroShape />
            </div>
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <div className="space-y-6">
                        <h1
                            className={`text-6xl lg:text-8xl font-bold text-foreground leading-tight ${pacifico.className}`}>
                            Your Clique, Your Closet
                        </h1>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex-col sm:flex-row gap-4 justify-center hidden lg:flex">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground border-1 border-black rounded-2xl hover:bg-primary/80 font-bold px-10 py-6 shadow-card hover:shadow-hover transition ease-in-out">
                            Get The App
                        </Button>
                    </div>

                    {/* Phone Mockup with Floating Elements */}
                    <div className="relative mt-16">
                        {/* Central Phone */}
                        <div className="relative w-80 h-[600px] mx-auto">
                            <Image priority src="/assets/images/mock1.png" alt="Phone" width={320} height={600} />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-20 left-0 lg:left-20 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Exclusive Access</div>
                                    <div className="text-sm text-muted-foreground">Only select schools</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-32 right-0 lg:right-20 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Increased Value</div>
                                    <div className="text-sm text-muted-foreground">10% more than retail</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-20 left-0 lg:left-16 bg-white rounded-2xl p-4 border-1 border-black max-w-sm shadow-card">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-chart-4 rounded-xl flex items-center justify-center">
                                    <TreeDeciduous className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground text-left">Sustainable</div>
                                    <div className="text-sm text-muted-foreground">
                                        Give a second life to your clothes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
