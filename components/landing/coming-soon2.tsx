import { Check, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ComingSoon2() {
    return (
        <section className="bg-secondary py-16 md:py-20 lg:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-8 lg:px-32 relative z-10">
                <div className="max-w-2xl flex flex-col gap-8 md:gap-12">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-pacifico leading-tight text-foreground">
                        Coming Soon to the App Store and Google Play
                    </h2>
                    <ul className="flex flex-col gap-4 md:gap-6">
                        <li className="flex items-center gap-3 md:gap-4">
                            <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent shadow-card border-1 border-black">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                            </div>
                            <p className="text-foreground font-semibold text-base md:text-lg">Rent, Resell, and Buy Outfits</p>
                        </li>
                        <li className="flex items-center gap-3 md:gap-4">
                            <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent shadow-card border-1 border-black">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                            </div>
                            <p className="text-foreground font-semibold text-base md:text-lg">Exclusive Access</p>
                        </li>
                        <li className="flex items-center gap-3 md:gap-4">
                            <div className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent shadow-card border-1 border-black">
                                <Check className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
                            </div>
                            <p className="text-foreground font-semibold text-base md:text-lg">Verified School Network</p>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-primary text-primary-foreground border-1 border-black shadow-card hover:shadow-hover transition ease-in-out hover:bg-primary/90 py-2 h-12 rounded-2xl px-8 font-bold">
                            <Play className="w-4 h-4 mr-2" />
                            Get Early Access
                        </Button>
                    </div>
                </div>
            </div>

            {/* Phone mockup positioned at bottom right, hiding behind section */}
            <div className="absolute bottom-0 right-0 translate-y-1/16 translate-x-[-200px] hidden lg:block">
                <div className="relative">
                    <div className="shadow-card bg-accent rounded-4xl border-1 border-black relative flex justify-center h-[32rem] w-[30rem] overflow-hidden">
                        <Image
                            className="rounded-2xl w-full h-full object-contain p-4"
                            width={350}
                            height={800}
                            src="/assets/images/mocup1.png"
                            alt="Mobile app mockup showing The Closet Clique interface"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Mobile version - centered at bottom */}
            <div className="block lg:hidden mt-8">
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="shadow-card bg-accent rounded-2xl border-1 border-black relative flex justify-center h-[20rem] w-[15rem] overflow-hidden">
                            <Image
                                className="rounded-2xl w-full h-full object-contain p-4"
                                width={350}
                                height={800}
                                src="/assets/images/mocup1.png"
                                alt="Mobile app mockup showing The Closet Clique interface"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
