import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    variable: "--font-pacifico",
    subsets: ["latin"],
    weight: ["400"],
});

const images = [
    "/assets/images/gallery/img1.webp",
    "/assets/images/gallery/img2.webp",
    "/assets/images/gallery/img3.webp",
    "/assets/images/gallery/img4.webp",
    "/assets/images/gallery/img5.webp",
    "/assets/images/gallery/img6.webp",
    "/assets/images/gallery/img7.webp",
    "/assets/images/gallery/img8.webp",
    "/assets/images/gallery/img9.webp",
    "/assets/images/gallery/img10.webp",
];

const Hero2 = () => {
    return (
        <section className="relative min-h-[50vh] lg:min-h-[80vh] overflow-hidden bg-secondary shadow-lg">
            <div className="absolute inset-0 opacity-90 pb-8">
                <div className="grid grid-cols-6 gap-0 h-full">
                    {/* Creating a photo grid effect with placeholder images */}
                    {Array.from({ length: 24 }, (_, i) => (
                        <div
                            className="bg-cover bg-center"
                            key={i}
                            style={{
                                backgroundImage: `url(${images[i % images.length]})`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5CA1CB]/10 to-[#5CA1CB]/1" /> */}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[50vh] lg:min-h-[80vh] px-4">
                <div className="text-center">
                    <h1 className="text-7xl md:text-9xl font-pacifico text-white mb-8 text-shadow">
                        your clique, your closet
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero2;
