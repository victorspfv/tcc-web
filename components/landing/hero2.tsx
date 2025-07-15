import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: ["400"],
});

const Hero2 = () => {
    return (
        <section className="relative min-h-[50vh] lg:min-h-[80vh] bg-gradient-to-br from-[#5CA1CB] to-[#8DCAC3] overflow-hidden">
            <div className="absolute inset-0 opacity-60">
                <div className="grid grid-cols-6 gap-1 h-full">
                    {/* Creating a photo grid effect with placeholder images */}
                    {Array.from({ length: 24 }, (_, i) => (
                        <div
                            className="bg-cover bg-center"
                            key={i}
                            style={{
                                backgroundImage: `url(https://images.unsplash.com/photo-${
                                    [
                                        "1649972904349-6e44c42644a7",
                                        "1581091226825-a6a2a5aee158",
                                        "1519389950473-47ba0277781c",
                                        "1721322800607-8c38375eef04",
                                        "1582562124811-c09040d0a901",
                                    ][i % 5]
                                }?w=300&h=300&fit=crop)`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5CA1CB]/30 to-[#5CA1CB]/60" />
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 lg:mt-20">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <div className="space-y-6">
                        <h1
                            className={`text-5xl lg:text-8xl font-bold text-white leading-tight ${pacifico.className}`}>
                            Your Clique, Your Closet
                        </h1>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
