import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users } from "lucide-react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: ["400"],
});

const Hero = () => {
    return (
        <section
            className="relative bg-background overflow-hidden bg-no-repeat bg-position-[center_bottom]"
            style={{ backgroundImage: "url(/assets/images/shape.svg)" }}>
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <div className="space-y-6">
                        
                        <h1
                            className={`text-5xl lg:text-8xl font-bold text-foreground leading-tight ${pacifico.className}`}>
                            Your Clique, Your Closet
                        </h1>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/80 font-bold px-10 py-6 shadow-card hover:shadow-hover transition-all duration-300 ease-in-out">
                            Get The App
                        </Button>
                    </div>

                    {/* Phone Mockup with Floating Elements */}
                    <div className="relative mt-16">
                        {/* Central Phone */}
                        <div className="relative w-80 h-[600px] mx-auto">
                            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl p-3 border">
                                <div className="w-full h-full bg-primary rounded-[2.5rem] overflow-hidden relative">
                                    {/* Phone Screen Content */}
                                    <div className="p-6 space-y-6 text-white">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm">9:41</div>
                                            <div className="flex gap-1">
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                                <div className="w-1 h-1 bg-white rounded-full"></div>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-3xl font-bold">$18,459</div>
                                            <div className="text-sm opacity-80">Total Balance</div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="bg-white/20 rounded-xl p-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Savings Account</span>
                                                    <span className="font-bold">$12,450</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/20 rounded-xl p-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm">Checking Account</span>
                                                    <span className="font-bold">$6,009</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-20 left-0 lg:left-20 bg-white rounded-2xl p-4 shadow-xl border max-w-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Investment Growth</div>
                                    <div className="text-sm text-muted-foreground">+12.5% this month</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-32 right-0 lg:right-20 bg-white rounded-2xl p-4 shadow-xl border max-w-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Credit Score</div>
                                    <div className="text-sm text-muted-foreground">Excellent (785)</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-20 left-0 lg:left-16 bg-white rounded-2xl p-4 shadow-xl border max-w-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Shared Goals</div>
                                    <div className="text-sm text-muted-foreground">3 active goals</div>
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
